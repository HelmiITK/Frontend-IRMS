import { Link } from "react-router-dom";
import { VscSignIn } from "react-icons/vsc";

interface FormForgetPassComponentProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormForgetPassComponent: React.FC<FormForgetPassComponentProps> = ({
  email,
  setEmail,
  isFocused,
  setIsFocused,
}) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 lg:gap-10">
      <h1 className="capitalize text-3xl mx-10 font-bold text-gray-800 lg:text-5xl">
        forgot <br className="hidden lg:block" /> your{" "}
        <br className="block lg:hidden" /> password ?
      </h1>
      <form className="flex flex-col gap-5 w-full px-10 lg:gap-6">
        <div className="relative w-full">
          <label
            htmlFor="email"
            className={`absolute left-0 text-gray-400 transition-all duration-300 ${
              isFocused || email
                ? "-top-3 text-xs text-primary lg:text-sm"
                : "top-2 text-sm lg:text-base"
            }`}
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(email !== "")}
            className="w-full bg-transparent border-b border-primary py-2 text-black text-sm focus:outline-none"
          />
        </div>
        <button
          className="capitalize text-sm text-white bg-primary rounded-md shadow-md py-[10px] lg:py-3 lg:text-base lg:hover:scale-105 duration-200 ease-in-out hover:shadow-lg hover:shadow-green-200 transition-all"
          type="button"
        >
          reset passwword
        </button>
        <div className="w-full flex items-center justify-center">
          <Link
            to={"/"}
            className="w-fit flex items-center justify-center gap-1 hover:underline"
          >
            <VscSignIn className="hidden lg:block text-2xl text-gray-600 text-center" />
            <span className="text-sm italic  text-gray-600 lg:text-base">
              back to sign in
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormForgetPassComponent;
