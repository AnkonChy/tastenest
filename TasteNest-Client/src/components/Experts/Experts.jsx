import React from "react";
import chef1 from "../../assets/experts/expert1.png"; // replace with your images
import chef2 from "../../assets/experts/expert2.png";
import chef3 from "../../assets/experts/expert3.png";
import signature from "../../assets/experts/sign.png";

const Experts = () => {
  const chefs = [
    {
      id: 1,
      role: "Dessert specialist",
      name: "Thomas Walim",
      image: chef1,
    },
    {
      id: 2,
      role: "Chef Master",
      name: "James Jhonson",
      image: chef2,
    },
    {
      id: 3,
      role: "Dessert specialist",
      name: "Room Minal",
      image: chef3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h2 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold text-black">
        Featured Dishes
      </h2>
      <div className="w-20 md:w-36 lg:w-68 h-1 bg-yellow-400 mx-auto my-2 rounded mb-10 md:mb-6"></div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-44 md:gap-20 px-5">
        {chefs.map(({ id, role, name, image }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center relative"
          >
            {/* Chef Image */}
            <img src={image} alt={name} className="w-72 h-auto" />

            {/* White circle card */}
            <div className="absolute z-10 top-64 w-72 h-72 bg-white rounded-full shadow-md flex flex-col items-center justify-center">
              <p className="text-red-500 font-medium text-lg">{role}</p>
              <h3 className="text-3xl font-bold mt-1">{name}</h3>

              {/* 3 circles */}
              <div className="flex gap-3 my-3">
                <div className="w-10 h-10 rounded-full bg-[#F5F8FD]"></div>
                <div className="w-10 h-10 rounded-full bg-[#F5F8FD]"></div>
                <div className="w-10 h-10 rounded-full bg-[#F5F8FD]"></div>
              </div>

              {/* Signature placeholder */}
              <img src={signature} className="w-32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
