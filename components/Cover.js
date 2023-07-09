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
        <div className='flex flex-col md:w-[950px]'>
            <Tilt>
                <Image src={Five} className="" alt="cover" />
            </Tilt>
            <div className='flex'>
                <Tilt>
                    <Image src={One}/>
                </Tilt>
                <Tilt>
                    <Image src={Two}/>
                </Tilt>
                <div>
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
