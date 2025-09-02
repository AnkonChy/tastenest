import React from "react";
import { Link } from "react-router";
import { FaCartPlus } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar py-4 bg-base-100 shadow-sm px-2 md:px-24 lg:px-72 mx-auto">
      <div className="navbar-start">
        <a className="text-xl">
          <img
            className="w-28"
            src="https://i.ibb.co.com/HfVyPwPP/Screenshot-2025-09-02-113453.png"
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <details>
              <summary>Home</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <details>
              <summary>Shop</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Blog</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Pages</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <span>
          <FaCartPlus className="text-xl text-green-700" />
        </span>
        <a className="px-8 py-3 bg-[#FFC222] text-white rounded-md">
          Contact Us
        </a>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <TbMenu3 className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <details>
                <summary>Home</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <details>
                <summary>Shop</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Blog</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
