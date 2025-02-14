import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }} className="bg-gray-50">
      <SideNav />
      <Outlet />
    </Box>
  );
};

export default Layout;
