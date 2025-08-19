import React from 'react'
import { LuHandshake } from 'react-icons/lu'

const Contact = () => {
  return (
    <section className='py-32 px-4 md:px-6 bg-[#0F0F0F]/80'>
        <div className='max-w-6xl mx-auto text-center'>
            <div className='mb-12'>
                <div className='size-24 mx-auto mb-8 bg-gray-900 rounded-full flex items-center justify-center'>
                    <LuHandshake className='text-5xl text-gray-400' />
                </div>
                <h2 className='md:text-4xl lg:text-5xl text-3xl mb-12'>
                    <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>Tell me about your next</span>
                    <br  className='md:block hidden'/>
                    <span className='bg-gradient-to-r from-white via-gray-400 to-gray-500 text-transparent bg-clip-text'>project</span>
                </h2>
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                    <a  href="mailto:anamolhasan.job@gmail.com" className='inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors'>Email Me</a>
                    <a  href="https://wa.me/01950029882" target='_blank' className='inline-flex items-center px-8 py-3 border border-gray-700 text-white rounded-full font-medium hover:border-gray-500 transition-colors'>WhatsApp</a>
            </div>
        </div>
    </section>
  )
}

export default Contact