import { FcGoogle } from "react-icons/fc";
import pic1 from "../../assets/login/pexels-daniela-elena-tentis-118658-691114.jpg";
import pic2 from "../../assets/login/pexels-minan1398-1482803.jpg";
import pic3 from "../../assets/login/44116.jpg";
import pic4 from "../../assets/login/6091826.jpg";
import { Link, NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      navigate("/");
    });
  };
  return (
    <div
      className="min-h-[calc(100vh-86px)] relative flex justify-center items-center"
      style={{
        backgroundImage: `url(${pic4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>

      <div className="relative md:flex gap-4 p-6 rounded-2xl bg-[#2B2738]">
        <div className="relative">
          <img
            className="w-[450px] h-full rounded-xl object-cover"
            src={pic1}
            alt=""
          />
        </div>

        <div className="card bg-[#2B2738] w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl text-[#FFFEFF] ml-7 mt-2">
            Login Your Account
          </h1>

          <form className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="mt-3 text-base text-white hover:text-gray-400">
                <Link to="/forgetPass" className="link">
                  Forgot password?
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#6E54B5] border-none text-white hover:bg-purple-950">
                Login
              </button>
            </div>
          </form>

          <p className="text-white ml-9 pb-4">
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </p>

          <div className="divider divider-warning mt-0 text-[#D0CFD1]">
            OR register with
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="text-lg btn w-3/4 mx-auto bg-[#2B2738] text-[#D0CFD1] hover:text-black"
          >
            <FcGoogle className="" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
