import FooterComponent from "../../../../Footer/FooterComponent";
import HeaderDetailIncidentReportComponent from "./DetailComp/HeaderDetailIncidentReportComponent";
import contohImage from "../../../../../assets/BgDashboard.png";
import CardDetailIncidentReportComponent from "./DetailComp/CardDetailIncidentReportComponent";

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
    <div className="flex flex-col h-full justify-between gap-10">
      <div className="flex flex-col w-full">
        {/* header top */}
        <HeaderDetailIncidentReportComponent />
        {/* Card Detail User */}
        <CardDetailIncidentReportComponent incident={incident} />
      </div>
      <FooterComponent />
    </div>
  );
};

export default DetailIncidentReportComponent;
