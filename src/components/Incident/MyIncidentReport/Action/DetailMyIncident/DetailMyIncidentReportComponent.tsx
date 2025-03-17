import contohImage from "../../../../../assets/BgDashboard.png";
import HeaderComponent from "../../../../HeaderComponent";
import { useParams } from "react-router-dom";
import CardDetailMyIncidentReportComponent from "./CardDetailMyIncidentReportComponent";

const DetailMyIncidentReportComponent: React.FC = () => {
  const { id } = useParams();

  const incident = {
    id: { id },
    no_report: 24,
    data_incident: "27-02-2025",
    reporter: "Helmi",
    origin_department: "Information Technology",
    basic_cause: "Kegagalan alat",
    category_incident: "Asset/Produksi",
    classification_incident: "Minor",
    area: "Plant",
    loaction: "Graha Parna",
    itcr: "No",
    description:
      "Sebelum kejadian saya melihat ada anomali el goat hijau berasal dari Brazil memutar-mutar si kulit bundar",
    photos: contohImage,
    reviewed_by: "Anto",
  };

  return (
    <>
      <div className="flex flex-col w-full">
        {/* header */}
        <HeaderComponent
          title="detail my incident report"
          routeOne="dashboard"
          routeTwo="my incident report"
          routeThree="detail my incident report"
        />
        {/* Card Detail User */}
        <CardDetailMyIncidentReportComponent incident={incident} />
      </div>
    </>
  );
};

export default DetailMyIncidentReportComponent;
