import { BsCheckLg } from "react-icons/bs"
import { loadStripe } from '@stripe/stripe-js';

export default function Plan({price}) {
    const Subscribe = async () => {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        const { error } = await stripe.redirectToCheckout({
          mode: 'payment',
          lineItems: [
            { price: 'price_1N9mzjJVAR9FxLkwn1w68A8A', quantity: 1 }, // Replace with your actual product price ID
          ],
          successUrl: 'https://stoic-platform.vercel.app/success', // Replace with your success page URL
          cancelUrl: 'https://stoic-platform.vercel.app/cancel', // Replace with your cancel page URL
        });
    
        if (error) {
          console.error(error);
        }
      };

    return (
        <div className="bg-[#2B2B2C] p-8 w-[350px] rounded-2xl flex flex-col justify-start items-start">
            {/* <p className='bg-white text-black rounded-full mb-5 py-1 px-3 w-fit'>
              Recommended
            </p> */}
            <div className="flex justify-start items-end">
                <h1 className="text-4xl font-medium">${price}</h1>
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
                    <p className="text-[#858585] text-xl">High-quality money clips</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">AI high-quality video editor</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">Winning Sounds</p>
                </div>

                <div className="flex justify-center items-center gap-1 my-2">
                    <BsCheckLg size={25}/>
                    <p className="text-[#858585] text-xl">Winning Hooks</p>
                </div>
            </div>
            <button className="bg-white text-[black] w-full mt-6 py-3 px-10 rounded-xl flex justify-center items-center gap-1" onClick={Subscribe}>
                <p className="font-medium">Subscribe</p>
                <p className="font-extralight">${price}/month</p>
            </button>
        </div>
    )
}