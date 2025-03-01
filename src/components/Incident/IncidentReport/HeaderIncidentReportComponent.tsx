import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const HeaderIncidentReportComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <h1 className="mt-2 lg:mt-3 text-xl font-montserrat capitalize">
        incident report list
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

        <h2 className="text-sm capitalize text-black">incident report</h2>
      </div>
    </div>
  );
};

export default HeaderIncidentReportComponent;
