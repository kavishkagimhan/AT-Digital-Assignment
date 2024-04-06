import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";



const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className='w-screen md:h-[77px] bg-primary text-white relative'>
      <div className='flex justify-between items-center max-w-[90%] mx-auto py-[26px] px-[20px] '>
        <img className='h-[25px]' src={Logo} alt="AT Logo" />
        <ul className='md:flex gap-[28px] uppercase items-center font-inter text-[14px] hidden font-medium font-primary'>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Contact us</li>
          <li className='cursor-pointer'>Careers</li>
        </ul>
        <div className='cursor-pointer md:hidden' onClick={handleOpen}>
          <HiOutlineMenu width={40} height={31} />
        </div>
        <ul className={` font-primary font-medium items-start p-6 uppercase gap-8 fixed  left-0 bg-white text-black w-screen flex flex-col duration-300 z-10  ease-in-out md:hidden ${open ? 'top-0' : 'top-[-450px]'}`}>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Services  </li>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Contact us</li>
          <li className='cursor-pointer'>Careers</li>
          <div className='absolute cursor-pointer md:hidden right-5 top-6' onClick={handleOpen}>
            <GrClose width={40} height={31} />
          </div>
        </ul>

      </div>
    </div>
  )
}

export default Navbar