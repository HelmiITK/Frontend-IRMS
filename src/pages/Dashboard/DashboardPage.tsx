import CorporateValueComponent from "../../components/DashboardComponents/CorporateValueComponent";
import InformationReportComponent from "../../components/DashboardComponents/InformationReportComponent";
import PieChartCategoryIncidentComponent from "../../components/DashboardComponents/PieChartCategoryIncidentComponent";
import TableMatrixIncidentReportComponent from "../../components/DashboardComponents/TableMatrixIncidentReportComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

interface DashboardPageProps {
  t: (key: string) => string; 
}

const DashboardPage: React.FC<DashboardPageProps> = ({ t }) => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div className="w-full mb-4 mt-2 lg:mt-3">
        {/* header */}
        <h1 className=" text-base font-montserrat font-medium tracking-wider">
          Dashboard
        </h1>
        <div className="w-full h-[1px] bg-slate-300 my-2 mb-4"></div>

        {/* List grid information report*/}
        <InformationReportComponent t={t}/>
        <div className="w-full h-[1px] bg-slate-200 mt-4 mb-4"></div>

        {/* Corporate Value */}
        <CorporateValueComponent t={t}/>
        <div className="w-full h-[1px] bg-slate-200 mt-4 mb-4"></div>

        {/* Table matrix incident report */}
        <TableMatrixIncidentReportComponent t={t}/>
        <div className="w-full h-[1px] bg-slate-200 mt-4 mb-2"></div>

        {/* Pie chart kategory incident*/}
        <PieChartCategoryIncidentComponent t={t}/>
      </div>
      <FooterComponent />
    </div>
  );
};

export default DashboardPage;
