import HeaderComponent from "../../components/HeaderComponent";
import iconALert from "../../assets/iconAlertUser.png";
import ViewButtonComponent from "../../components/ViewButtonComponent";
import { GrDocumentTime } from "react-icons/gr";

const UserAlertsPage: React.FC = () => {
  const dummyData = [
    {
      id: 1,
      no_report: "li200-567-700",
      pelapor: "Helmi",
      department: "Information Technology",
      class_incident: "Minor",
      time: "12 Maret 2025 - 16.30 WITA",
    },
    {
      id: 2,
      no_report: "li200-568-701",
      pelapor: "Nurliyan",
      department: "Human Resources",
      class_incident: "Major",
      time: "11 Maret 2025 - 12.30 WITA",
    },
    {
      id: 3,
      no_report: "li200-569-702",
      pelapor: "Ahmad",
      department: "Finance",
      class_incident: "Critical",
      time: "28 Februari 2025 - 15.00 WITA",
    },
    {
      id: 4,
      no_report: "li200-569-703",
      pelapor: "Heri Muskianto",
      department: "Operation",
      class_incident: "Minor",
      time: "22 Juni 2025 - 10.23 WITA",
    },
  ];
  return (
    <>
      {/* header */}
      <HeaderComponent
        title="user alert"
        routeOne="dashboard"
        routeTwo="user alert"
      />

      <div className="flex flex-col items-center justify-center gap-8 mb-4">
        {/* card notif */}
        <div className="relative flex flex-col gap-2 bg-white shadow-lg shadow-gray-200 drop-shadow-md rounded-2xl px-6 pb-6 pt-12 justify-center items-center">
          <img
            src={iconALert}
            alt="icon user alert"
            className="w-24 p-3 -top-14 absolute bg-white rounded-full shadow-lg shadow-gray-200 "
          />
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="capitalize text-xl font-semibold tracking-wide">
                user alerts
              </h1>
              <p className="text-xs text-gray-400 ">
                You have 4 new alert into will be approved or rejected
              </p>
            </div>
            <h2 className="capitalize text-xl rounded-lg bg-yellow-400 shadow-md shadow-yellow-100 text-white py-2 px-4 w-fit text-center font-semibold">
              4 data
            </h2>
          </div>
        </div>

        {/* list alert */}
        <div className=" w-full flex flex-row">
          <div className="w-full lg:grid lg:grid-rows-1 lg:space-y-10 ">
            {dummyData.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-col gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center"
              >
                {/* date time */}
                <div className=" flex items-center gap-2">
                  <GrDocumentTime className="text-xl text-black" />
                  <div className=" whitespace-nowrap text-gray-500 tracking-wide text-base">
                    {item.time}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-green-400 mx-3"></div>

                {/* data */}
                <div className="w-full flex flex-row items-center">
                  {/* no Report */}
                  <div className="flex flex-row items-center bg-green-500 py-2 gap-2 whitespace-nowrap px-4">
                    <h1 className="text-xl font-semibold text-white font-montserrat">
                      #
                    </h1>
                    <h2 className="text-white font-montserrat font-medium text-sm">
                      {item.no_report}
                    </h2>
                  </div>
                  <div className="p-3  border border-green-300 w-full flex flex-row items-center gap-8">
                    {/* Pelapor */}
                    <div className="whitespace-nowrap flex flex-col gap-1">
                      <h1 className="text-gray-500 text-xs capitalize">
                        Pelapor
                      </h1>
                      <h2 className="text-sm">{item.pelapor}</h2>
                    </div>
                    {/* Departement */}
                    <div className="whitespace-nowrap flex flex-col gap-1">
                      <h1 className="text-gray-500 text-xs capitalize">
                        Departement
                      </h1>
                      <h2 className="text-sm">{item.department}</h2>
                    </div>
                    {/* class incident */}
                    <div className="whitespace-nowrap flex flex-col gap-1">
                      <h1 className="text-gray-500 text-xs capitalize">
                        Classfication Incident
                      </h1>
                      <h2 className="text-sm">{item.class_incident}</h2>
                    </div>
                    {/* detail */}
                    <ViewButtonComponent
                      title="detail"
                      link="detail_incident_report"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAlertsPage;
