import React from 'react';
import Logo from '../assets/Logo-Photoroom.png';

const Nav = () => {
  return (
    <div className='container mx-auto'>
      <div className='bg-[#808080] w-[1950px] h-[132px] flex justify-between items-center rounded-[43px] p-[25px]'>
        <img className='max-w-[319px]' src={Logo} alt="" />
        <nav>
         <ul className='flex gap-[33px] text-[34px] font-bold'>
           <li><a href="#home" className='text-[#000]'>Home</a></li>
           <li><a href="#about" className='text-[#000]'>About</a></li>
           {/* <li><a href="#services">Services</a></li> */}
           <li><a href="#contact" className='text-[#000]'>Contact</a></li>
         </ul>
       </nav>
       <a className='text-[34px] text-[#000] bg-[#fff] font-bold px-[23px] w-[420px] h-[70px]' href="#">Register/Log In</a>
    </div>
    </div>
  );
};

export default Nav;