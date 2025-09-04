import React from "react";

const Bbq = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-end gap-6 max-w-7xl mx-auto my-20">
      {/* Image */}
      <div className="">
        <img
          src="https://i.ibb.co.com/s9204LjN/1243034a7d7c0324778dcfac9a4b6221aadd34fe.png"
          alt="Album"
          className="lg:absolute left-6 bottom-4 w-[480px] lg:w-[620px] lg:h-[538px] mx-auto"
        />
      </div>

      {/* Content */}
      <div className="bg-[#F5F8FD] h-auto lg:h-[588px] w-full lg:w-[962px] rounded-[30px] lg:pl-80 lg:pt-20 p-6 md:p-10">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">BBQ</h2>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h2 className="font-bold text-lg md:text-xl lg:text-[22px]">
                    Shake BBQ sauce
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    radish, black sesame seeds, coriander
                  </p>
                </div>
                <div>
                  <p className="text-[#F3274C] font-bold text-lg md:text-xl lg:text-[22px]">
                    $ 9.00
                  </p>
                </div>
              </div>
              <div className="border-b border-dashed border-gray-400 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bbq;
