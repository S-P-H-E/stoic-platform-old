import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import One from '@/public/images/cover/01.png';
import Two from '@/public/images/cover/02.png';
import Three from '@/public/images/cover/03.png';
import Four from '@/public/images/cover/04.png';
import Five from '@/public/images/cover/05.png';

export default function Cover() {
  return (
    <>
        <div className='flex flex-col md:w-[950px] gap-4 p-4 md:p-0'>
            <Tilt glareEnable={true} glareMaxOpacity={0.2} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="25px" className='z-10 rounded-[1.5rem] transition-all md:hover:shadow-2xl md:hover:shadow-black'>
                <Image src={Five} className="rounded-2xl" alt="cover" />
            </Tilt>
            <div className='flex gap-4'>
                <div>
                    <Tilt glareEnable={true} glareMaxOpacity={0.2} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="15px">
                        <Image src={One}/>
                    </Tilt>
                </div>
                <div>
                    <Tilt glareEnable={true} glareMaxOpacity={0.2} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="15px">
                        <Image src={Two}/>
                    </Tilt>
                </div>
                <div className='flex flex-col gap-4'>
                    <Tilt glareEnable={true} glareMaxOpacity={0.2} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="15px">
                        <Image src={Three}/>
                    </Tilt>
                    <Tilt glareEnable={true} glareMaxOpacity={0.2} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="15px">
                        <Image src={Four}/>
                    </Tilt>
                </div>
            </div>
        </div>
    </>
  );
}
