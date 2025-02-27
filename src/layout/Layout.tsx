import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";

interface LayoutProps {
  handleLanguageChange: (lang: string) => void;
  t: (key: string) => string;
}

const Layout: React.FC<LayoutProps> = ({ handleLanguageChange, t }) => {
  return (
    <Box
      sx={{
        display: "flex",
        // backgroundColor: "#f9fafb",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <SideNav handleLanguageChange={handleLanguageChange} t={t} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { xs: "10px", md: "15px" },
          transition: "margin-left 0.3s ease-in-out",
          marginLeft: { xs: "0px" },
          marginTop: "50px",
          width: "100%",
          backgroundColor: "#f9fafb",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
