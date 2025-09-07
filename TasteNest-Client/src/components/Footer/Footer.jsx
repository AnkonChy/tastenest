import React from "react";
import footer1 from "../../assets/footer/footer1.png";
import footer2 from "../../assets/footer/footer2.png";
import logo from "../../assets/logo/Screenshot 2025-09-06 121314.png";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#f5f8fd] relative pt-20 pb-10">
      <img src={footer1} alt="" className="absolute left-0 bottom-0" />
      <img src={footer2} alt="" className="absolute right-0 bottom-0" />
      <footer className="footer sm:footer-horizontal text-base-content max-w-7xl mx-auto">
        <div className="w-[390px] h-[364px] pl-6 pt-6 rounded-4xl bg-[#F3274C] text-white">
          <img src={logo} alt="" />
          <div className="pl-8 space-y-2">
            <h2 className="">Tuesday – Saturday: 12:00pm – 23:00pm</h2>
            <h2>Closed on Sunday</h2>
          </div>
          <h2 className="pl-8">5 star rated on TripAdvisor</h2>
        </div>
        <nav>
          <h6 className="text-2xl font-bold">About</h6>
          <div className="w-full h-1 bg-yellow-400 mx-auto rounded"></div>
          <a className="link link-hover flex items-center mt-4">
            <IoIosArrowForward />
            Fredoka One
          </a>
          <a className="link link-hover flex items-center">
            <IoIosArrowForward />
            Special Dish
          </a>
          <a className="link link-hover flex items-center">
            <IoIosArrowForward />
            Reservation
          </a>
          <a className="link link-hover flex items-center">
            <IoIosArrowForward />
            Contact
          </a>
        </nav>
        <nav>
          <h6 className=" text-2xl font-bold">Menu</h6>
          <div className="w-full h-1 bg-yellow-400 mx-auto rounded"></div>
          <a className="link link-hover flex items-center mt-4">
            <IoIosArrowForward />
            Steaks
          </a>
          <a className="link link-hover flex items-center">
            <IoIosArrowForward />
            Burgers
          </a>
          <a className="link link-hover flex items-center">
            <IoIosArrowForward />
            Coctails
          </a>
          <a className="link link-hover flex items-center">
            <IoIosArrowForward />
            Bar B Q
          </a>
          <a className="link link-hover flex items-center">
            <IoIosArrowForward />
            Desserts
          </a>
        </nav>
        {/* <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav> */}
        <form>
          <h6 className="text-2xl font-bold">Newsletter</h6>
          <div className="w-2/4 h-1 bg-yellow-400 rounded"></div>
          <fieldset className="w-80 my-4">
            <label>Enter your email address</label>
            <div className="my-4">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered join-item"
              />
              <div className="flex pl-4 pt-4">
                <div className="border-2 border-[#F3274C] rounded-xl h-[68px] w-32 relative">
                  <button className="px-8 py-[15px] bg-[#F3274C] rounded-xl font-semibold absolute top-[3px] right-[6px] text-lg text-white">
                    Subscribe
                  </button>
                </div>
              </div>
              {/* <button className="btn btn-primary join-item">Subscribe</button> */}
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="max-w-7xl mx-auto bg-yellow-400 rounded pb-2 mt-20"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between pt-6">
        <p>
          <span>© 2025 TasteNest</span> | All shawonetc3 Themes
        </p>
        <p className="font-bold underline">Facebook</p>
        <p className="font-bold underline">Instagram</p>

      </div>
    </div>
  );
};

export default Footer;
