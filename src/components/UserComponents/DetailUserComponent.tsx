import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";
import FooterComponent from "../Footer/FooterComponent";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const DetailUserComponent = () => {
  return (
    <Box sx={{ display: "flex" }} className="bg-gray-100 h-screen">
      <SideNav />
      <div className="flex flex-col w-full">
        <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
          {/* header top */}
          <div>
            <h1 className="font-montserrat text-xl capitalize mt-14 mb-2">
              detail user
            </h1>
            <Divider className="w-full h-[0.5px] bg-slate-200 " />
          </div>
          {/* button back */}
          <div className="flex justify-start">
            <Link
              to={"/user_management"}
              className="flex items-center gap-1 mt-2 hover:underline hover:-translate-x-1 duration-150"
            >
              <IoIosArrowRoundBack className="w-6 h-6" />
              <h2 className="italic text-sm">Back</h2>
            </Link>
          </div>
        </Box>
        <FooterComponent />
      </div>
    </Box>
  );
};

export default DetailUserComponent;
