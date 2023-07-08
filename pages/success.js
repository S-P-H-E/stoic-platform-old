import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import Confetti from 'react-confetti';
import { BiArrowBack } from "react-icons/bi"
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';
import { db } from '@/firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

export default function Success() {
  const [refValue, setRefValue] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      const ref = params.ref;
      if (ref) {
        setRefValue(ref);
      }
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      // Update the dimensions when the window is resized
      setConfettiDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set the initial dimensions when the component mounts
    setConfettiDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [confettiDimensions, setConfettiDimensions] = React.useState({
    width: 0,
    height: 0
  });

  const startConfettiAnimation = () => {
    // Code to start the confetti animation
  };

  const PopUpAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
  });

  const updateSalesVariable = async (refValue) => {
    try {
      const q = query(collection(db, 'users'), where('link', '==', `https://stoiccord.com/?ref=${refValue}`));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const documentSnapshot = querySnapshot.docs[0];
  
        if (documentSnapshot.exists()) {
          const documentRef = documentSnapshot.ref;
          console.log(documentSnapshot)
  
          // Get the current value of the 'sales' variable
          let currentSales = documentSnapshot.data().sales || 0;
  
          // Add 1 to the 'sales' variable
          currentSales += 1;
  
          // Update the 'sales' variable with the new value
          await documentRef.update({
            sales: currentSales
        });
  
          console.log('Sales variable updated successfully.');
        } else {
          // Document does not exist, create it with 'sales' initialized to 1
          await addDoc(collection(db, 'users'), { link: `https://stoiccord.com/?ref=${refValue}`, sales: 1 });
  
          console.log('Sales variable created successfully.');
        }
      } else {
        console.log('No documents found.');
      }
    } catch (error) {
      console.error('Error updating sales variable:', error);
    }
  };

  useEffect(() => {
    // Call the function to update the sales variable
    if (refValue) {
      updateSalesVariable(refValue);
    }
  }, [refValue]);

  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="Stoic Education Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center h-screen">
        <animated.div style={PopUpAnimation} className="bg-[#2B2B2C] p-6 m-5 w-[800px] rounded-2xl flex gap-6 justify-center items-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-6xl font-medium">Welcome to the family!</h1>
            <p className="text-[#888888]">Congratulations on making the right decision! You are now part of our exclusive community. We are thrilled to have you on board and look forward to supporting you on your journey. Get ready for exciting opportunities, valuable resources, and a supportive network of like-minded individuals. To access the exclusive premium section, please join our Discord server using the link below. Don&apos;t forget to contact us in the support <mark className="text-white bg-[#414675] p-1 rounded-md cursor-pointer" onClick={() => { event.preventDefault(); window.open('https://discord.com/channels/1084466059903500369/1111904441914896415', "_blank"); }}> #❔│ support</mark> section of our Discord server with your proof of payment, and we&apos;ll grant you access to the premium content. We can&apos;t wait to see you inside. Welcome to our family!</p>
            <div className="flex justify-center gap-2 my-3">
              <button className="bg-[#5764F2] text-white py-3 px-10 rounded-xl" onClick={() => { event.preventDefault(); window.open('https://discord.gg/pwERKjwDG3', "_blank"); }}>Join now</button>
              <button className="border border-[#484848] text-white py-3 px-10 rounded-xl flex justify-center items-center gap-2" onClick={() => router.push("/")}>
                <BiArrowBack />
                Home
              </button>
            </div>
          </div>
        </animated.div>
        <Confetti width={confettiDimensions.width} height={confettiDimensions.height} />
      </div>
    </>
  )
}