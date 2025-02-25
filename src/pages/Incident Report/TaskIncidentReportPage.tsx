import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderTaskIncidentReportComponent from "../../components/Task/TaskIncidentReport/HeaderTaskIncidentReportComponent";

const TaskIncidentReportPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between bg-gray-50">
      {/* header */}
      <HeaderTaskIncidentReportComponent />

      {/* filter */}
      {/* table user management by daisyUI */}
      <FooterComponent />
    </div>
  );
};

export default TaskIncidentReportPage;
