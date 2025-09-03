import React from "react";

const Banner = () => {
  return (
    <div
      className="pt-10 md:pt-0 text-white relative  w-full min-h-[710px] bg-cover bg-center flex flex-col md:flex-row items-center text-center md:text-start justify-between px-2 md:px-24 lg:px-[300px] mx-auto"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/zTZGRfrQ/pexels-anhelina-vasylyk-734724285-33593004.jpg')",
      }}
    >
      {/* Overlay (left to right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
      {/* Left Content */}
      <div className="w-full md:w-2/3 flex flex-col gap-6 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          The Perfect Space to <br /> Enjoy Fantastic Food
        </h1>
        <p className="text-gray-300 w-11/12  text-base mg:text-lg lg:text-xl">
          Festive dining at Farthings where we are strong believers in using the
          very best produce
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <div className="border-2 border-[#F3274C] rounded-lg h-15 w-40 relative">
            <button className="px-6 py-3 bg-[#F3274C] text-white rounded-lg shadow-md hover:bg-pink-700 transition absolute top-1 left-[-13px]">
              See Our Menus
            </button>
          </div>
          <button className="w-12 h-12 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition">
            ▶
          </button>
          <span>Video</span>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-2 md:mt-6 justify-center md:justify-start">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-5/6 relative">
        {/* <img
          src="https://i.ibb.co/3CcY7xR/chicken.jpg"
          alt="Food Plate"
          className="rounded-lg shadow-lg"
        /> */}

        {/* Overlay Card */}
        <div className="absolute w-60 md:w-80 top-[-200px] right-18 md:top-10 md:right-0 bg-black/70 p-4 rounded-xl border border-yellow-500 flex items-center justify-center gap-8">
          <div>
            <span className="bg-pink-800 text-white text-sm font-semibold absolute bottom-25 md:bottom-33 md:left-44 py-2 px-3 rounded">
              Weekly Special
            </span>
            <h4 className="text-lg font-bold">
              <span className="text-red-600">$</span>90.85 <br /> Sicilian Pizza
            </h4>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                aria-label="5 star"
              />
            </div>
          </div>
          <img
            src="https://i.ibb.co.com/1fz5pHGQ/REC-283110-Pizza.webp"
            alt="Pizza"
            className="w-20 md:w-28 rounded-full object-cover border-4 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
