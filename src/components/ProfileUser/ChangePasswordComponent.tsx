import { useState } from "react";
import { CgPassword } from "react-icons/cg";
import { IoEye, IoEyeOff } from "react-icons/io5";

interface ChangePasswordComponentProps {
  t: (key: string) => string;
}

const ChangePasswordComponent: React.FC<ChangePasswordComponentProps> = ({
  t,
}) => {
  const [passwordVisibleCP, setPasswordVisibleCP] = useState<boolean>(false); //state menyimpan perubahan icon password
  const [passwordVisibleNP, setPasswordVisibleNP] = useState<boolean>(false); //state menyimpan perubahan icon password
  const [passwordVisiblePC, setPasswordVisiblePC] = useState<boolean>(false); //state menyimpan perubahan icon password
  // handle password icon
  const togglePasswordVisibilityCP = () => {
    setPasswordVisibleCP(!passwordVisibleCP);
  };
  const togglePasswordVisibilityNP = () => {
    setPasswordVisibleNP(!passwordVisibleNP);
  };
  const togglePasswordVisibilityPC = () => {
    setPasswordVisiblePC(!passwordVisiblePC);
  };

  return (
    <div className="flex flex-col items-center gap-2 lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-full lg:gap-1">
      <div className="flex flex-row-reverse gap-2 items-center">
        <h1 className="capitalize text-slate-600 font-montserrat text-lg text-center font-semibold">
          {t(`profileUser.changeAvailable.header`)}
        </h1>
        <CgPassword className="w-8 h-8" />
      </div>
      <form action="" className="w-full flex flex-col gap-4">
        {/* current password */}
        <div className="flex flex-col gap-1 relative">
          <label
            htmlFor="cp"
            className="flex flex-col gap-1 capitalize font-montserrat text-sm font-medium"
          >
            {t(`profileUser.changeAvailable.label1`)}
          </label>
          <input
            type={passwordVisibleCP ? "text" : "password"}
            id="cp"
            placeholder={t(`profileUser.placeHolder.input1`)}
            className="px-2 py-2 text-sm text-slate-700 font-poppins border rounded-sm shadow-sm shadow-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 placeholder:text-sm placeholder:font-light "
          />
          <div
            className="absolute top-[43px] right-3 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibilityCP} // Toggle visibility when clicked
          >
            {passwordVisibleCP ? (
              <IoEye size={20} className="text-gray-600" />
            ) : (
              <IoEyeOff size={20} className="text-gray-600" />
            )}
          </div>
        </div>
        {/* new password */}
        <div className="flex flex-col gap-1 relative">
          <label
            htmlFor="np"
            className="flex flex-col gap-1 capitalize font-montserrat text-sm font-medium"
          >
            {t(`profileUser.changeAvailable.label2`)}
          </label>
          <input
            type={passwordVisibleNP ? "text" : "password"}
            id="np"
            placeholder={t(`profileUser.placeHolder.input2`)}
            className="px-2 py-2 text-sm text-slate-700 font-poppins border rounded-sm shadow-sm shadow-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 placeholder:text-sm placeholder:font-light "
          />
          <div
            className="absolute top-[43px] right-3 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibilityNP} // Toggle visibility when clicked
          >
            {passwordVisibleNP ? (
              <IoEye size={20} className="text-gray-600" />
            ) : (
              <IoEyeOff size={20} className="text-gray-600" />
            )}
          </div>
        </div>
        {/* current password */}
        <div className="flex flex-col gap-1 relative">
          <label
            htmlFor="pc"
            className="flex flex-col gap-1 capitalize font-montserrat text-sm font-medium"
          >
            {t(`profileUser.changeAvailable.label3`)}
          </label>
          <input
            type={passwordVisiblePC ? "text" : "password"}
            id="pc"
            placeholder={t(`profileUser.placeHolder.input3`)}
            className="px-2 py-2 text-sm text-slate-700 font-poppins border rounded-sm shadow-sm shadow-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-500 placeholder:text-sm placeholder:font-light "
          />
          <div
            className="absolute top-[43px] right-3 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibilityPC} // Toggle visibility when clicked
          >
            {passwordVisiblePC ? (
              <IoEye size={20} className="text-gray-600" />
            ) : (
              <IoEyeOff size={20} className="text-gray-600" />
            )}
          </div>
        </div>
        <button
          type="button"
          className="mx-20 capitalize font-montserrat font-medium text-base p-2 rounded-md shadow-md text-white bg-blue-500 lg:hover:scale-x-125 lg:hover:-tracking-wide duration-150 ease-in-out lg:mx-28"
        >
          {t(`profileUser.changeAvailable.button`)}
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordComponent;
