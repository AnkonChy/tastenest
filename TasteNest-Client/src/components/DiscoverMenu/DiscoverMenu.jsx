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
    <div className="text-center my-12  px-2 md:px-24 lg:px-[300px] mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-black">
        Discover Menu
      </h2>
      <div className="w-43 h-1 bg-yellow-400 mx-auto my-2 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full mx-auto px-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow shadow-lg"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover rounded-2xl"
            />

            <div className="absolute inset-0 bg-black/10 flex flex-col items-start pl-10 pt-10 rounded-2xl">
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
              <p className="text-gray-100 text-sm">{item.desc}</p>
            </div>

            <div className="absolute top-40 left-9 bg-yellow-400 text-red-700 font-bold text-sm rounded-full w-20 h-20 flex flex-col items-center justify-center">
              <p className="font-bold text-base"> $120 </p>
              <span className="text-xs text-black">person</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMenu;
