import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { xs: "10px", md: "15px" },
          transition: "margin-left 0.3s ease-in-out",
          marginLeft: { xs: "0px" },
          marginTop: "50px",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
