import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FeaturedDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/dish")
      .then((res) => {
        setDishes(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch dishes:", err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto text-center mt-32">
      <SectionHeader title="Featured Dishes" />

      <Swiper
        slidesPerView={3} // small screen
        spaceBetween={20}
        slidesPerGroup={3}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <div className="border-3 border-yellow-500 rounded-3xl h-[459px] w-full p-3 relative">
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
                  className="absolute bottom-[-100px] right-[6px] w-90"
                />
              </div>

              <div className="absolute left-4 bottom-8 text-center">
                <h1 className="font-bold text-lg">{dish.title}</h1>
                <p className="text-base font-bold text-gray-600">
                  <span className="line-through mr-2">
                    ${dish.originalPrice}
                  </span>
                  <span className="text-[#F3274C] text-2xl">$</span>
                  <span className="text-2xl">{dish.salePrice}</span>
                </p>
              </div>

              <div className="absolute right-4 bottom-4 w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center font-bold">
                <FaLock className="text-xl" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedDishes;
