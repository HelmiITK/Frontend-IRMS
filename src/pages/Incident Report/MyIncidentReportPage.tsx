import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";

const MyIncidentReportPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1 className="mt-14">My Incident Report</h1>
      </Box>
    </Box>
  );
};

export default MyIncidentReportPage;
