import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ReserveTable = () => {
  const [no, setNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleReserve = async (e) => {
    e.preventDefault();

    const reserveData = {
      no,
      fullName,
      date,
      time,
      phoneNo,
    };

    try {
      const res = await axios.post(
        "http://localhost:7000/reserve",
        reserveData
      );

      toast.success("Table Reserved Successfully");
      setNo("");
      setFullName("");
      setDate("");
      setTime("");
      setPhoneNo("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto h-96 md:h-72 rounded-3xl px-10 md:gap-20  mt-[106px]"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/MDJStCZV/031217aa25758ff7087e5f341e284ad34c0d2f29.jpg')",
      }}
    >
      <div className="w-full md:w-2/5 mt-10 md:mt-0 mb-0 md:mb-10">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          RESERVE <br /> A TABLE
        </h2>
        <div className="w-3/5 h-1 bg-yellow-400 my-2 rounded flex"></div>
        <p className="text-sm text-gray-200">Discover our New Menu!</p>
      </div>
      <div className="pt-10 w-full">
        <form onSubmit={handleReserve} action="" className="space-y-5">
          <div className="flex items-center gap-4">
            <input
              onChange={(e) => setNo(e.target.value)}
              value={no}
              type="text"
              placeholder="No of Guest"
              className="input w-6/12"
              required
            />
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              placeholder="Date"
              className="input w-3/12"
              required
            />
            <input
              onChange={(e) => setTime(e.target.value)}
              value={time}
              type="time"
              placeholder="Time"
              className="input w-3/12"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              className="input w-[48%]"
              required
            />
            <input
              onChange={(e) => setPhoneNo(e.target.value)}
              value={phoneNo}
              type="text"
              placeholder="Phone No"
              className="input flex-1"
              required
            />
          </div>
          <div className="flex justify-end pt-2">
            <div className="border-2 border-[#FFD40D] rounded-xl h-18 w-28 relative">
              <button
                type="submit"
                className="px-8 py-4 bg-[#FFD40D] rounded-xl font-extrabold absolute top-1 right-[7px] text-lg"
              >
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
