// eslint-disable-next-line no-unused-vars
import React from "react";

const AboutComponent = () => {
  return (
    <>
      <div className="text-center mb-3">
        <h1 className="mb-1 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-green-500 font-serif font-medium text-xl sm:text-2xl lg:text-4xl tracking-widest">
          NATURAL REHABILITATION &
        </h1>
        <h1 className="font-medium [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-green-500 font-serif text-xl sm:text-2xl lg:text-4xl tracking-widest">
          RESEARCH CENTER
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-16">
        {/* Box 1 */}
        <div className="bg-white rounded-2xl overflow-hidden h-70 w-70 shadow-[rgba(0,0,0,0.24)_10px_10px_4px_0px]">
          {" "}
          {/* Increased height */}
          <div className="h-40 w-40">
            {" "}
            {/* Set height and width to maintain aspect ratio */}
            <img
              className="rounded-full mx-10 mt-4 h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/follower-user-shape-social-media-notification-icon-speech-bubbles-3d-cartoon-banner-website-ui-pink-background-3d-rendering-illustration_56104-1330.jpg?size=626&ext=jpg&ga=GA1.1.607422080.1711536515&semt=sph"
              alt="Avatar"
            />
          </div>
          <div className="text-center px-6 py-4">
            <div className="font-bold text-xl mb-2">Box 1</div>
            <p className="text-gray-700 text-base">Some text below the image</p>
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-white rounded-2xl overflow-hidden h-70 w-70 shadow-[rgba(0,0,0,0.24)_10px_10px_4px_0px]">
          {" "}
          {/* Increased height */}
          <div className="h-40 w-40">
            {" "}
            {/* Set height and width to maintain aspect ratio */}
            <img
              className="rounded-full mx-10 mt-4 h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/follower-user-shape-social-media-notification-icon-speech-bubbles-3d-cartoon-banner-website-ui-pink-background-3d-rendering-illustration_56104-1330.jpg?size=626&ext=jpg&ga=GA1.1.607422080.1711536515&semt=sph"
              alt="Avatar"
            />
          </div>
          <div className="text-center px-6 py-4">
            <div className="font-bold text-xl mb-2">Box 2</div>
            <p className="text-gray-700 text-base">Some text below the image</p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="bg-white rounded-2xl overflow-hidden h-70 w-60 shadow-[rgba(0,0,0,0.24)_10px_10px_4px_0px]">
          {" "}
          {/* Increased height */}
          <div className="h-40 w-40">
            {" "}
            {/* Set height and width to maintain aspect ratio */}
            <img
              className="rounded-full mx-10 mt-4 h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/follower-user-shape-social-media-notification-icon-speech-bubbles-3d-cartoon-banner-website-ui-pink-background-3d-rendering-illustration_56104-1330.jpg?size=626&ext=jpg&ga=GA1.1.607422080.1711536515&semt=sph"
              alt="Avatar"
            />
          </div>
          <div className="text-center px-6 py-4">
            <div className="font-bold text-xl mb-2">Box 3</div>
            <p className="text-gray-700 text-base">Some text below the image</p>
          </div>
        </div>
        {/* Box 4 */}
        <div className="bg-white rounded-2xl overflow-hidden h-70 w-60 shadow-[rgba(0,0,0,0.24)_10px_10px_4px_0px]">
          {" "}
          {/* Increased height */}
          <div className="h-40 w-40">
            {" "}
            {/* Set height and width to maintain aspect ratio */}
            <img
              className="rounded-full mx-10 mt-4 h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/follower-user-shape-social-media-notification-icon-speech-bubbles-3d-cartoon-banner-website-ui-pink-background-3d-rendering-illustration_56104-1330.jpg?size=626&ext=jpg&ga=GA1.1.607422080.1711536515&semt=sph"
              alt="Avatar"
            />
          </div>
          <div className="text-center px-6 py-4">
            <div className="font-bold text-xl mb-2">Box 4</div>
            <p className="text-gray-700 text-base">Some text below the image</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="hover:bg-green-800 hover:text-white text-green-700 font-bold py-3 px-4 rounded-2xl border border-green-700">
          Know More
        </button>
      </div>
    </>
  );
};

export default AboutComponent;
