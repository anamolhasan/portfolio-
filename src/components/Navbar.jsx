import React from 'react'
import { IoMailOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center p-6 relative'>
        <div className='flex items-center gap-2'>
            <span className='p-1 bg-gray-50/58 rounded-full'><IoMailOutline className='text-black'/></span>
            <span>anamolhsan.job@gmail.com</span>            
        </div>

        {/* mobile menu button */}
        <div>
            <div className={`w-6 h-0.5 bg-gray-300 transition`}></div>
        </div>

        {/* desktop navigation */}
        <nav className='hidden md:block'>
            <ul className='flex space-x-6'>
                <li>
                    <a href="#" className='text-gray-300 hover:text-white'>LinkedIn<span className='ml-3 text-gray-300'>/</span></a>
                </li>
                <li>
                    <a href="#" className='text-gray-300 hover:text-white'>Github<span className='ml-3 text-gray-300'>/</span></a>
                </li>
                <li>
                    <a href="#" className='text-gray-300 hover:text-white'>Facebook</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar