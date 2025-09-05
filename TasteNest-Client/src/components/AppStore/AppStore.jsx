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
      className="bg-[#f9fafc] pt-20 pb-30 0 w-full mb-32"
      style={{
        backgroundImage: `url(${appstorebg})`,
        backgroundRepeat: "no-repeat", // makes the image cover the whole div
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto">
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
              <div className="w-[19px] h-[19px] bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
              </div>
              Higher Reach - Minimal Effort
            </li>
            <li className="flex items-center gap-2">
              <div className="w-[19px] h-[19px] bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
              </div>
              Showcase your Brand
            </li>
            <li className="flex items-center gap-2">
              <div className="w-[19px] h-[19px] bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
              </div>
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
            className="object-contain absolute left-26 top-45"
          />
          <img
            src={mobile} // replace with your asset
            className="absolute object-contain top-3 left-80"
          />

          <img
            src={icecream} // replace with your asset
            className="object-contain absolute left-[680px] top-32"
          />

          <img
            src={leaf} // replace with your asset
            className="object-contain absolute -top-8 left-28"
          />

          <img
            src={pizza} // replace with your asset
            alt="Phone App"
            className="object-contain absolute -right-32 -top-16"
          />
        </div>
      </div>
    </div>
  );
};

export default AppStore;
