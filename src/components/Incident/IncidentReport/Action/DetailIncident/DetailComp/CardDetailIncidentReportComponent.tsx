import {
  FaCalendarAlt,
  FaUser,
  FaBuilding,
  FaTools,
  FaTags,
  FaClipboardCheck,
  FaMapMarkerAlt,
  FaLocationArrow,
  FaCheckCircle,
  FaFileAlt,
  FaUserCheck,
} from "react-icons/fa";

interface Incident {
  no_report: number;
  data_incident: string;
  reporter: string;
  origin_department: string;
  basic_cause: string;
  category_incident: string;
  classification_incident: string;
  area: string;
  loaction: string;
  itcr: string;
  description: string;
  photos: string;
  reviewed_by: string;
}

interface CardDetailIncidentReportComponentProps {
  incident: Incident;
}

const CardDetailIncidentReportComponent: React.FC<
  CardDetailIncidentReportComponentProps
> = ({ incident }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-3">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Detail Incident #{incident.no_report}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DetailItem
          icon={<FaCalendarAlt />}
          label="Tanggal"
          value={incident.data_incident}
        />
        <DetailItem
          icon={<FaUser />}
          label="Pelapor"
          value={incident.reporter}
        />
        <DetailItem
          icon={<FaBuilding />}
          label="Departemen"
          value={incident.origin_department}
        />
        <DetailItem
          icon={<FaTools />}
          label="Penyebab Utama"
          value={incident.basic_cause}
        />
        <DetailItem
          icon={<FaTags />}
          label="Kategori"
          value={incident.category_incident}
        />
        <DetailItem
          icon={<FaClipboardCheck />}
          label="Klasifikasi"
          value={incident.classification_incident}
        />
        <DetailItem
          icon={<FaMapMarkerAlt />}
          label="Area"
          value={incident.area}
        />
        <DetailItem
          icon={<FaLocationArrow />}
          label="Lokasi"
          value={incident.loaction}
        />
        <DetailItem
          icon={<FaCheckCircle />}
          label="ITCR"
          value={incident.itcr}
        />
        <DetailItem
          icon={<FaFileAlt />}
          label="Deskripsi"
          value={incident.description}
        />
        <DetailItem
          icon={<FaUserCheck />}
          label="Ditinjau oleh"
          value={incident.reviewed_by}
        />
        <div className="col-span-2">
          <img
            src={incident.photos}
            alt="Incident"
            className="w-full rounded-md shadow"
          />
        </div>
      </div>
    </div>
  );
};

// Komponen untuk setiap item detail
const DetailItem: React.FC<{
  icon: JSX.Element;
  label: string;
  value: string | number;
}> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md">
    <div className="text-gray-600 text-lg">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-gray-800 font-semibold">{value}</p>
    </div>
  </div>
);

export default CardDetailIncidentReportComponent;
