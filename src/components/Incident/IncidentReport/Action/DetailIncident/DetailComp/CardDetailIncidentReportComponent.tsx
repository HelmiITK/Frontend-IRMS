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
import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-1">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Detail Incident #{incident.no_report}
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
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
            className="w-full rounded-md shadow cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9998]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-4 rounded-lg shadow-lg relative"
          >
            <button
              className="absolute top-2 right-2 text-red-600 hover:text-gray-700 bg-white rounded-md lg:p-2"
              onClick={() => setIsModalOpen(false)}
            >
              <IoClose size={23} />
            </button>
            <img
              src={incident.photos}
              alt="Incident"
              className="max-w-full max-h-screen rounded"
            />
          </motion.div>
        </div>
      )}
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
