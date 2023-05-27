import Head from "next/head";
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import { BiArrowBack } from "react-icons/bi"
import Discord from "@/public/images/discord.png"
import Image from "next/image";

export default function Success() {
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

    return (
        <>
            <Head>
                <title>S T O I C</title>
                <meta name="description" content="Stoic Education Platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex justify-center items-center h-screen">
                <div className="bg-[#2B2B2C] p-6 w-[800px] rounded-2xl flex gap-6 justify-center items-center">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-6xl font-medium">Welcome to the family!</h1>
                        <p className="text-[#888888]">Can't subscribe? No worries! Join our Discord server for support and connection. Engage with like-minded individuals, discuss topics, and be part of our vibrant community. Join us now!</p>
                        <div className="flex justify-end gap-2">
                            <button className="bg-[#5764F2] text-white py-3 px-10 rounded-xl" onClick={() => {event.preventDefault();window.open('https://discord.gg/pwERKjwDG3', "_blank");}}>Join now</button>
                            <button className="border border-[#484848] text-white py-3 px-10 rounded-xl flex justify-center items-center gap-2" onClick={() => router.push("/")}>
                                <BiArrowBack />
                                Home
                            </button>
                        </div>
                    </div>
                </div>
                <Confetti width={confettiDimensions.width} height={confettiDimensions.height} />
            </div>
        </>
    )
}