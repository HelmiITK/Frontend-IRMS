import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";

const DashboardPage = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 className="mt-14">DashboardPage</h1>
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
