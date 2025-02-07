import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import UserIcon from "../../assets/user.png";
import { Divider } from "@mui/material";
import { CgPassword } from "react-icons/cg";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import FooterComponent from "../../components/Footer/FooterComponent";

const ProfileUserPage = () => {
  const [passwordVisibleCP, setPasswordVisibleCP] = useState(false); //state menyimpan perubahan icon password
  const [passwordVisibleNP, setPasswordVisibleNP] = useState(false); //state menyimpan perubahan icon password
  const [passwordVisiblePC, setPasswordVisiblePC] = useState(false); //state menyimpan perubahan icon password
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
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <div className="flex flex-col w-full">
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="bg-slate-50 h-screen">
          <h1 className="mt-14 text-black text-xl text-start mb-2 font-montserrat">
            Profile User
          </h1>
          <Divider className="w-full h-[0.5px] bg-slate-400" />
          <div className="flex flex-col justify-center bg-white mt-6">
            <div className="flex flex-row gap-4 justify-start items-center p-8  shadow-lg rounded-md border-2 border-blue-400">
              <img
                src={UserIcon}
                alt="user icon"
                className="w-44 h-44 p-2 mr-3 rounded-full shadow-md opacity-80"
              />
              {/* not change */}
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1 cursor-not-allowed">
                  <h1 className="font-montserrat font-medium text-sm">NPK*</h1>
                  <p className="border p-2 rounded-md bg-slate-100 text-slate-500 font-montserrat text-sm">
                    11211043
                  </p>
                </div>
                <div className="flex flex-col gap-1 cursor-not-allowed">
                  <h1 className="font-montserrat font-medium text-sm">Name*</h1>
                  <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
                    Helmi
                  </p>
                </div>
                <div className="flex flex-col gap-1 cursor-not-allowed">
                  <h1 className="font-montserrat font-medium text-sm">Job*</h1>
                  <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
                    IT Support
                  </p>
                </div>
                <div className="flex flex-col gap-1 cursor-not-allowed">
                  <h1 className="font-montserrat font-medium text-sm">
                    Email*
                  </h1>
                  <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
                    helmi220602@gmail.com
                  </p>
                </div>
              </div>

              <div className="h-80 w-1  bg-yellow-200 "></div>

              {/* change available */}
              <div className="flex flex-col justify-center items-center w-full gap-1">
                <div className="flex flex-row-reverse gap-2 items-center">
                  <h1 className="capitalize text-slate-600 font-montserrat text-lg text-center font-semibold">
                    change password
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
                      current password
                    </label>
                    <input
                      type={passwordVisibleCP ? "text" : "password"}
                      id="cp"
                      placeholder="password saat ini"
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
                      new password
                    </label>
                    <input
                      type={passwordVisibleNP ? "text" : "password"}
                      id="np"
                      placeholder="masukkan password baru"
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
                      password confirmation
                    </label>
                    <input
                      type={passwordVisiblePC ? "text" : "password"}
                      id="pc"
                      placeholder="konfirmasi password baru"
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
                    className="capitalize font-montserrat font-medium text-base p-2 rounded-md shadow-md text-white bg-blue-500 hover:scale-x-125 hover:-tracking-wide duration-150 ease-in-out mx-28"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Box>
        <FooterComponent />
      </div>
    </Box>
  );
};

export default ProfileUserPage;
