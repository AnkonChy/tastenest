import React, { useEffect, useState } from "react";
import chef1 from "../../assets/experts/expert1.png"; // replace with your images
import chef2 from "../../assets/experts/expert2.png";
import chef3 from "../../assets/experts/expert3.png";
import signature from "../../assets/experts/sign.png";
import axios from "axios";

const Experts = () => {
  const [expert, setExpert] = useState([]);
  useEffect(() => {
    // ✅ fetch data from your server API
    axios
      .get("http://localhost:7000/expert") // replace with your actual API URL
      .then((res) => {
        setExpert(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch dishes:", err);
      });
  }, []);


  return (
    <div className="max-w-7xl mx-auto mt-20 mb-72">
      <h2 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold text-black">
        Meet Our Experts
      </h2>
      <div className="w-20 md:w-36 lg:w-68 h-1 bg-yellow-400 mx-auto my-2 rounded mb-10 md:mb-6"></div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-44 md:gap-20 px-5">
        {expert.map(({ id, role, name, image }) => (
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
