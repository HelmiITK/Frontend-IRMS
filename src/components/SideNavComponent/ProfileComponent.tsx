import { FiUser } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" m-1">
        <FaUserCircle className="w-8 h-8 text-white " />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-md z-[1] shadow"
      >
        <h1 className="text-white text-sm mb-1 text-center bg-black rounded-md py-1 ">Admin</h1>
        <li>
          <Link
            to={"/profile_user"}
            className="flex flex-row gap-2 items-center px-2"
          >
            <FiUser className="w-6 h-6 text-black" />
            <p className="text-black text-sm">Profile</p>
          </Link>
        </li>
        <li>
          <div className="flex flex-row gap-2 items-center px-2">
            <MdLogout className="w-6 h-6 text-red-600 " />
            <p className="text-red-600 text-sm">Logout</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileComponent;
