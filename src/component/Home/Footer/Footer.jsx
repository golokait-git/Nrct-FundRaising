import React from "react";
import { logo } from "../../../assets";

function Footer() {
  return (
    <footer className="bg-gray-100 py-36 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Footer Background"
              className="h-full w-full object-cover "
            />
          </div>

          {/* Content */}
          <div className="text-center z-10">
          <div className="absolute top-0 left-0 right-0 flex justify-center items-center py-4 px-6 z-50">
        <nav className="flex gap-14 items-center">
          <li className="text-white list-none hover:text-gray-300">Home</li>
          <li className="text-white list-none hover:text-gray-300">Activities</li>
          <li className="text-white list-none hover:text-gray-300">Donate</li>
          <li>
            <img src={logo} alt="Your Company Logo" className="h-8 w-8 mr-4" />
          </li>
          <li className="text-white list-none hover:text-gray-300">About Us</li>
          <li className="text-white list-none hover:text-gray-300">Contact Us</li>
        </nav>
      </div>
      <div className="absolute inset-0 flex mt-10  justify-center items-center z-30 text-white">
    <li>Twitter</li>
    <li>Twitter</li>
    <li>Twitter</li>

  </div>
      <div className="absolute inset-0 flex mt-56  justify-center items-center z-30 text-white">
    <h3 className="text-center">Copyrights @ 2024 NRCT. All rights reserved</h3>
  </div>
  
          </div>
   
        </div>
      </div>
    </footer>
  );
}

export default Footer;
