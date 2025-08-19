import React from 'react'
import profileImg from '../assets/profile.avif'

const Hero = () => {

  return (
    <div className='flex flex-col items-center justify-center min-h-[70] text-center'>
        {/* image and name animation */}
        <div className='relative mb-8'>
            <div className='relative'>
                {/* gradient effect */}
                <div className='absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-xl'>

                </div>

                {/* static portfolio image */}
                <div className='relative'>
                    <img src={profileImg} alt="profile image" className='w-32 h-32 rounded-full relative z-10' />
                </div>

                {/* animation name tag */}
                <div className='absolute -rotate-3 -top-0 -right-28 z-30 bg-white text-black px-4 py-2 rounded-full shadow-lg'>
                    <p className='text-sm font-medium'>Anaomol Hasan 👋🏼</p>
                </div>
            </div>
        </div>

        {/* heading or title */}
        <h1 className='md:text-5xl text-3xl px-2 md:px-0 font-medium mb-4 max-w-xl'>
           <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>Building digital</span> 
           <span className='bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text'>products, brands, and</span>
           <span className='bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-transparent bg-clip-text'>experience.</span>
        </h1>

        {/* btn */}
        <button className='mt-8 py-4 px-12 border [#1A1A1A] border-gray-600 text-gray-600 hover:border-gray-400 hover:text-white transition-colors rounded-full cursor-pointer'>Latest Shots</button>
    </div>
  )
}

export default Hero