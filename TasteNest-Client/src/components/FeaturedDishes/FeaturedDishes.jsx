import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";

const FeaturedDishes = () => {
  const [dishes, setDishes] = useState([]); // ✅ state to hold API data

  useEffect(() => {
    // ✅ fetch data from your server API
    axios
      .get("http://localhost:7000/dish") // replace with your actual API URL
      .then((res) => {
        setDishes(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch dishes:", err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto text-center  mt-32">
      <SectionHeader title="Featured Dishes" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  lg:gap-10">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="border-3 border-yellow-500 rounded-3xl h-[459px] w-full lg:w-[413px] p-3 relative"
          >
            <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center font-bold">
              {dish.label}
            </div>

            <div
              className="h-36 rounded-full mt-8 relative"
              style={{ backgroundColor: dish.bgColor }}
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="absolute bottom-[-100px] right-[14px] w-90"
              />
            </div>

            <div className="absolute left-4 bottom-8 text-center">
              <h1 className="font-bold text-lg">{dish.title}</h1>
              <p className="text-base font-bold text-gray-600">
                <span className="line-through mr-2">${dish.originalPrice}</span>
                <span className="text-[#F3274C] text-2xl">$</span>
                <span className="text-2xl">{dish.salePrice}</span>
              </p>
            </div>

            <div className="absolute right-4 bottom-4 w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center font-bold">
              <FaLock className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDishes;
