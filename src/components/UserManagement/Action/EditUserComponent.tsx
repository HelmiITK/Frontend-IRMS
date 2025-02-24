import { Divider } from "@mui/material";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import FooterComponent from "../../Footer/FooterComponent";
import Select from "react-select";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

type OptionType = { value: string; label: string };
const options = [
  { value: "Super adminstrator", label: "Super adminstrator" },
  { value: "Manager", label: "Manager" },
  { value: "Initiator", label: "Initiator" },
  { value: "General Manager", label: "General Manager" },
  { value: "Ironman", label: "Ironman" },
];

const EditUserComponent: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedSuperior, setSelectedSuperior] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex flex-col gap-10 justify-between h-full">
      <div className="flex flex-col w-full">
        {/* header  */}
        <div className="flex flex-col gap-2 mb-2">
          <h1 className="mt-2 lg:mt-3 text-xl font-montserrat capitalize">
            edit data user
          </h1>
          <div className="flex items-center gap-1">
            <Link
              to={"/dashboard"}
              className="flex items-center gap-1 cursor-pointer text-gray-500 hover:text-black"
            >
              <AiFillHome className="text-sm " />
              <h1 className=" text-sm capitalize">dashboard</h1>
            </Link>
            <MdChevronRight className="text-gray-500" />
            <Link
              to={"../"}
              className="text-sm capitalize cursor-pointer text-gray-500 hover:text-black"
            >
              user management
            </Link>
            <MdChevronRight className="text-gray-500" />
            <h1 className="text-sm capitalize text-black">edit user</h1>
          </div>
        </div>

        {/* form create user */}
        <form
          action=""
          className="p-4 mt-3 bg-white rounded-sm shadow-sm shadow-slate-400 flex flex-col gap-3 border border-t-2 border-t-green-500"
        >
          {/* address */}
          <div className="flex flex-col gap-2 mb-2 lg:flex lg:flex-row lg:gap-4 lg:mb-4 lg:mt-2">
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
                  className="absolute top-[43px] right-3 -translate-y-2 cursor-pointer"
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
          <div className="flex flex-col gap-2 lg:flex lg:flex-row lg:gap-4 lg:mt-2">
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
                <Select
                  isMulti
                  options={options}
                  value={selectedOptions}
                  onChange={(selected) =>
                    setSelectedOptions(selected as OptionType[])
                  }
                  placeholder="Select a role..."
                  className="text-sm"
                />
              </div>

              {/* Job */}
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="job"
                  className="font-semibold font-montserrat text-sm"
                >
                  Job
                </label>
                <div className="relative">
                  <select
                    name="job"
                    id="job"
                    className={`appearance-none text-sm rounded-sm px-3 py-[10px] border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100 
      ${selectedJob === "" ? "text-gray-400" : "text-black"} w-full`}
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

                  <FaAngleDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none hover:text-slate-800" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-3 relative">
              {/* Department */}
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="department"
                  className="font-semibold font-montserrat text-sm"
                >
                  Department
                </label>
                <select
                  name="department"
                  id="department"
                  className={`appearance-none text-sm rounded-sm px-3 py-[10px] border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100 
                      ${
                        selectedDepartment === ""
                          ? "text-gray-400"
                          : "text-black"
                      } w-full`}
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

                <FaAngleDown className="absolute right-3 top-11 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none hover:text-slate-800" />
              </div>
              {/* Superior */}
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="superior"
                  className="font-semibold font-montserrat text-sm relative"
                >
                  Superior
                </label>
                <select
                  name="superior"
                  id="superior"
                  className={`text-sm appearance-none rounded-sm px-3 py-[10px] border border-slate-300 shadow-sm shadow-slate-200 focus:shadow-md focus:shadow-green-300 focus:outline-none focus:ring-1 focus:ring-green-100 
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
                <FaAngleDown className="absolute right-3 top-11 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none hover:text-slate-800" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* submit */}
            <button
              type="button"
              className="capitalize font-montserrat font-semibold text-sm p-[10px] rounded-sm shadow-md bg-white my-4 w-1/2 border-2 text-green-600 border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-300 duration-150 ease-linear"
            >
              save changes
            </button>
          </div>
        </form>
      </div>
      <FooterComponent />
    </div>
  );
};

export default EditUserComponent;
