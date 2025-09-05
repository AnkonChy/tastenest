import React from "react";
const menuItems = [
  {
    id: 1,
    title: "Steaks & BBQ",
    desc: "canonical classics to obscure tiki drinks",
    price: "$120 person",
    img: "https://i.ibb.co.com/tT45KY2F/ceef2d4f0976fa0cd69b9fa3e535fa13aa169e87-5.png", // replace with your image
  },
  {
    id: 2,
    title: "Cocktails",
    desc: "canonical classics to obscure tiki drinks",
    price: "$120 person",
    img: "https://i.ibb.co.com/cX7Nf3Bn/b10735fc03eda37287b29dac5ef9a4f8e9ab6675.png", // replace with your image
  },
];
const DiscoverMenu = () => {
  return (
    <div className="text-center mt-[106px]  max-w-7xl mx-auto"> 
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black">
        Discover Menu
      </h2>
      <div className="w-20 md:w-36 lg:w-68 h-1 bg-yellow-400 mx-auto my-2 rounded mb-10 md:mb-[100px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px] mt-8 w-full mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow shadow-lg"
          >
            <img
              src={item.img} 
              alt={item.title}
              className="w-full h-46 md:h-64 object-cover rounded-[30px]"
            />

            <div className="absolute inset-0 bg-black/10 flex flex-col items-start pl-4 md:pl-10 pt-10 rounded-[30px] md:space-y-4">
              <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-medium">{item.title}</h3>
              <p className="text-gray-100 text-base md:text-lg text-left w-4/5">{item.desc}</p>
            </div>

            <div className="absolute top-35 md:top-48  left-6 md:left-9 bg-yellow-400 text-red-700 font-bold text-sm rounded-full w-16 h-16 md:w-25 md:h-25 flex flex-col items-center justify-center">
              <p className="font-bold text-base md:text-lg"> $120 </p>
              <span className="text-xs text-black">person</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMenu;
