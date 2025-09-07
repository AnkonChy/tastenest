import React from "react";
import { FaCookieBite, FaMugHot, FaHamburger } from "react-icons/fa";
import { GiMeat } from "react-icons/gi";

const categories = [
  { id: 1, name: "Dessert", icon: <FaCookieBite size={40} />, active: true },
  { id: 2, name: "Steak", icon: <GiMeat size={40} />, active: false },
  { id: 3, name: "Coffee", icon: <FaMugHot size={40} />, active: false },
  { id: 4, name: "Burger", icon: <FaHamburger size={40} />, active: false },
];

const FoodCategories = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 justify-items-center pt-16 my-10 max-w-3xl mx-auto">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`flex flex-col items-center justify-center w-32 h-36 rounded-xl shadow-md transition-all cursor-pointer
            ${
              cat.active
                ? "bg-[#F3274C] text-white"
                : "bg-white border border-gray-200 text-gray-800 hover:shadow-lg"
            }`}
        >
          <div className="mb-2">{cat.icon}</div>
          <p
            className={`font-semibold ${
              cat.active ? "text-white" : "text-black"
            }`}
          >
            {cat.name}
          </p>
        </div>
      ))}
    </section>
  );
};

export default FoodCategories;
 