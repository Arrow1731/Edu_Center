import React from 'react';

const MainSec = () => {
  return (
    <main>
      <div>
          <section>
            <div className='container mx-auto text-[#000]  bg-[#9FB5C9] rounded-[66px] w-[1950px]'>
              <div>
                <h2 className='text-[80px] font-bold'>We have </h2>
              </div>
              <div className='flex items-center gap-[20px]'>
                <div>
                  <p className='text-[70px] font-bold'>5+</p>
                  <p className='text-[55px] font-bold'>Experience</p>
                </div>
                <div>
                  <p className='text-[70px] font-bold'>2000+</p>
                  <p className='text-[55px] font-bold'>Students</p>
                </div>
              </div>
            </div>

            <div className='container mx-auto'>
                <div className='flex justify-between items-center gap-[12px]'>
                  <div className='w-[500px] h-[3px] bg-[#fff]'></div>
                  <div>
                    <p className='text-[80px] font-bold'>Our Team</p>
                  </div>
                  <div className='w-[500px] h-[3px] bg-[#fff]'></div>
                </div>
            </div>
          </section>
      </div>
    </main>
  );
};

export default MainSec;