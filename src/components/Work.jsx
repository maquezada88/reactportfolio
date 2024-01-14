import React from 'react'
import JPMImg from '../assets/JPM.png'
import JMUImg from '../assets/jmu.png'
import AbacoIMG from '../assets/abaco.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>work</p>
                <p className='py-6'>
                    check out some of my recent work.
                </p>
            </div>

            {/*container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

              {/*grid item*/}
              <div style={{backgroundImage: `url(${AbacoIMG})`}} 
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/*hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    IT Experience
                  </span>

                  <div className='pt-8 text-center'>
                    <a href='https://abacostrategy.com/' target='blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Abaco Homepage
                     </button>
                    </a>
                  </div>
                </div>
              </div>

              {/*grid item*/}
              <div style={{backgroundImage: `url(${JPMImg})`}} 
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/*hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    JPM Virtual Experience
                  </span>

                  <div className='pt-8 text-center'>
                    <a href='https://github.com/maquezada88/jpmc-task-3' target='blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                      </button>
                    </a>
                  </div> 
                </div>
              </div>

              {/*grid item*/}
              <div style={{backgroundImage: `url(${JMUImg})`}} 
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               {/*hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    JMU Graduate
                  </span>

                  <div className='pt-8 text-center'>
                    <a href='https://www.jmu.edu/cise/cs/index.shtml' target='blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        JMU Homepage
                      </button>
                    </a>
                  </div> 
                </div>
              </div>
              
              
            </div>
        </div>
    </div>
  )
}

export default Work