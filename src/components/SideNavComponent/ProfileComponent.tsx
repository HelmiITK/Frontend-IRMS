import { FiUser } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcherComponent from "./LanguageSwitcherComponent";

interface ProfileComponentProps {
  language: string;
  handleLanguageChange: (lang: string) => void;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({
  language,
  handleLanguageChange,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" m-1">
        <FaUserCircle className="w-8 h-8 text-white " />
      </div>
      <ul
        tabIndex={0}
        className="relative dropdown-content menu bg-base-100 rounded-md z-[1] shadow flex flex-col justify-center items-center gap-1"
      >
        <h1 className="text-white text-sm mb-1 text-center bg-black rounded-md py-1 w-full">
          Admin
        </h1>
        <div className="z-50 block lg:hidden">
          <LanguageSwitcherComponent
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
        </div>
        <div className="flex flex-col -gap-2">
          <li>
            <Link
              to={"profile_user"}
              className="flex flex-row gap-2 items-center px-2"
            >
              <FiUser className="w-6 h-6 text-black" />
              <p className="text-black text-sm">Profile</p>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex flex-row gap-2 items-center px-2"
            >
              <MdLogout className="w-6 h-6 text-red-600 " />
              <p className="text-red-600 text-sm">Logout</p>
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default ProfileComponent;
