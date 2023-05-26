import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Feature({icon, title, description}) {

    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once when entering the viewport
      });  

    const FeaturesListAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(300px)',
      });  
    
    return (
        <animated.div ref={ref} style={FeaturesListAnimation} className="flex gap-5 m-6 w-full">
            <h1 className="bg-[#2B2B2C] p-5 text-4xl rounded-xl h-fit">{icon}</h1>
            <div className="flex flex-col justify-center items-start">
                <h1 className="text-3xl font-medium">{title}</h1>
                <p>{description}</p>
            </div>
        </animated.div>
    )
}