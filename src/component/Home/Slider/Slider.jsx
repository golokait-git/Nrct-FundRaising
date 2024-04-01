import { Carousel } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'; // Import useHistory from React Router
import {      divineNaturePark,goshala,logo,meditation,naturopathy,organicFarm,vandeMataMandir,yogaCenter
} from "../../../../src/assets/index.js";
export function CarouselCustomNavigation() {
  const navigate = useNavigate(); // Initialize useHistory

  // Array of image data with respective content and navigation URLs
  const images = [
    {
      src:goshala,
      alt: "image 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet odio sit amet eleifend malesuada.",
      buttonLabel: "Learn More 1",
      navigateTo: "/page1",
    },
    {
      src: divineNaturePark,
      alt: "image 2",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      buttonLabel: "Learn More 2",
      navigateTo: "/page2",
    },
    {
      src: meditation,
      alt: "image 3",
      content: "Vestibulum at libero eget nibh sagittis elementum id non ex. Aliquam vitae accumsan est.",
      buttonLabel: "Learn More 3",
      navigateTo: "/page3",
    },
    {
      src: naturopathy,
      alt: "image 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet odio sit amet eleifend malesuada.",
      buttonLabel: "Learn More 1",
      navigateTo: "/page1",
    },
    {
      src: organicFarm,
      alt: "image 2",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      buttonLabel: "Learn More 2",
      navigateTo: "/page2",
    },
    {
      src: vandeMataMandir,
      alt: "image 3",
      content: "Vestibulum at libero eget nibh sagittis elementum id non ex. Aliquam vitae accumsan est.",
      buttonLabel: "Learn More 3",
      navigateTo: "/page3",
    },
  ];

  const handleNavigate = (url) => {
    navigate.push(url); // Navigate to the specified URL
  };

  return (
    <div className="relative">
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

      <Carousel
        className="rounded-xl relative overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* Render images dynamically */}
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="h-screen w-full object-cover object-center"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              {/* <p>{image.content}</p> */}
              <button
                className="bg-transparent hover:bg-white hover:text-black hover:border-black text-white font-medium py-2 px-4 rounded-3xl border-2 border-gray-50 mt-60"
                onClick={() => handleNavigate(image.navigateTo)}
              >
                {image.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}