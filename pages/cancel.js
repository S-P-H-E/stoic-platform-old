import Head from "next/head";
import Discord from "@/public/images/discord.png"
import Image from "next/image";
import { useRouter } from 'next/router';
import { BiArrowBack } from "react-icons/bi"

export default function Cancel() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>S T O I C</title>
                <meta name="description" content="Stoic Education Platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex justify-center items-center h-screen">
                <div className="bg-[#2B2B2C] p-6 m-5 w-[800px] rounded-2xl flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Image src={Discord} className="w-[140px] h-fit"/>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-medium text-center md:text-start">Join Our Supportive Discord Community!</h1>
                        <p className="text-[#888888]">Can&apos;t subscribe? No worries! Join our Discord server for support and connection. Engage with like-minded individuals, discuss topics, and be part of our vibrant community. Join us now!</p>
                        <div className="flex md:justify-end gap-2 my-5 md:m-0">
                            <button className="bg-[#5764F2] text-white py-3 px-10 rounded-xl" onClick={() => {event.preventDefault();window.open('https://discord.gg/pwERKjwDG3', "_blank");}}>Join now</button>
                            <button className="border border-[#484848] text-white py-3 px-10 rounded-xl flex justify-center items-center gap-2" onClick={() => router.push("/")}>
                                <BiArrowBack />
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}