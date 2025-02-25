import HeaderMyIncidentReportComponent from "../../components/Incident/MyIncidentReport/HeaderMyIncidentReportComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

const MyIncidentReportPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between bg-gray-50">
      {/* header */}
      <HeaderMyIncidentReportComponent />

      {/* filter */}
      {/* table user management by daisyUI */}
      <FooterComponent />
    </div>
  );
};

export default MyIncidentReportPage;
