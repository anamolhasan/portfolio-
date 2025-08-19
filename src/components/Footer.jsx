import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, transitions } from '../utils/animations'

const Footer = () => {
  return (
 <motion.footer 
    variants={fadeInUp}
    initial="initial"
    animate="animate"
    transition={{...transitions.default, delay:0.4}}
    className='py-8 px-6 md:px-6 border-t border-gray-800/50 bg-black'>
       <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 '>
            <p className='hover:text-white '> &copy; {new Date().getFullYear()} All rights reserved.</p>

            <div className='flex gap-4 mt-4 md:mt-0'>
                <a href="#" className='hover:text-white transition-colors'>LinkedIn</a>
                <span>/</span>
                <a href="#" className='hover:text-white transition-colors'>Github</a>
                <span>/</span>
                <a href="#" className='hover:text-white transition-colors'>Facebook</a>
                <span>/</span>

            </div>
        </div>
        
    </motion.footer>
  )
}

export default Footer