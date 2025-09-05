import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import appstorebg from "../../assets/appstore/appstorebg.jpg";
import mobile from "../../assets/appstore/mobile.png";
import bike from "../../assets/appstore/bike.png";
import icecream from "../../assets/appstore/icecream.png";
import leaf from "../../assets/appstore/leaf.png";
import pizza from "../../assets/appstore/pizza.png";

const AppStore = () => {
  return (
    <div
      className="bg-[#f9fafc] pt-44 pb-20 w-full"
      style={{
        backgroundImage: `url(${appstorebg})`,
        backgroundRepeat: "no-repeat", // makes the image cover the whole div
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left Section */}
        <div className=" text-center md:text-left">
          <p className="text-red-500 font-semibold uppercase text-lg mb-2">
            Best App For Foods Ordering
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-4">
            Manage Your Restaurant <br /> Anytime! Anywhere!
          </h1>

          {/* Features */}
          <ul className="mb-6 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-[19px] h-[19px] bg-yellow-400 rounded-full"></span>
              Higher Reach - Minimal Effort
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[19px] h-[19px] bg-yellow-400 rounded-full"></span>
              Showcase your Brand
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[19px] h-[19px] bg-yellow-400 rounded-full"></span>
              Exclusive offers & discounts
            </li>
          </ul>

          {/* Buttons */}
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-lg font-medium shadow-md hover:bg-red-600 transition">
              <FaGooglePlay className="text-lg" />
              Google Play
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg font-medium shadow-md hover:bg-gray-900 transition">
              <FaApple className="text-lg" />
              App Store
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative mt-10 md:mt-0 flex-1 flex">
          {/* Phone Mockup */}
          <img
            src={bike} // replace with your asset
            className="object-contain absolute left-40 -top-10"
          />
          <img
            src={mobile} // replace with your asset
            className="absolute object-contain -top-60 left-[375px]"
          />

          <img
            src={icecream} // replace with your asset
            className="object-contain absolute left-[725px] -top-24"
          />

          <img
            src={leaf} // replace with your asset
            className="object-contain absolute -top-72 left-36"
          />
          
          <img
            src={pizza} // replace with your asset
            alt="Phone App"
            className="object-contain absolute -right-32 -top-75"
          /> 
        </div>
      </div>
    </div>
  );
};

export default AppStore;
