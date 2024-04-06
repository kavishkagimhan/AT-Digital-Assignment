import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <div className='w-screen h-auto text-white bg-primary'>
            <div className='max-w-[1440px] h-auto mx-auto pb-[20px]'>
                <div className='flex sm:justify-between px-[80px] pt-[40px] items-start pb-[20px] flex-col md:flex-row'>
                    <div className='flex flex-col justify-between w-full mx-auto lg:flex-row'>
                        <div className='md:w-[413px]'>
                            <img className='md:w-[239px]' src={Logo} alt="" />
                            <p className='leading-[19.2px] mt-[20px]'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                        </div>
                        <div className='flex flex-col justify-between gap-8 mt-0 md:flex-row sm:mt-6 lg:mt-0'>
                            <div className='flex gap-[12px] flex-col mt-6 md:mt-0'>
                                <h5 className='text-[21px] font-primary font-semibold'>Our Technologies</h5>
                                <ul className='text-[14px] leading-[16.94px] flex gap-[12px] flex-col font-primary font-medium'>
                                    <li>ReactJS</li>
                                    <li>Gatsby</li>
                                    <li>NextJS</li>
                                    <li>NodeJS</li>
                                </ul>
                            </div>
                            <div className='flex gap-[12px] flex-col mt-6 md:mt-0'>
                                <h5 className='text-[21px] font-primary font-semibold'>Our Services</h5>
                                <ul className='text-[14px] leading-[16.94px] flex gap-[12px] flex-col font-primary font-medium'>
                                    <li>Social media Marketing</li>
                                    <li>Web & Mobile App Development</li>
                                    <li>Data & Analytics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-auto md:w-[630px] mx-auto  border-t-[1px] mt-6 text-[14px]'>
                    <div className='flex mx-auto text-center gap-[8px] justify-center p-2'>
                        <p>Privacy Policy</p>
                        <p>|</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer