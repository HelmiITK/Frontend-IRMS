import WarningIcon from "../../../assets/warning_12089273.png";
import { IoLogInSharp } from "react-icons/io5";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { PulseLoader } from "react-spinners";

interface FormLoginComponentProps {
  onClickLogin: boolean;
  togglePasswordVisibility: () => void;
  handleLogin: (e: React.FormEvent<Element>) => void;
  handleForgetPass: () => void;
  passwordVisible: boolean;
}

const FormLoginComponent: React.FC<FormLoginComponentProps> = ({
  onClickLogin,
  togglePasswordVisibility,
  handleLogin,
  handleForgetPass,
  passwordVisible,
}) => {
  return (
    <div className="mx-4">
      <div className="w-full max-w-sm p-6 bg-white bg-opacity-55 rounded-2xl shadow-xl drop-shadow-xl backdrop-blur-md">
        {/* header */}
        <div className="flex flex-col items-center gap-2">
          <img src={WarningIcon} alt="icon" className="w-12 h-12" />
          <p className="font-poppins text-xl text-green-800 uppercase font-bold ">
            (irms)
          </p>
          <h2 className="font-montserrat text-base lg:text-lg font-semibold uppercase text-green-800 text-center">
            incident report monitoring system
          </h2>
        </div>

        <div className="relative z-10 w-full h-[0.1px] bg-slate-400 my-4"></div>

        {/* form input */}
        <form onSubmit={handleLogin}>
          {/* Input NPK */}
          <div className="mb-4">
            <label
              htmlFor="npk"
              className="block mb-2 text-sm font-medium text-black"
            >
              NPK
            </label>
            <input
              required
              type="text"
              id="npk"
              placeholder="Masukkan NPK Anda"
              className="w-full px-4 py-2 text-sm border placeholder:text-gray-400 placeholder:text-xs lg:placeholder:text-sm  placeholder:font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Input Password */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              required
              type={passwordVisible ? "text" : "password"} // Toggle input type
              id="password"
              placeholder="Masukkan Password Anda"
              className="w-full px-4 py-2 text-sm border placeholder:text-gray-400 placeholder:text-xs lg:placeholder:text-sm placeholder:font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
              <label htmlFor="remember" className="ml-2 text-sm text-blue-600">
                Remember me
              </label>
            </div>
            <button
              onClick={handleForgetPass}
              type="button"
              className="text-sm text-red-500 hover:underline"
            >
              Forgot Password?
            </button>
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
                <p className="font-poppins font-medium tracking-wide">Login</p>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLoginComponent;
