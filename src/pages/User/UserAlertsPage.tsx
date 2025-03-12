import HeaderComponent from "../../components/HeaderComponent";
import iconALert from "../../assets/iconAlertUser.png";
import ViewButtonComponent from "../../components/ViewButtonComponent";
import { GrDocumentTime } from "react-icons/gr";
import DeleteButtonComponent from "../../components/DeleteButtonComponent";
import Swal from "sweetalert2";
import { useState } from "react";

interface Data {
  id: number;
  no_report: string;
  pelapor: string;
  department: string;
  class_incident: string;
  time: string;
}

const dummyData: Data[] = [
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

const UserAlertsPage: React.FC = () => {
  const [data, setData] = useState<Data[]>(dummyData);

  // Fungsi hapus row user with SweetAlert2
  const handleDeleteAlert = (id: number) => {
    const report = data.find((item) => item.id === id);

    Swal.fire({
      title: "Are you sure?",
      html: `You won't be able to revert this!<br><strong>Report Number:</strong>${report?.no_report}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      position: "center", // Menentukan posisi di atas
      toast: false, // Menghindari penggunaan toast untuk memastikan SweetAlert muncul sebagai pop-up biasa
      didOpen: () => {
        // Mengakses container SweetAlert dan menambahkan z-index
        const swalModal = document.querySelector(
          ".swal2-container"
        ) as HTMLElement;
        if (swalModal) {
          swalModal.style.zIndex = "9999"; // Pastikan nilai z-index cukup tinggi
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          position: "center", // Tetap posisi di atas setelah penghapusan
          didOpen: () => {
            const swalModal = document.querySelector(
              ".swal2-container"
            ) as HTMLElement;
            if (swalModal) {
              swalModal.style.zIndex = "9999";
            }
          },
        });

        // Hapus user dari daftar
        console.log(`Hapus user dengan ID: ${id}`);
        setData((prevUsers) => prevUsers.filter((item) => item.id !== id));
      }
    });
  };
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
              {data.length} data
            </h2>
          </div>
        </div>

        {/* list alert */}
        <div className=" w-full flex flex-row">
          <div className="w-full lg:grid lg:grid-rows-1 lg:space-y-10 ">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-col gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center"
              >
                {/* date time */}
                <div className=" flex items-center gap-2">
                  <GrDocumentTime className="text-xl text-black" />
                  <div className=" whitespace-nowrap text-gray-500 tracking-wide text-xs lg:text-sm">
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
                    {/* action */}
                    <div className="flex flex-col gap-1 items-center">
                      <ViewButtonComponent
                        title="detail"
                        link="/dashboard/incident_report/detail_incident_report"
                      />
                      <DeleteButtonComponent
                        title="delete"
                        handleDelete={handleDeleteAlert}
                        itemList={item.id}
                      />
                    </div>
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
