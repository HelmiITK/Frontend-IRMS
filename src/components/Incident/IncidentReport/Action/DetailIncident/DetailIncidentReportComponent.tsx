import contohImage from "../../../../../assets/BgDashboard.png";
import CardDetailIncidentReportComponent from "./DetailComp/CardDetailIncidentReportComponent";
import HeaderComponent from "../../../../HeaderComponent";

const DetailIncidentReportComponent: React.FC = () => {
  const incident = {
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
          title="detail incident report"
          routeOne="dashboard"
          routeTwo="incident report"
          routeThree="detail incident report"
        />
        {/* Card Detail User */}
        <CardDetailIncidentReportComponent incident={incident} />
      </div>
    </>
  );
};

export default DetailIncidentReportComponent;
