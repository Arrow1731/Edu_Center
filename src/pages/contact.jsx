// components/Footer.jsx
import React from 'react';
import Logo from '../assets/Logo-Photoroom.png';
import TelegramIcon from '../assets/telegram-brands.svg';
import InstaIcon from '../assets/instagram-brands.svg';
import FacebookIcon from '../assets/square-facebook-brands.svg';
import EmailIcon from '../assets/envelope-solid.svg';

function Footer() {
  return (
    <footer>
      {/* Contact title + line */}
      <div className='flex items-center justify-between'>
        <h3 className='text-[50px]'>Contact with Us</h3>
        <div className='bg-[#000] w-[1000px] h-[2px]'></div>
      </div>

      {/* Contact form */}
      <div className='bg-[#fff] my-[45px] rounded-[43px] h-[500px]'>
        <div className='text-center text-[50px]'>
          <h3>Savol yoki Takliflaringizni yozib qoldirishingiz mumkin!</h3>
        </div>
        <div className='flex justify-around items-center my-[60px]'>
          <div>
            <input className='bg-[#918A8A] text-[#fff] w-[410px] h-[50px] placeholder-[#fff] px-[21px] text-[25px]' placeholder='Ismingiz' /><br /><br />
            <input className='bg-[#918A8A] text-[#fff] w-[410px] h-[50px] placeholder-[#fff] px-[21px] text-[25px]' placeholder='Telefon raqamingiz' /><br /><br />
            <button className='bg-[#75E4DB] w-[410px] h-[50px] text-[25px]'><a href="#">Jo’natish</a></button>
          </div>
          <textarea className='bg-[#918A8A] resize-none w-[600px] h-[210px] placeholder-[#fff] px-[36px] py-[20px] text-[25px]' placeholder='Izoh.......'></textarea>
        </div>
      </div>

      {/* Footer bottom */}
      <div className='bg-[#000] w-full h-[2px]'></div>
      <div className='flex justify-between items-center my-[35px]'>
        <div>
          <img className='w-[400px]' src={Logo} alt="Logo" />
          <p className='text-[24px] my-[24px]'><a href="#">+998 (94) - 350 - 17 -31</a></p>
          <p className='text-[24px] max-w-[370px] my-[15px]'>
            <a href="#">Toshkent shahar, Mirzo Ulugʻbek tumani, Muminov koʻchasi, 4A</a>
          </p>
        </div>
        <div>
          <h3 className='text-[34px] font-bold'>Linklar</h3>
          <ul className='my-[33px] text-[24px]'>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
        <div className='max-w-[370px]'>
          <h3 className='text-[34px] font-bold'>O’quv Markaz haqida</h3>
          <p className='my-[33px] text-[24px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quibusdam</p>
        </div>
      </div>

      <div className='bg-[#000] w-full h-[2px]'></div>
      <div className='flex items-center justify-between my-[40px]'>
        <p className='text-[25px]'>©2025. Barcha huquqlar himoyalangan.</p>
        <div className='flex gap-[24px]'>
          <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
          <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
          <a href="#"><img className='w-[50px]' src={FacebookIcon} alt="" /></a>
          <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;