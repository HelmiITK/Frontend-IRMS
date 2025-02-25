import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderHistoryMyIncidentReportComponent from "../../components/Incident/HistoryMyIncidentReport/HeaderHistoryMyIncidentReportComponent";

const HistoryMyIncidentReportPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between bg-gray-50">
      {/* header */}
      <HeaderHistoryMyIncidentReportComponent />

      {/* filter */}
      {/* table user management by daisyUI */}
      <FooterComponent />
    </div>
  );
};

export default HistoryMyIncidentReportPage;
