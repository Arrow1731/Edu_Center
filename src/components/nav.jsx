import React from 'react';
import Logo from '../assets/Logo-Photoroom.png';

const Nav = () => {
  return (
    <div className='mx-[250px]'>
      <div className='bg-[#808080] w-[1350px] h-[130px] flex justify-between items-center rounded-[50px] px-[30px]'>
        <img className='w-[300px]' src={Logo} alt="" />
        <nav className='flex items-center'>
         <ul className='flex text-[34px] font-bold mx-[160px] space-x-12'>
           <li><a href="#home" className='text-[#000]'>Home</a></li>
           <li><a href="#about" className='text-[#000]'>About</a></li>
           {/* <li><a href="#services">Services</a></li> */}
           <li><a href="#contact" className='text-[#000]'>Contact</a></li>
         </ul>
          <a className='text-[30px] text-[#000] bg-[#fff] font-bold px-[23px] w-[270px] h-[50px] text-center' href="#">Register/Log In</a>
       </nav>
     </div>
    </div>
  );
};

export default Nav;