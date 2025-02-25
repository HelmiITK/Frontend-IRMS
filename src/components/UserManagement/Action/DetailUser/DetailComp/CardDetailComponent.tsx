import {
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";

interface User {
  id: number;
  npk: string;
  name: string;
  email: string;
  roles: string;
  job: string;
  department: string;
  superior: string;
}

interface CardDetailComponentProps {
  user: User;
}

const CardDetailComponent: React.FC<CardDetailComponentProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-3">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DetailItem icon={<FaUser />} label="NPK" value={user.npk} />
        <DetailItem icon={<FaUser />} label="Name" value={user.name} />
        <DetailItem icon={<FaEnvelope />} label="Email" value={user.email} />
        <DetailItem icon={<FaBriefcase />} label="Roles" value={user.roles} />
        <DetailItem icon={<FaBuilding />} label="Job" value={user.job} />
        <DetailItem
          icon={<FaBuilding />}
          label="Department"
          value={user.department}
        />
        <DetailItem
          icon={<FaUserTie />}
          label="Superior"
          value={user.superior}
        />
      </div>
    </div>
  );
};

// Komponen untuk setiap item detail
const DetailItem: React.FC<{
  icon: JSX.Element;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-md">
    <div className="text-gray-600 text-lg">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-gray-800 font-semibold">{value}</p>
    </div>
  </div>
);

export default CardDetailComponent;
