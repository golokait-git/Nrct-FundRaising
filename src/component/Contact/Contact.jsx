import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log(formData);
      };
    

  return (
    <div>
   <div className="flex justify-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full md:h-4/5 w-4/5 md:w-4/5 m-4">
          <div className="flex">
            <div className="w-6/12 bg-white p-8">
            <h1 className="text-2xl font-semibold mb-6">Send Us a Message</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#007935] focus:border-[#007935] sm:text-sm "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-semibold ">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#007935] focus:border-[#007935] sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emailAddress" className="block text-sm font-semibold ">
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#007935] focus:border-[#007935] sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#007935] focus:border-[#007935] sm:text-sm"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-1/5 bg-[#007935] hover:bg-[#007935] text-white font-semibold py-2 mt-10   px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#007935] focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
              {/* Content on the left side */}
            </div>
            <div className="w-6/12">
              {/* Image on the right side */}
              <img
                className="w-full h-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='ml-40 mb-5'>
      <iframe
        title="Google Maps"
        width="89%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=golokait%20mumbai+(Goloka)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps trackers</a>
      </iframe>
    </div>    </div>
  )
}

export default Contact