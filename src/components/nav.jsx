// components/Nav.jsx
import React from 'react';
import Logo from '../assets/Logo-Photoroom.png';

function Nav() {
  return (
    <nav className='bg-[#808080] px-[32px] rounded-[43px]'>
      <div className='flex items-center justify-between'>
        <img className='w-[320px]' src={Logo} alt="Logo" />
        <ul className='flex gap-[63px] text-[34px]'>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
        <a className='text-[34px] bg-[#ffff] px-[23px]' href="#">Register/Log In</a>
      </div>
    </nav>
  );
}

export default Nav;