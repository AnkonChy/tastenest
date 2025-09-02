import React from "react";

const ReserveTable = () => {
  return (
    <div
      className="flex items-center md:mx-24 lg:mx-[300px] mx-auto h-72 rounded-3xl px-10 gap-20"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/MDJStCZV/031217aa25758ff7087e5f341e284ad34c0d2f29.jpg')",
      }}
    >
      <div className="w-1/3 p">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          RESERVE <br /> A TABLE
        </h2>
        <p className="text-sm text-gray-200">Discover our New Menu!</p>
        <div className="w-2/4 h-1 bg-yellow-400 my-2 rounded flex"></div>
      </div>
      <div className="pt-10">
        <form action="" className="space-y-5">
          <div className="flex items-center gap-4">
            <input type="text" placeholder="No of Guest" className="input w-6/12" />
            <input type="text" placeholder="Date" className="input w-3/12" />
            <input type="text" placeholder="Time" className="input w-3/12" />
          </div>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Full Name" className="input w-[48%]" />
            <input type="text" placeholder="Phone No" className="input flex-1" />
          </div>
          <div className="flex justify-end pt-2">
            <div className="border-2 border-[#FFD40D] rounded-xl h-18 w-28 relative">
              <button className="px-8 py-4 bg-[#FFD40D] rounded-xl font-extrabold absolute top-1 right-[7px] text-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReserveTable;
