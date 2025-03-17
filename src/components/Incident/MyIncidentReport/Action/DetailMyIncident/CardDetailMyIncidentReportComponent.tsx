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
import PhotoComponent from "../../../../PhotoComponent";
import { IoTimerSharp } from "react-icons/io5"; // in progress
// import { IoCheckmarkCircleSharp } from "react-icons/io5"; // approved
// import { IoMdCloseCircle } from "react-icons/io"; // rejected
// import { BsClipboardCheckFill } from "react-icons/bs"; // resolved

interface Incident {
  id: { id: string | undefined };
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

interface CardDetailMyIncidentReportComponentProps {
  incident: Incident;
}

const CardDetailMyIncidentReportComponent: React.FC<
  CardDetailMyIncidentReportComponentProps
> = ({ incident }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-1">
      <div className="flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          My Detail Incident #{incident.no_report}
        </h2>
        <div className="flex flex-row items-center gap-1 mt-2">
          <h2 className="text-sm text-gray-500 font-montserrat ">status :</h2>
          <div className="flex items-center gap-1 py-1 px-3 text-white rounded-md text-xs lg:text-base font-semibold  tracking-wide capitalize whitespace-nowrap bg-yellow-500">
            <IoTimerSharp className="text-xl text-yellow-700" />
            <p>In Progress</p>
          </div>
          {/* <div className="flex items-center gap-1 py-1 px-3 text-white rounded-md text-xs lg:text-base font-semibold  tracking-wide capitalize whitespace-nowrap bg-green-500">
            <IoCheckmarkCircleSharp className="text-xl text-green-700" />
            <p>Approved</p>
          </div>
          <div className="flex items-center gap-1 py-1 px-3 text-white rounded-md text-xs lg:text-base font-semibold  tracking-wide capitalize whitespace-nowrap bg-red-500">
            <IoMdCloseCircle className="text-xl text-red-700" />
            <p>Rejected</p>
          </div>
          <div className="flex items-center gap-1 py-1 px-3 text-white rounded-md text-xs lg:text-base font-semibold  tracking-wide capitalize whitespace-nowrap bg-blue-500">
            <BsClipboardCheckFill className="text-xl text-blue-700" />
            <p>Resolved</p>
          </div> */}
        </div>
      </div>
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
          <PhotoComponent
            openImage={isModalOpen}
            setOpenImage={setIsModalOpen}
            photo={incident.photos}
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
      <p className="text-gray-800 font-semibold text-sm">{value}</p>
    </div>
  </div>
);

export default CardDetailMyIncidentReportComponent;
