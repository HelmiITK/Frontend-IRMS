import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";

const TaskIncidentReportPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1 className="mt-14">Task Incident Report</h1>
      </Box>
    </Box>
  );
};

export default TaskIncidentReportPage;
