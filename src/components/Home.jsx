import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Martin Quezada</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a software enginner with a strong passion for technology and security.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> I dream of becoming a leader in technology, and have strong interest in many fields such as cloud, software development, and security.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3 '/>
          </span>
          </button>
        </div>
       </div>
    </div>
  )
}

export default Home