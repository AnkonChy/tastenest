import React from "react";
import { FaInstagram } from "react-icons/fa";
import communitybg from "../../assets/community/bg.jpg";

const Community = () => {
  return (
    <div
      className="max-w-7xl mx-auto h-96 my-30 flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${communitybg})`,
        backgroundRepeat: "no-repeat", // makes the image cover the whole div
        backgroundPosition: "center",
        borderRadius: "30px",
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="w-18 h-18 rounded-full bg-[#F3274C] absolute top-24 flex items-center justify-center">
        <FaInstagram className="text-4xl text-white" />
      </div>
      <div className=" mt-18 z-10">
        <h1 className="text-4xl font-bold">Follow @shawonetc3</h1>
        <p className="text-gray-600 text-center">
          Join our community to inspire your desires
        </p>
      </div>
    </div>
  );
};

export default Community;
