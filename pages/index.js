import React, { useState } from "react";
import { useRef } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import Hero from '@/public/images/cover.png'
import Image from "next/image";
import Feature from "@/components/Feature";
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Review from "@/components/Review";
import Plan from "@/components/Plan";

export default function Home() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialRef = useRef(null);
  const pricingRef = useRef(null);
  const FAQsRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const router = useRouter();

  const Login = () => {
    router.push("/login");
  };

  const GetStarted = () => {
    router.push("/getstarted");
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTestimonial = () => {
    testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFAQs = () => {
    FAQsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  //Animation
  const NavBarAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 100,
  });

  const HeroMessageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(300px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 500,
  });
  const HeroTitleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(300px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 800,
  });
  const HeroDescriptionAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(300px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 1000,
  });
  const HeroButtonAnimation = useSpring({
    from: { opacity: 1, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 1200,
  });
  const HeroImageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(300px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 1600,
  });
  const HeroAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(300px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 600,
  });

  const [ref1, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when entering the viewport
  });

  const FeaturesAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(300px)',
  });  

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Animation triggers only once when entering the viewport
  });  

  const TestimonialsAnimation = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(300px)',
  });  

  const [ref3, inView3] = useInView({
    triggerOnce: true, // Animation triggers only once when entering the viewport
  });  

  const PricingAnimation = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(300px)',
  });  

  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="Stoic Education Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <animated.div style={NavBarAnimation} className="fixed w-full border-b border-[#282828] z-10">
        <div className="text-white bg-[#161616] h-[80px] px-[40px] flex justify-between items-center w-full">
          <div className="w-[250px]">
            <button onClick={scrollToHome}>S T O I C</button>
          </div>
          <div className="gap-5 md:flex justify-center items-center hidden w-[250px]">
            <button className="text-[#949494] hover:underline" onClick={scrollToFeatures}>Features</button>
            <button className="text-[#949494] hover:underline" onClick={scrollToTestimonial}>Testimonials</button>
            <button className="text-[#949494] hover:underline" onClick={scrollToPricing}>Pricing</button>
            <button className="text-[#949494] hover:underline" onClick={scrollToFAQs}>FAQs</button>
          </div>

          <div className="md:flex justify-center items-end gap-3 font-medium w-[250px] hidden">
            <button className="bg-[#2B2B2B] py-2 px-4 rounded-md" onClick={Login}>Log In</button>
            <button className="bg-white text-[black] py-2 px-4 rounded-md" onClick={GetStarted}>Get Started</button>
          </div>
          { isMobileMenuOpen ?
            <CgClose size={25} className="cursor-pointer flex md:hidden" onClick={() => setIsMobileMenuOpen(false)}/>
            :
            <FiMenu size={25} className="cursor-pointer flex md:hidden" onClick={() => setIsMobileMenuOpen(true)}/>
          }
        </div>
        { isMobileMenuOpen &&
          <div className="flex flex-col text-3xl md:hidden gap-5 justify-center items-center bg-[#161616] p-3">
            <button className="text-[#949494]">Features</button>
            <button className="text-[#949494]">Testimonials</button>
            <button className="text-[#949494]">Pricing</button>
            <button className="text-[#949494]">FAQs</button>
            <button className="bg-white text-[black] py-2 px-4 rounded-md w-full" onClick={GetStarted}>Get Started</button>
          </div>
        }
      </animated.div>
      

      {/* Home */}
      <animated.div ref={homeRef} style={HeroAnimation} className="pt-28 text-center flex flex-col justify-center items-center">
        <div className="mask">
          <animated.p style={HeroMessageAnimation} className='bg-[#2B2B2C] text-[#888888] rounded-full mt-10 py-1 px-3'>
            Unlock Viral Potential Today
          </animated.p>
        </div>
        <div className="mask">
          <animated.h1 style={HeroTitleAnimation} className="text-6xl md:text-8xl font-medium py-4">
            Amplify Your Social<br/>Media Impact
          </animated.h1>
        </div>
        
        <div className="mask">
          <animated.p style={HeroDescriptionAnimation} className="text-[#7D7F82] pb-8 mx-5 md:m-0">
            Unleash your viral potential with our comprehensive coaching program, equipping <br/> you with proven strategies and expert guidance for social media fame and influence.
          </animated.p>
        </div>
        <animated.button style={HeroButtonAnimation} className="bg-white text-[black] py-3 px-10 rounded-xl">Get Started</animated.button>
        <animated.div style={HeroImageAnimation} className={"my-7 md:m-7"}>
          <Image src={Hero} className="scale-90 md:scale-100 lg:h-[600px] w-fit rounded-xl"/>
        </animated.div>
      </animated.div>

      {/* Features */}
      <div ref={featuresRef} className="flex flex-col justify-center items-center">
        <animated.div ref={ref1} style={FeaturesAnimation} className="flex flex-col justify-center items-center">
          <p className='bg-[#2B2B2C] text-[#888888] rounded-full mt-10 py-1 px-3'>
            Features 📘
          </p>
          <h1 className="text-5xl mx-5 m:m-0 text-center font-medium py-4">
            Discover the main features
          </h1>
        </animated.div>
        <div className="flex flex-col justify-center items-center m-12 lg:w-[1000px]">
          <Feature 
            icon={"📱"}
            title={"24/7 Support"}
            description={"You'll access any of the founders for help."}
          />
          <Feature 
            icon={"🤯"}
            title={"Guarantee"}
            description={"If you do not meet the view count we agree on, we will personally work with you until you reach it."}
          />
          <Feature 
            icon={"🦾"}
            title={"AI Tools"}
            description={"Use AI stay ahead of the competition."}
          />
          <Feature 
            icon={"📼"}
            title={"Clips"}
            description={"Access exclusive high quality Tate Clips."}
          />
          <Feature 
            icon={"🎵"}
            title={"Sounds"}
            description={"Get access to viral copyright free music"}
          />
          <Feature 
            icon={"💻"}
            title={"Chat"}
            description={"Network with like-minded individuals"}
          />
          <Feature 
            icon={"📹"}
            title={"Editing"}
            description={"Learn how to edit and structure your videos to get more views."}
          />
          
        </div>
      </div>

      {/* Testimonials */}
      <animated.div ref={ref2} style={TestimonialsAnimation}>
        <div ref={testimonialRef} className="flex flex-col justify-center items-center">
          <p className='bg-[#2B2B2C] text-[#888888] rounded-full mt-10 py-1 px-3'>
            They already love our program 😍
          </p>
          <h1 className="text-5xl mx-5 m:m-0 text-center font-medium py-4">
            See what our students say about us
          </h1>
          <div className="my-12 md:m-12 grid gap-3 grid-cols-1 md:grid-cols-2">
            <Review 
              profile={"https://framerusercontent.com/images/bl39AdGKIqJR3rmOzhkPvTf65vQ.png"}
              heading={"Amazing Service"}
              review={"This software is so amazing I love it very much. you have to buy."}
            />
            <Review 
              profile={"https://framerusercontent.com/images/SK28bkE1orcey0vf79oQZPz0yA.png"}
              heading={"Love the software"}
              review={"It's so easy to use."}
            />
            <Review 
              profile={"https://framerusercontent.com/images/6uYgdEC1jGe6urbMtA9d0dgg.png"}
              heading={"My videos blew up"}
              review={"The founders have helped me get millions of views."}
            />
            <Review 
              profile={"https://framerusercontent.com/images/kxNdSiluF7hrK3n2KLRcdCNhTU.png"}
              heading={"Mind blowing software"}
              review={"It's crazy how much the software can do and how much time it can save."}
            />
          </div>
        </div>
      </animated.div>

      {/* Pricing */}
      <animated.div ref={ref3} style={PricingAnimation}>
        <div ref={pricingRef} className="flex flex-col justify-center items-center">
            <p className='bg-[#2B2B2C] text-[#888888] rounded-full mt-10 py-1 px-3'>
              Pricing and Plans 💰
            </p>
            <h1 className="text-5xl mx-5 m:m-0 text-center font-medium py-4">
              Discover what we have to offer
            </h1>
            <div className="flex justify-center items-center m-12">
              <Plan 
                price={"29.99"}
              />
            </div>
        </div>
      </animated.div>
    </>
  )
}
