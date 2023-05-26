import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Review({profile, heading, review}){
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
      });  

    const QuotesAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0)',
      });  
    
    return (
        <animated.div ref={ref} style={QuotesAnimation} className="text-white bg-[#2B2B2C] p-5 rounded-xl mx-5 md:m-0 lg:w-[500px] h-[150px]">
            <div className="flex justify-start items-center gap-2">
                <img src={profile}/>
                <h1 className="text-xl font-bold">"{heading}"</h1>
            </div>
            <p className="text-[#7D7F82] my-2">{review}</p>
        </animated.div>
    )
}