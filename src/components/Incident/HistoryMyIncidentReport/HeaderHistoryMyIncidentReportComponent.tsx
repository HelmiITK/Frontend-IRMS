import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const HeaderHistoryMyIncidentReportComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h1 className="mt-2 lg:mt-3 text-xl font-montserrat capitalize">
        history my incident report
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

        <h2 className="text-sm capitalize text-black">
          history my incident report
        </h2>
      </div>
    </div>
  );
};

export default HeaderHistoryMyIncidentReportComponent;
