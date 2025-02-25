import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderHistoryTaskIncidentReportComponent from "../../components/Task/HistoryTaskIncidentReport/HeaderHistoryTaskIncidentReportComponent";

const HistoryTaskIncidentReportPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between bg-gray-50">
      {/* header */}
      <HeaderHistoryTaskIncidentReportComponent />

      {/* filter */}
      {/* table user management by daisyUI */}
      <FooterComponent />
    </div>
  );
};

export default HistoryTaskIncidentReportPage;
