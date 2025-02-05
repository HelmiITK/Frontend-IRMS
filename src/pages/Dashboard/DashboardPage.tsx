import CorporateValueComponent from "../../components/DashboardComponents/CorporateValueComponent";
import InformationReportComponent from "../../components/DashboardComponents/InformationReportComponent";
import PieChartCategoryIncidentComponent from "../../components/DashboardComponents/PieChartCategoryIncidentComponent";
import TableMatrixIncidentReportComponent from "../../components/DashboardComponents/TableMatrixIncidentReportComponent";
import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";

const DashboardPage = () => {
  return (
    <>
      <Box sx={{ display: "flex" }} className="bg-gray-50">
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>
            {/* header */}
            <h1 className="mt-14 text-base font-montserrat font-medium tracking-wider">
              Dashboard
            </h1>
            <div className="w-full h-[1px] bg-slate-300 my-2 mb-4"></div>

            {/* List grid information report*/}
            <InformationReportComponent />
            <div className="w-full h-[1px] bg-slate-200 mt-4 mb-4"></div>

            {/* Corporate Value */}
            <CorporateValueComponent />
            <div className="w-full h-[1px] bg-slate-200 mt-4 mb-4"></div>

            {/* Table matrix incident report */}
            <TableMatrixIncidentReportComponent />
            <div className="w-full h-[1px] bg-slate-200 mt-4 mb-2"></div>

            {/* Pie chart kategory incident*/}
            <PieChartCategoryIncidentComponent />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
