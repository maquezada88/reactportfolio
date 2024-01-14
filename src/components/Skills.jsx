import React from 'react'

import HTML from '../assets/html.png'
import Java from '../assets/java.png'
import ReactIMG from '../assets/react.png'
import Python from '../assets/python.png'
import GitHub from '../assets/github.png'
import C from '../assets/C_Logo.png'
import Javascript from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            SKILLS
          </p>
          <p className='py-4'>
            These are the technologies I work with.
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt='HTML icon'/>
            <p className='my-4'>JAVA</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt='HTML icon'/>
            <p className='my-4'>JAVASCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt='HTML icon'/>
            <p className='my-4'>GITHUB</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={C} alt='HTML icon'/>
            <p className='my-4'>c</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt='HTML icon'/>
            <p className='my-4'>PYTHON</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactIMG} alt='HTML icon'/>
            <p className='my-4'>REACT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='HTML icon'/>
            <p className='my-4'>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills