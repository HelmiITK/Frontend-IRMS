import CorporateValueComponent from "../../components/DashboardComponents/CorporateValueComponent";
import InformationReportComponent from "../../components/DashboardComponents/InformationReportComponent";
import PieChartCategoryIncidentComponent from "../../components/DashboardComponents/PieChartCategoryIncidentComponent";
import TableMatrixIncidentReportComponent from "../../components/DashboardComponents/TableMatrixIncidentReportComponent";

interface DashboardPageProps {
  t: (key: string) => string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ t }) => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div className="w-full mb-4 lg:mt-2">
        {/* header */}
        <h1 className=" text-base font-montserrat font-medium tracking-wider">
          Dashboard
        </h1>
        <div className="w-full h-[1px] bg-slate-300 my-2 mb-4"></div>

        {/* List grid information report*/}
        <InformationReportComponent t={t} />
        <div className="w-full h-[1px] bg-slate-200 mt-4 mb-4"></div>

        {/* Corporate Value */}
        <CorporateValueComponent t={t} />
        <div className="w-full h-[1px] bg-slate-200 mt-4 mb-4"></div>

        {/* Table matrix incident report and pie chart */}
        <div className="max-w-xs lg:max-w-full">
          <TableMatrixIncidentReportComponent t={t} />
          <div className="w-full h-[1px] bg-slate-200 mt-4 mb-2"></div>
          <PieChartCategoryIncidentComponent t={t} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
