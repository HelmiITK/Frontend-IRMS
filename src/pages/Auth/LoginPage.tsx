import LogoKPI from "../../assets/KPI_logo_2.png";
import WarningIcon from "../../assets/warning_12089273.png";
import BgLogin from "../../assets/bgLogin.jpg";

import { TypeAnimation } from "react-type-animation";
import { IoLogInSharp } from "react-icons/io5";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

// Props with react ts
// interface Props {
//   title: string;
//   onclick: () => void;
// }

const LoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false); //state menyimpan perubahan icon password
  const [onClickLogin, setOnClickLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  // handle password icon
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setOnClickLogin(true); //tampilkan loader

    setTimeout(() => {
      setOnClickLogin(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="container mx-auto">
      <img
        src={BgLogin}
        alt="background image"
        className="fixed top-0 left-0 w-full h-full object-cover z-0" // Ensure the background fills the screen
      />
      <div className="relative z-10 bg-black min-h-screen bg-opacity-25 lg:flex lg:flex-col lg:items-center">
        {/* header */}
        <div className="relative z-10 flex flex-row items-center justify-center gap-2 py-3 px-3 bg-white bg-opacity-80 lg:w-[29%] lg:rounded-md lg:mt-4">
          <img src={LogoKPI} alt="logo" className="max-w-20" />
          <div className="flex flex-col">
            <h1 className="font-bold text-green-700 text-lg">
              PT KALTIM PARNA INDUSTRI
            </h1>
            <p className="italic text-green-700 text-sm font-semibold">
              AMMONIA INSDUSTRY
            </p>
          </div>
        </div>

        {/* header 2 */}
        <div className="relative z-10 flex flex-col justify-center items-center mt-3">
          <TypeAnimation
            sequence={[
              1000,
              "Selamat Datang Di Aplikasi IRMS👋",
              1000,
              "Semangat Bekerja Keselamatan Tetap Dijaga",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            className="text-white text-base font-poppins"
          />
        </div>

        {/* form login */}
        <div className="relative z-10 flex rounded-md mx-2 mt-4 flex-col items-center">
          <div className="w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-md">
            <div className="flex flex-col items-center gap-2">
              <img src={WarningIcon} alt="icon" className="w-12 h-12" />
              <p className="font-poppins text-xl text-green-800 uppercase font-bold ">
                (irms)
              </p>
              <h2 className="font-montserrat text-2xl font-semibold uppercase text-green-800 text-center">
                incident report monitoring system
              </h2>
            </div>

            <div className="relative z-10 w-full h-[0.1px] bg-slate-400 my-4"></div>

            <form onSubmit={handleLogin}>
              {/* Input NPK */}
              <div className="mb-4">
                <label
                  htmlFor="npk"
                  className="block mb-2 text-sm font-medium text-slate-800"
                >
                  NPK
                </label>
                <input
                  required
                  type="text"
                  id="npk"
                  placeholder="Masukkan NPK Anda"
                  className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Input Password */}
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-slate-800"
                >
                  Password
                </label>
                <input
                  required
                  type={passwordVisible ? "text" : "password"} // Toggle input type
                  id="password"
                  placeholder="Masukkan Password Anda"
                  className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <div
                  className="absolute top-[47px] right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility} // Toggle visibility when clicked
                >
                  {passwordVisible ? (
                    <IoEye size={20} className="text-gray-600" />
                  ) : (
                    <IoEyeOff size={20} className="text-gray-600" />
                  )}
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full flex flex-row items-center justify-center gap-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 duration-150"
                disabled={onClickLogin}
              >
                {onClickLogin ? (
                  <PulseLoader
                    color="#ffffff"
                    size={10}
                    margin={3}
                    className="py-[6px]"
                  />
                ) : (
                  <>
                    <IoLogInSharp className="w-7 h-7 text-white" />
                    <p className="font-poppins font-medium tracking-wide">
                      Login
                    </p>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
