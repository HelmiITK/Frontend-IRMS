import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import FooterComponent from "../components/Footer/FooterComponent";

interface LayoutProps {
  handleLanguageChange: (lang: string) => void;
  t: (key: string) => string;
}

const Layout: React.FC<LayoutProps> = ({ handleLanguageChange, t }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav handleLanguageChange={handleLanguageChange} t={t} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          width: "screen",
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1, // Memastikan Outlet memenuhi ruang yang ada
            padding: { xs: "10px", md: "15px" },
            transition: "margin-left 0.3s ease-in-out",
            marginLeft: { xs: "0px" },
            marginTop: "60px",
            width: "100%",
          }}
        >
          <Outlet />
        </Box>
        <Box
          component="footer"
          sx={{
            padding: { xs: "10px", md: "0px" },
            transition: "margin-left 0.3s ease-in-out",
            width: "100%",
          }}
        >
          <FooterComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
