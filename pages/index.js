import React, { useState } from "react";
import { useRef } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import Image from "next/image";
import Feature from "@/components/Feature";
import { useSpring, animated, useTransition } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Review from "@/components/Review";
import Plan from "@/components/Plan";
import FAQs from "@/components/FAQs";

import Hero from '@/public/images/cover.png'

import Profile1 from "@/public/images/profiles/andrew.png"
import Profile2 from "@/public/images/profiles/tristan.png"
import Profile3 from "@/public/images/profiles/andrew2.png"
import Profile4 from "@/public/images/profiles/tristan2.png"
import Link from "next/link";

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

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false)
  };
  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false)
  };
  const scrollToTestimonial = () => {
    testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false)
  };
  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false)
  };
  const scrollToFAQs = () => {
    FAQsRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false)
  };

  const mobileMenuAnimation = useSpring({
    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
  });

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
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? 'translateY(0)' : 'translateY(300px)',
  }); 

  const [ref4, inView4] = useInView({
    triggerOnce: true, // Animation triggers only once when entering the viewport
  });  

  const FAQsAnimation = useSpring({
    opacity: inView4 ? 1 : 0,
    transform: inView4 ? 'translateY(0)' : 'translateY(300px)',
  });  

  const [ref5, inView5] = useInView({
    triggerOnce: true, // Animation triggers only once when entering the viewport
  });  

  const StartAnimation = useSpring({
    opacity: inView5 ? 1 : 0,
    transform: inView5 ? 'translateY(0)' : 'translateY(300px)',
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
            {/* <button className="text-[#949494] hover:underline" onClick={scrollToTestimonial}>Testimonials</button> */}
            <button className="text-[#949494] hover:underline" onClick={scrollToPricing}>Pricing</button>
            <button className="text-[#949494] hover:underline" onClick={scrollToFAQs}>FAQs</button>
          </div>

          <div className="md:flex justify-center items-end gap-3 font-medium w-[250px] hidden">
            {/* <button className="bg-[#2B2B2B] py-2 px-4 rounded-md" onClick={Login}>Log In</button> */}
            <button className="bg-white text-[black] py-2 px-4 rounded-md" onClick={scrollToPricing}>Get Started</button>
          </div>
          { isMobileMenuOpen ?
            <CgClose size={25} className="cursor-pointer flex md:hidden" onClick={() => setTimeout(() => setIsMobileMenuOpen(false), 1000)}/>
            :
            <FiMenu size={25} className="cursor-pointer flex md:hidden" onClick={() => setIsMobileMenuOpen(true)}/>
          }
        </div>
        { isMobileMenuOpen &&
          <animated.div style={mobileMenuAnimation} className="flex flex-col text-3xl md:hidden gap-5 justify-center items-center bg-[#161616] p-3 z-0">
            <button className="text-[#949494]" onClick={scrollToFeatures}>Features</button>
            {/* <button className="text-[#949494]" onClick={scrollToTestimonial}>Testimonials</button> */}
            <button className="text-[#949494]" onClick={scrollToPricing}>Pricing</button>
            <button className="text-[#949494]" onClick={scrollToFAQs}>FAQs</button>
            <button className="bg-white text-[black] py-2 px-4 rounded-md w-full" onClick={scrollToPricing}>Get Started</button>
          </animated.div>
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
        <animated.button style={HeroButtonAnimation} className="bg-white text-[black] py-3 px-10 rounded-xl" onClick={scrollToPricing}>Get Started</animated.button>
        <animated.div style={HeroImageAnimation} className={"my-7 md:m-7"}>
          <Image src={Hero} className="scale-90 md:scale-100 lg:h-[600px] w-fit rounded-xl" alt="cover"/>
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
        <div className="flex flex-col justify-center items-center mx-6 my-6 md:m-12 lg:w-[1000px]">
          <Feature 
            icon={"📱"}
            title={"24/7 Support"}
            description={"You'll access any of the founders for help."}
          />
          <Feature 
            icon={"🦾"}
            title={"AI Tools"}
            description={"Use AI stay ahead of the competition."}
          />
          <Feature 
            icon={"📼"}
            title={"Clips"}
            description={"Access exclusive high quality lifestyle clips."}
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
      {/* <animated.div ref={ref2} style={TestimonialsAnimation}>
        <div ref={testimonialRef} className="flex flex-col justify-center items-center">
          <p className='bg-[#2B2B2C] text-[#888888] rounded-full mt-10 py-1 px-3'>
            Testimonials 📣
          </p>
          <h1 className="text-5xl mx-5 m:m-0 text-center font-medium py-4">
            See what our students say about us
          </h1>
          <div className="my-12 md:m-12 grid gap-3 grid-cols-1 md:grid-cols-2">
            <Review 
              profile={Profile1}
              heading={"Amazing Service"}
              review={"This software is so amazing I love it very much. you have to buy."}
            />
            <Review 
              profile={Profile2}
              heading={"Love the software"}
              review={"It's so easy to use."}
            />
            <Review 
              profile={Profile3}
              heading={"My videos blew up"}
              review={"The founders have helped me get millions of views."}
            />
            <Review 
              profile={Profile4}
              heading={"Mind blowing software"}
              review={"It's crazy how much the software can do and how much time it can save."}
            />
          </div>
        </div>
      </animated.div> */}

      {/* Pricing */}
      <animated.div ref={ref3} style={PricingAnimation}>
        <div ref={pricingRef} className="flex flex-col justify-center items-center">
            <p className='bg-[#2B2B2C] text-[#888888] rounded-full mt-10 py-1 px-3'>
              Pricing💰
            </p>
            <h1 className="text-5xl mx-5 m:m-0 text-center font-medium py-4">
              Discover what we have to offer
            </h1>
            <div className="flex justify-center items-center mx-6 my-6 md:m-12">
              <Plan 
                price={"29.99"}
              />
            </div>
        </div>
      </animated.div>

      {/* FAQs */}
      <animated.div ref={ref4} style={FAQsAnimation}>
        <div ref={FAQsRef} className="flex flex-col justify-center items-center">
              <p className='bg-[#2B2B2C] text-[#888888] rounded-full mt-10 py-1 px-3'>
                FAQs 🙋
              </p>
              <h1 className="text-5xl mx-5 m:m-0 text-center font-medium py-4">
                Here are some commonly asked questions
              </h1>
              <div className="flex justify-center items-center mx-6 my-6 md:m-12">
                <FAQs />
              </div>
          </div>
      </animated.div>

      {/* Start */}
      <animated.div ref={ref5} style={StartAnimation}>
        <div ref={FAQsRef} className="flex flex-col justify-center items-center mb-10">
              <p className='bg-[#2B2B2C] text-[#888888] rounded-full mt-10 py-1 px-3'>
                Let's begin 🚀
              </p>
              <h1 className="text-5xl mx-5 m:m-0 text-center font-medium py-4">
                What are you waiting for?
              </h1>
              <div className="flex justify-center items-center m-5">
              < animated.button style={HeroButtonAnimation} className="bg-white text-[black] py-3 px-10 rounded-xl" onClick={scrollToPricing}>Get Started</animated.button>
              </div>
          </div>
      </animated.div>

      {/* Footer */}
      <div className="border-t border-[#282828] px-16 py-10 h-[250px] flex justify-between">
        <div className="h-full flex flex-col justify-between">
          <h1 className="text-3xl">S T O I C</h1>
          <p className="text-[#888888]">2023 © Stoic, All rights reserved.</p>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h1>Navigation</h1>
            <button className="text-[#949494] hover:underline" onClick={scrollToFeatures}>Features</button>
            {/* <button className="text-[#949494] hover:underline" onClick={scrollToTestimonial}>Testimonials</button> */}
            <button className="text-[#949494] hover:underline" onClick={scrollToPricing}>Pricing</button>
            <button className="text-[#949494] hover:underline" onClick={scrollToFAQs}>FAQs</button>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1>Socials</h1>
            <button className="text-[#949494] hover:underline" onClick={() => {event.preventDefault();window.open('https://www.youtube.com/@ssstoic', "_blank");}}>YouTube</button>
            <button className="text-[#949494] hover:underline" onClick={() => {event.preventDefault();window.open('https://discord.gg/pwERKjwDG3', "_blank");}}>Discord</button>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1>Legal</h1>
            <Link href="/Legal/Terms of Service.pdf">
              <button className="text-[#949494] hover:underline">Terms of Service</button>
            </Link>
            <Link href="/Legal/Privacy Policy.pdf">
              <button className="text-[#949494] hover:underline">Privacy Policy</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

