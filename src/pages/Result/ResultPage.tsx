import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";

const ResultPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1 className="mt-14">Result</h1>
      </Box>
    </Box>
  );
};

export default ResultPage;
