import React, { Component } from 'react'
import Logo from './assets/Logo-Photoroom.png';
import TelegramIcon from './assets/telegram-brands.svg';
import User from './assets/user-solid.svg';
import InstaIcon from './assets/instagram-brands.svg';
import FacebookIcon from './assets/square-facebook-brands.svg'
import TwitterIcon from './assets/twitter-brands.svg';
import EmailIcon from './assets/envelope-solid.svg';
import YouTubeIcon from './assets/youtube-brands.svg';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <nav className='bg-[#808080] px-[32px] rounded-[43px]'>
           <div className='flex items-center justify-between'>
             <img className='w-[320px]' src={Logo} alt="" />
             <ul className='flex gap-[63px] text-[34px]'>
               <a href="#">
                 <li>Home</li>
               </a>
               <a href="#">
                 <li>Home</li>
               </a>
               <a href="#">
                 <li>Home</li>
               </a>
             </ul>
             <a className='text-[34px] bg-[#ffff] px-[23px]' href="#">Register/Log In</a>
           </div>
        </nav>

        <header className='my-[40px] w-full h-[1000px]'>
          <div className='flex justify-between items-center'>
              <div></div>
              <div className='w-[735px] h-[]'>
                <h2>About Edu Center</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Mollitia obcaecati unde velit facere earum ullam inventore eos, 
                  quo molestias ipsa aut modi voluptate ea eius doloribus sunt nemo 
                  quasi? Aspernatur, est doloribus neque architecto nulla repudiandae 
                  aperiam sed recusandae laudantium laborum temporibus assumenda in 
                  placeat possimus ut libero, ad dolorum!</p>

                <div className='flex items-center gap-[44px] my-[40px]'>
                    <div className='bg-[#6397D2] px-[26px] py-[8px] text-[#fff] font-bold'>
                      <a href="#">Join for free</a>
                    </div>
                    <div className='flex gap-[16px]'>
                      <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                      <a href="#"><img className='w-[50px]' src={FacebookIcon} alt="" /></a>
                      <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                      <a href="#"><img className='w-[50px]' src={TwitterIcon} alt="" /></a>
                    </div>
                </div>
              </div>
          </div>
        </header>

        <main>
          <section>
             <div className='flex justify-between items-center bg-[#9FB5C9] rounded-[56px] h-[150px] px-[53px]'>
               <div>
                 <h3 className='text-[80px] font-bold text-[#fff]'>We have</h3>
               </div>
               <div className='flex text-[#fff] gap-[25px] text-[34px]'>
                 <div>
                   <h4>5+</h4>
                   <p>Experience</p>
                 </div>
                 <div>
                   <h4>5+</h4>
                   <p>Experience</p>
                 </div>
               </div>
             </div>
          </section>

          <section>
            <div className='flex items-center justify-around'>
              <div className='w-[400px] h-[2px] bg-[#000]'></div>
              <div className='text-[80px] text-[#fff] font-bold'>
                <h2>Our Team</h2>
              </div>
              <div className='w-[400px] h-[2px] bg-[#000]'></div>
            </div>

            <div className='flex justify-around items-center text-center bg-[#fff] max-w-[1787px] w-full h-[600px] rounded-[33px] my-[45px]'>
              <div className=''>
                <img className='px-[31px] max-w-[320px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
                  </div>
              </div>
              <div className=''>
                <img className='px-[31px] max-w-[300px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
                  </div>
              </div>
              <div className=''>
                <img className='px-[31px] max-w-[300px] w-full h-[350px] bg-[#808080] rounded-[55px]' src={User} alt="" />
                <p className='font-bold text-[34px] my-[21px]'>Name, Surname</p>
                <div className='flex justify-center gap-[34px] my-[15px]'>
                  <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={EmailIcon} alt="" /></a>
                  </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-[50px]'>Contact with Us</h3>
              </div>
              <div className='bg-[#000] w-[1000px] h-[2px]'></div>
            </div>
            <div className='bg-[#fff] my-[45px] rounded-[43px] h-[500px]'>
              <div className='text-center text-[50px] '>
                  <h3>Savol yoki Takliflaringizni yozib qoldirishingiz <br /> mumkin!</h3>
              </div>
              <div className='flex justify-around items-center my-[60px]'>
                <div className=''>
                  <input className='bg-[#918A8A] text-[#fff] w-[410px] h-[50px] placeholder-[#fff] px-[21px] text-[25px]' type="text" name="" id="" placeholder='Ismingiz'/><br /><br />
                  <input className='bg-[#918A8A] text-[#fff] w-[410px] h-[50px] placeholder-[#fff] px-[21px] text-[25px]' type="text" name="" id="" placeholder='Telefon raqamingiz'/><br /><br />
                  <button className='bg-[#75E4DB] w-[410px] h-[50px] text-[25px]'><a href="#">Jo’natish</a></button>
                </div>
                <div>
                  <textarea className='bg-[#918A8A] resize-none w-[600px] h-[210px] placeholder-[#fff] px-[36px] py-[20px] text-[25px]' name="" id="" placeholder='Izoh.......'></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#000] w-full h-[2px]'></div>
          <div className='flex justify-between items-center my-[35px]'>
            <div>
              <img className='w-[400px]' src={Logo} alt="" />
              <p className='text-[24px] my-[24px]'><a href="#">+998 (94) - 350 - 17 -31</a></p>
              <p className='text-[24px] max-w-[370px] my-[15px]'><a href="#">Toshkent shahar, Mirzo Ulugʻbek tumani, Muminov koʻchasi, 4A</a></p>
            </div>
            <div>
              <h3 className='text-[34px] font-bold'>Linklar</h3>
              <ul className='my-[33px] text-[24px]'>
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
            <div className='max-w-[370px]'>
              <h3 className='text-[34px] font-bold'>O’quv Markaz haqida</h3>
              <p className='my-[33px] text-[24px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quibusdam</p>
            </div>
          </div>
          <div className='bg-[#000] w-full h-[2px]'></div>
          <div className='flex items-center justify-between my-[40px]'>
            <div className='text-[25px]'>
              <p>©2025. Barcha huquqlar himoyalangan.</p>
            </div>
            <div className='flex gap-[24px]'>
              <a href=""><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
              <a href=""><img className='w-[50px]' src={InstaIcon} alt="" /></a>
              <a href=""><img className='w-[50px]' src={FacebookIcon} alt="" /></a>
              <a href=""><img className='w-[50px]' src={EmailIcon} alt="" /></a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
