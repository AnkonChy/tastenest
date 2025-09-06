import React from "react";
import news1 from "../../assets/news/news1.jpg";
import news2 from "../../assets/news/news2.jpg";

const News = () => {
  return (
    <div className="max-w-7xl mx-auto text-center  mt-32">
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black">
        Featured Dishes
      </h2>
      <div className="w-20 md:w-36 lg:w-68 h-1 bg-yellow-400 mx-auto my-2 rounded mb-10 md:mb-[100px]"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-start gap-10">
          <div>
            <img src={news1} alt="" className="w-[260px] rounded-3xl" />
          </div>
          <div className="">
            <span className="bg-yellow-300 font-bold px-3 py-1 rounded-md">
              April 6, 2023
            </span>
            <h1 className="text-3xl font-semibold my-5">
              Creamy Chicken Alfredo
            </h1>
            <div className="flex items-center gap-3">
              <img
                src={news1} // replace with your profile image
                alt="Willimes James"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">Willimes James</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-start gap-10">
          <div>
            <img src={news2} alt="" className="w-[260px] rounded-3xl" />
          </div>
          <div className="">
            <span className="bg-yellow-300 font-bold px-3 py-1 rounded-md">
              April 6, 2023
            </span>
            <h1 className="text-3xl font-semibold my-5">Air Fryer Salmon</h1>
            <div className="flex items-center gap-3">
              <img
                src={news1} // replace with your profile image
                alt="Willimes James"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">Willimes James</h4>
              </div>
            </div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default News;
