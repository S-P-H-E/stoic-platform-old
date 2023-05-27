import { BsCheckLg } from "react-icons/bs"
import { loadStripe } from '@stripe/stripe-js';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Plan({price}) {
    const Subscribe = async () => {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        const { error } = await stripe.redirectToCheckout({
          mode: 'subscription',
          lineItems: [
            { price: 'price_1N9mzjJVAR9FxLkwn1w68A8A', quantity: 1 }, // Replace with your actual product price ID
          ],
          successUrl: 'https://stoic-platform.vercel.app',
          cancelUrl: 'https://stoic-platform.vercel.app/cancel',
        });
    
        if (error) {
          console.error(error);
        }
      };

    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
    });  

    const PlanAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0)',
    });  

    return (
        <animated.div ref={ref} style={PlanAnimation} className="bg-[#2B2B2C] p-8 w-[350px] rounded-2xl flex flex-col justify-start items-start">
            {/* <p className='bg-white text-black rounded-full mb-5 py-1 px-3 w-fit'>
              Recommended
            </p> */}
            <div className="flex justify-start items-end">
                <h1 className="text-4xl font-medium">€{price}</h1>
                <p className="text-[#858585]">/Month</p>
            </div>
            <div className="my-2 flex flex-col justify-start items-start">
                
                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">How to start from $0</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">Grow your audience</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">Monetize your audience</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">High-quality lifestyle clips</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">AI high-quality video editor</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">Viral Sounds</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">Winning Hooks</p>
                </div>
            </div>
            <button className="bg-white text-[black] w-full mt-6 py-3 px-10 rounded-xl flex justify-center items-center gap-1" onClick={Subscribe}>
                <p className="font-medium uppercase">Join now</p>
                {/* <p className="font-extralight">€{price}/month</p> */}
            </button>
            {/* <p className="text-[11px] text-[#858585] w-full flex justify-center mt-3">*Currency might change depending on the country</p> */}
        </animated.div>
    )
}