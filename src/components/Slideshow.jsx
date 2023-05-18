import React from "react";

const Slideshow = () => {
  return (
    <div className="w-full">
      <div className="hidden md:block w-full relative">
        <img src="carosel1.jpg" alt="Desktop Slider" />
      </div>
      <div className="hidden md:hidden w-full">
        <img src="carosel2.jpg" alt="Mobile Slider" />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start">
          <div className="bg-white text-blue-500 transition duration-500 transform-gpu translate-y-full">
            BOOK COVER
          </div>
          <div className="text-black transition duration-500 text-5xl transform-gpu translate-y-full">
            Are You Planning To Print Your Gift?
          </div>
          <div className="text-gray-600 transition duration-500 transform-gpu translate-y-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
            tincidunt neque, morbi habitasse viverra. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Dui tincidunt neque, morbi
            habitasse viverra.
          </div>
          <div className="btn transition duration-500 transform-gpu translate-y-full">
            SHOP NOW
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
