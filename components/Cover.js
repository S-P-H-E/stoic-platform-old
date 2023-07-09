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
            <Tilt>
                <Image src={Five} className="rounded-2xl" alt="cover" />
            </Tilt>
            <div className='flex gap-4'>
                <Tilt>
                    <Image src={One}/>
                </Tilt>
                <Tilt>
                    <Image src={Two}/>
                </Tilt>
                <div className='flex flex-col gap-4'>
                    <Tilt>
                        <Image src={Three}/>
                    </Tilt>
                    <Tilt>
                        <Image src={Four}/>
                    </Tilt>
                </div>
            </div>
        </div>
    </>
  );
}
