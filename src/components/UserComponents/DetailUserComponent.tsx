import FooterComponent from "../Footer/FooterComponent";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const DetailUserComponent: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-10">
      <div className="flex flex-col w-full">
        {/* header top */}
        <div>
          <h1 className="font-montserrat text-xl capitalize mt-2 lg:mt-3 mb-2">
            detail user
          </h1>
          <Divider className="w-full h-[0.5px] bg-slate-200 " />
        </div>
        {/* button back */}
        <div className="flex justify-start">
          <Link
            to={"../"}
            className="flex items-center gap-1 mt-2 hover:underline hover:-translate-x-1 duration-150"
          >
            <IoIosArrowRoundBack className="w-6 h-6" />
            <h2 className="italic text-sm">Back</h2>
          </Link>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default DetailUserComponent;
