import React from "react";

const SectionHeader = ({title}) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black">
        {title}
      </h2>
      <div className="w-20 md:w-36 lg:w-68 h-1 bg-yellow-400 mx-auto my-3 rounded mb-10 md:mb-[100px]"></div>
    </div>
  );
};

export default SectionHeader;
