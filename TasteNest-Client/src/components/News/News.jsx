import React from "react";
import news1 from "../../assets/news/news1.jpg";
import news2 from "../../assets/news/news2.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    // ✅ fetch data from your server API
    axios
      .get("http://localhost:7000/news") // replace with your actual API URL
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch dishes:", err);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto text-center  mt-32">
      <SectionHeader title="Recent News" />
      <div className="flex items-center justify-between">
        {news.map((signleNews) => (
          <div className="flex items-center text-start gap-10">
            <div>
              <img src={signleNews?.image} alt="" className="w-[260px] rounded-3xl" />
            </div>
            <div className="">
              <span className="bg-yellow-300 font-bold px-3 py-1 rounded-md">
                {signleNews?.date}
              </span>
              <h1 className="text-3xl font-semibold my-5">
                {signleNews?.title}
              </h1>
              <div className="flex items-center gap-3">
                <img
                  src={signleNews?.author?.profileImage} // replace with your profile image
                  alt="Willimes James"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{signleNews?.author?.name}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="flex items-center text-start gap-10">
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
        </div> */}
      </div>
    </div>
  );
};

export default News;
