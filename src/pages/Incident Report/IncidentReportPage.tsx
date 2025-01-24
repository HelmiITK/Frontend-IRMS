import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";

const IncidentReportPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1 className="mt-14">Incident Report</h1>
      </Box>
    </Box>
  );
};

export default IncidentReportPage;
