import CorporateValueComponent from "../../components/DashboardComponents/CorporateValueComponent";
import InformationReportComponent from "../../components/DashboardComponents/InformationReportComponent";
import PieChartCategoryIncidentComponent from "../../components/DashboardComponents/PieChartCategoryIncidentComponent";
import TableMatrixIncidentReportComponent from "../../components/DashboardComponents/TableMatrixIncidentReportComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import Box from "@mui/material/Box";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Box component="main" sx={{ flexGrow: 1 }} className="p-2 lg:p-6">
        <div className="mb-4">
          {/* header */}
          <h1 className="mt-16 lg:mt-14 text-base font-montserrat font-medium tracking-wider">
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
      <FooterComponent />
    </div>
  );
};

export default DashboardPage;
