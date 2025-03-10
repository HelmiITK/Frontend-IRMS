import HeaderComponent from "../../components/HeaderComponent";
import iconALert from "../../assets/iconAlertUser.png";

const UserAlertsPage: React.FC = () => {
  return (
    <>
      {/* header */}
      <HeaderComponent
        title="user alert"
        routeOne="dashboard"
        routeTwo="user alert"
      />

      <div className="flex flex-col items-center justify-center">
        {/* card notif */}
        <div className="relative flex flex-col gap-2 bg-white shadow-lg shadow-gray-200 drop-shadow-md rounded-2xl px-6 pb-6 pt-20 justify-center items-center">
          <img
            src={iconALert}
            alt="icon user alert"
            className="w-32 p-3 -top-16 absolute bg-white rounded-full shadow-lg shadow-gray-200 "
          />
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="capitalize text-2xl font-semibold tracking-wide">
                user alerts
              </h1>
              <p className="text-sm text-gray-400 ">
                You have 4 new alert into will be approved or rejected
              </p>
            </div>
            <h2 className="capitalize text-2xl rounded-lg bg-yellow-400 shadow-md shadow-yellow-100 text-white py-2 px-4 w-fit text-center font-semibold">
              4 data
            </h2>
          </div>
        </div>

        {/* card list alert */}
        
      </div>
    </>
  );
};

export default UserAlertsPage;
