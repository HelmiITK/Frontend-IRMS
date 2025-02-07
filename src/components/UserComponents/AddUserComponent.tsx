import { Divider } from "@mui/material";
import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const AddUserComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSuperior, setSelectedSuperior] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <Box sx={{ display: "flex" }} className="bg-gray-100 h-screen">
      <SideNav />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        {/* header top */}
        <div>
          <h1 className="font-montserrat text-xl capitalize mt-14 mb-2">
            create user
          </h1>
          <Divider className="w-full h-[0.5px] bg-slate-200 " />
        </div>
        <div className="flex justify-start">
          <Link
            to={"/user_management"}
            className="flex items-center gap-1 mt-2 hover:underline hover:-translate-x-1 duration-150"
          >
            <IoIosArrowRoundBack className="w-6 h-6" />
            <h2 className="italic text-sm">Back</h2>
          </Link>
        </div>

        {/* form create user */}
        <form
          action=""
          className="p-4 mt-3 bg-white rounded-sm shadow-sm shadow-slate-400 flex flex-col gap-3"
        >
          {/* address */}
          <div className="flex flex-row gap-4 mb-4">
            <h1 className="capitalize font-montserrat text-base font-medium text-black mr-2">
              address
            </h1>
            <div className="flex flex-col w-full gap-3">
              {/* NPK */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="npk"
                  className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold font-montserrat text-sm"
                >
                  NPK
                </label>
                <input
                  type="text"
                  id="npk"
                  name="npk"
                  placeholder="masukkan kode NPK"
                  className="rounded-sm placeholder:text-sm px-3 py-2 border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100"
                />
              </div>
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold font-montserrat text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="masukkan name"
                  className="rounded-sm placeholder:text-sm px-3 py-2 border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              {/* Email */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold font-montserrat text-sm"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="masukkan email"
                  className="rounded-sm placeholder:text-sm px-3 py-2 border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100"
                />
              </div>
              {/* Password */}
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="password"
                  className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold font-montserrat text-sm"
                >
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="masukkan password"
                  className="rounded-sm placeholder:text-sm px-3 py-2 border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100"
                />
                <div
                  className="absolute top-[43px] right-3 -translate-y-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <IoEye size={20} className="text-gray-500" />
                  ) : (
                    <IoEyeOff size={20} className="text-gray-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <Divider className="w-full h-[0.5px] bg-slate-200 " />
          {/* position */}
          <div className="flex flex-row gap-4 mt-2">
            <h1 className="capitalize font-montserrat text-base font-medium text-black mr-2">
              position
            </h1>
            <div className="flex flex-col w-full gap-3">
              {/* Roles */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="roles"
                  className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold font-montserrat text-sm"
                >
                  Roles
                </label>
                <input
                  type="text"
                  id="roles"
                  name="roles"
                  placeholder="klik pilihan role"
                  className="rounded-sm placeholder:text-sm px-3 py-2 border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100"
                />
              </div>
              {/* Job */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="job"
                  className="font-semibold font-montserrat text-sm"
                >
                  Job
                </label>
                <select
                  name="job"
                  id="job"
                  className={`rounded-sm px-3 py-2 border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100 
                    ${selectedJob === "" ? "text-gray-400" : "text-black"}`}
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Select a job...
                  </option>
                  <option value="IT Support" className="text-black">
                    IT Support
                  </option>
                  <option value="Accounting Staf" className="text-black">
                    Accounting Staf
                  </option>
                  <option value="Finance Supervisor" className="text-black">
                    Finance Supervisor
                  </option>
                  <option value="Senior Manager" className="text-black">
                    Senior Manager
                  </option>
                  <option
                    value="General Manager HRD & GA"
                    className="text-black"
                  >
                    General Manager HRD & GA
                  </option>
                  <option
                    value="Budget, Asset, & Control"
                    className="text-black"
                  >
                    Budget, Asset, & Control
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              {/* Department */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="department"
                  className="font-semibold font-montserrat text-sm"
                >
                  Department
                </label>
                <select
                  name="department"
                  id="department"
                  className={`rounded-sm px-3 py-2 border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100 
                    ${
                      selectedDepartment === "" ? "text-gray-400" : "text-black"
                    }`}
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Select a department...
                  </option>
                  <option value="IT Support" className="text-black">
                    Inoformation Technology
                  </option>
                  <option value="Accounting Staf" className="text-black">
                    Maintanance
                  </option>
                  <option value="Finance Supervisor" className="text-black">
                    Operation
                  </option>
                  <option value="Senior Manager" className="text-black">
                    Logistic
                  </option>
                  <option
                    value="General Manager HRD & GA"
                    className="text-black"
                  >
                    Finance
                  </option>
                  <option
                    value="Budget, Asset, & Control"
                    className="text-black"
                  >
                    Guality, Safety, Health and Environtment
                  </option>
                </select>
              </div>
              {/* Superior */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="superior"
                  className="font-semibold font-montserrat text-sm"
                >
                  Superior
                </label>
                <select
                  name="superior"
                  id="superior"
                  className={`rounded-sm px-3 py-2 border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100 
                    ${
                      selectedSuperior === "" ? "text-gray-400" : "text-black"
                    }`}
                  value={selectedSuperior}
                  onChange={(e) => setSelectedSuperior(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Select a superior...
                  </option>
                  <option value="IT Support" className="text-black">
                    Admin
                  </option>
                  <option value="Accounting Staf" className="text-black">
                    Yusuf
                  </option>
                  <option value="Finance Supervisor" className="text-black">
                    Helmi
                  </option>
                  <option value="Senior Manager" className="text-black">
                    Daniel
                  </option>
                  <option
                    value="General Manager HRD & GA"
                    className="text-black"
                  >
                    Muhammad Rosyad
                  </option>
                  <option
                    value="Budget, Asset, & Control"
                    className="text-black"
                  >
                    Alfian
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* submit */}
            <button
              type="button"
              className="capitalize font-montserrat font-semibold text-sm p-[10px] rounded-sm shadow-md bg-white my-4 w-1/2 border-2 text-green-600 border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-300 duration-150 ease-linear"
            >
              save
            </button>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default AddUserComponent;
