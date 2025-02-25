import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderUserAlert from "../../components/UserAlert/HeaderUserAlert";

const UserAlertsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between bg-gray-50">
      {/* header */}
      <HeaderUserAlert />

      {/* filter */}
      {/* table user management by daisyUI */}
      <FooterComponent />
    </div>
  );
};

export default UserAlertsPage;
