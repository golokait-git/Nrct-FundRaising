import React from 'react'
import { logo } from '../../assets'
function Navbar() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center py-4 px-6 z-50">
        <nav className="flex gap-14 items-center">
          <li className="text-white list-none hover:text-gray-300">Home</li>
          <li className="text-white list-none hover:text-gray-300">Activities</li>
          <li className="text-white list-none hover:text-gray-300">Donate</li>
          <li className="flex justify-center items-center">
            <img src={logo} alt="Your Company Logo" className="h-12 w-12  " />
          </li>
          <li className="text-white list-none hover:text-gray-300">About Us</li>
          <li className="text-white list-none hover:text-gray-300">Contact Us</li>
        </nav>
      </div>
    </>
  )
}

export default Navbar