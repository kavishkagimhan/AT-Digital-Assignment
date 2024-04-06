import React from 'react';
import Tv from '../assets/tv.png';

const Section1 = () => {
  return (
    <div className='max-w-[1064px] h-auto mx-auto p-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-[20px]'>
            <img width={414} src={Tv} alt="tv image" />
            <div className='flex flex-col gap-[20px] p-12 text-center sm:text-left justify-center md:justify-start w-full'>
                <h3 className='text-primary text-[27px] font-secondary font-semibold'>Web & Mobile App Development</h3>
                <p className='text-[16px] leading-[19.36px] font-primary font-normal'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <button className='text-white uppercase bg-secondary py-[12px] px-[20px] rounded-[4px] w-[129px] text-[14px] mx-auto md:mx-0'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Section1