// import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FaCartPlus } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";
// import { AuthContext } from "../../provider/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { clearUser } from "../../redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  // const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Firebase logout
      dispatch(clearUser()); // Redux store clear
      navigate("/login"); // Login page e pathao
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
    // signOutUser()
    //   .then(() => {
    //     console.log("user sign out successfully");
    //   })
    //   .catch((error) => console.log("error", error.message));
  };

  return (
    <div className="navbar py-4 bg-base-100 max-w-7xl mx-auto px-0">
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
        <ul className="menu menu-horizontal px-1 font-medium text-lg">
          <li>
            {/* <details>
              <summary>Home</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details> */}
            <Link to="/">Home</Link>
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
      <div className="navbar-end p-0">
        <span>
          <FaCartPlus className="text-xl mr-4 text-green-700" />
        </span>
        <button className="px-1 py-2 lg:px-6 lg:py-[10px] bg-[#FFC222] text-white rounded-[7px] text-sm md:text-xl">
          Contact Us
        </button>
        {user ? (
          <>
            <button
              onClick={handleSignOut}
              className="ml-2 px-1 py-2 lg:px-6 lg:py-[10px] bg-[#F3274C] text-white rounded-[7px] text-sm md:text-xl"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="ml-2 px-1 py-2 lg:px-6 lg:py-[10px] bg-[#F3274C] text-white rounded-[7px] text-sm md:text-xl"
            >
              Login
            </Link>
          </>
        )}

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <TbMenu3 className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
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
