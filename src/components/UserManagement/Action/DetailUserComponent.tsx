import FooterComponent from "../../Footer/FooterComponent";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const DetailUserComponent: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-10">
      <div className="flex flex-col w-full">
        {/* header top */}
        <div className="flex flex-col gap-2 mb-2">
          <h1 className="mt-2 lg:mt-3 text-xl font-montserrat capitalize">
            detail user
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
            <h1 className="text-sm capitalize text-black">detail user</h1>
          </div>
        </div>

        {/* content */}
      </div>
      <FooterComponent />
    </div>
  );
};

export default DetailUserComponent;
