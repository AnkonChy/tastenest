import { FaCircle } from "react-icons/fa";
import feedtea from "../../assets/feedback/feedtea.png";
import feedstake from "../../assets/feedback/feedstake.png";
import feedicecream from "../../assets/feedback/feedicecream.png";
const Feedbacks = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 flex flex-col lg:flex-row items-end justify-between gap-28 md:gap-14 mt-32">
      {/* Left Content */}
      <div className="flex-1">
        <p className="text-red-500 font-semibold uppercase text-lg tracking-wider mb-2">
          Testimonials & Reviews
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-snug mb-8">
          Our Customar <br /> Feedbacks
        </h2>

        {/* Review Card */}
        <div className="border-3 border-yellow-400 rounded-3xl p-8 relative bg-white shadow-sm">
          <p className="text-gray-700 mb-4 leading-relaxed md:w-5/6 text-2xl">
            A good restaurant is like a vacation; it transports you, and it
            becomes a lot more than just about the food. All great deeds and all
            great thoughts
          </p>
          <h4 className="font-bold text-black text-2xl">Bratlee Hamint</h4>

          {/* Yellow Circle */}
          <div className="absolute bottom-[6px] right-6 w-10 h-10 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-6">
          <FaCircle className="text-red-500 text-[10px]" />
          <FaCircle className="text-gray-300 text-[10px]" />
          <FaCircle className="text-gray-300 text-[10px]" />
        </div>
      </div>

      {/* Right Images */}
      <div className="flex-1 relative w-full mx-auto">
        {/* Coffee - top right */}
        <div className="mb-8">
          <img
            src={feedstake}
            alt="coffee"
            className="rounded-3xl object-cover w-[292px] h-[292px]"
          />
        </div>

        {/* Steak - middle left */}
        <div className="absolute bottom-64 left-60">
          <img
            src={feedtea}
            alt="steak"
            className="rounded-3xl object-cover  bg-red-500 bg-opacity-50"
          />
        </div>

        {/* Dessert - bottom right */}
        <div className="absolute top-[84px] right-0">
          <img
            src={feedicecream}
            alt="dessert"
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
