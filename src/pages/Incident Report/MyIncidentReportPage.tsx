import { useState } from "react";
import Swal from "sweetalert2";
import contohImage from "../../assets/bgLogin.jpg";
import PaginationTableIncidentComponent from "../../components/Incident/IncidentReport/Table/PaginationTableIncidentComponent";
import { useSearchParams } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent";
import FilterMyIncidentComponent from "../../components/Incident/MyIncidentReport/FilterMyIncidentComponent";
import HeaderTableMyIncidentComponent from "../../components/Incident/MyIncidentReport/Table/HeaderTableMyIncidentReportComponent";
import DataFieldMyTableIncidentComponent from "../../components/Incident/MyIncidentReport/Table/DataFieldMyIncidentReportComponent";

// Definisikan tipe data User
interface User {
  id: number;
  no_report: number;
  data_incident: string;
  reporter: string;
  origin_department: string;
  status_incident: string;
  basic_cause: string;
  category_incident: string;
  classification_incident: string;
  area: string;
  location: string;
  itcr: string;
  description: string;
  photos: string;
  reviewed_by: string;
}

const userList: User[] = [
  {
    id: 1,
    no_report: 24,
    data_incident: "27-02-2025",
    reporter: "Helmi",
    origin_department: "Information Technology",
    status_incident: "in progress",
    basic_cause: "Kegagalan alat",
    category_incident: "Asset/Produksi",
    classification_incident: "Minor",
    area: "Plant",
    location: "Graha Parna",
    itcr: "No",
    description:
      "Sebelum kejadian saya melihat ada anomali el goat hijau berasal dari Brazil memutar-mutar si kulit bundar",
    photos: contohImage,
    reviewed_by: "Anto",
  },
  {
    id: 2,
    no_report: 25,
    data_incident: "28-02-2025",
    reporter: "Budi",
    origin_department: "Mechanical Engineering",
    status_incident: "approved",
    basic_cause: "Human Error",
    category_incident: "Keselamatan",
    classification_incident: "Moderate",
    area: "Warehouse",
    location: "Gudang A",
    itcr: "Yes",
    description:
      "Operator tidak sengaja menjatuhkan beban berat saat proses pemindahan dengan forklift.",
    photos: contohImage,
    reviewed_by: "Dewi",
  },
  {
    id: 3,
    no_report: 26,
    data_incident: "01-03-2025",
    reporter: "Siti",
    origin_department: "Electrical Engineering",
    status_incident: "rejected",
    basic_cause: "Gangguan Listrik",
    category_incident: "Keamanan",
    classification_incident: "Major",
    area: "Control Room",
    location: "Gedung Utama",
    itcr: "No",
    description:
      "Tiba-tiba terjadi lonjakan tegangan listrik yang menyebabkan pemadaman di seluruh gedung.",
    photos: contohImage,
    reviewed_by: "Rizky",
  },
  {
    id: 4,
    no_report: 27,
    data_incident: "02-03-2025",
    reporter: "Andi",
    origin_department: "Safety Department",
    status_incident: "in progress",
    basic_cause: "Kurangnya Pengawasan",
    category_incident: "Lingkungan",
    classification_incident: "Catastrophic",
    area: "Storage",
    location: "Area Penyimpanan Kimia",
    itcr: "Yes",
    description:
      "Tumpahan bahan kimia beracun terdeteksi di area penyimpanan karena kebocoran drum.",
    photos: contohImage,
    reviewed_by: "Fauzan",
  },
  {
    id: 5,
    no_report: 28,
    data_incident: "03-03-2025",
    reporter: "Rina",
    origin_department: "Production",
    status_incident: "resolved",
    basic_cause: "Kelalaian Prosedur",
    category_incident: "Kesehatan",
    classification_incident: "Minor",
    area: "Laboratorium",
    location: "Lab QC",
    itcr: "No",
    description:
      "Seorang teknisi mengalami iritasi mata karena tidak menggunakan APD saat menangani bahan uji.",
    photos: contohImage,
    reviewed_by: "Lisa",
  },
  {
    id: 6,
    no_report: 29,
    data_incident: "04-03-2025",
    reporter: "Joko",
    origin_department: "Maintenance",
    status_incident: "approved",
    basic_cause: "Kurangnya Pemeliharaan",
    category_incident: "Asset/Produksi",
    classification_incident: "Moderate",
    area: "Workshop",
    location: "Bengkel Mekanik",
    itcr: "Yes",
    description:
      "Mesin mengalami kegagalan fungsi akibat kurangnya pelumasan yang memicu panas berlebih.",
    photos: contohImage,
    reviewed_by: "Bambang",
  },
];

const MyIncidentReportPage: React.FC = () => {
  // NOTE: perhatikan posisi state pastikan berada di atas fungsi agar dideklarasi terlebih dahulu
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || ""; // ambil nilai search dari URL
  const [sortField, setSortField] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [userListField, setUserListField] = useState<User[]>(userList);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayCount, setDisplayCount] = useState<number>(
    userListField.length > 0 ? 3 : userListField.length
  );

  // handle search by params
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchParams(query ? { search: query } : {});
  };

  // filter data berdasarkan query pengguna
  const filteredUsers = userListField.filter(
    (user) =>
      user.no_report.toString().includes(searchQuery) ||
      user.reporter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.origin_department
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      user.status_incident.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.basic_cause.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.category_incident
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      user.classification_incident
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      user.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.itcr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.reviewed_by.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Hitung jumlah total halaman berdasarkan filteredUsers
  const totalPages = Math.ceil(filteredUsers.length / displayCount);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const indexOfLastRow = currentPage * displayCount;
  const indexOfFirstRow = indexOfLastRow - displayCount;
  const currentUsers = filteredUsers.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Fungsi untuk mengubah jumlah item yang ditampilkan
  const handleDisplayCountChange = (count: number) => {
    setDisplayCount(count);
    setCurrentPage(1); // Reset ke halaman pertama saat jumlah item berubah
  };

  // funsgi sorting ascending & descending
  const handleSort = (field: keyof User) => {
    const newOrder =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newOrder);

    setUserListField((prevList) =>
      [...prevList].sort((a, b) => {
        if (a[field] < b[field]) return newOrder === "asc" ? -1 : 1;
        if (a[field] > b[field]) return newOrder === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  //fungsi jalankan perintah smua checkbox
  const handleSelectedAll = () => {
    console.log("gua diklik -- selected");
    setSelectedUsers(userListField.map((user) => user.no_report));
  };

  // fungsi hapus semua checkbox
  const handleDeselectedAll = () => {
    console.log("gua diklik -- deselected");
    setSelectedUsers([]);
  };

  //fungsi hapus field yang diselect
  const handleDeleteSelected = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
        setUserListField((prevList) =>
          prevList.filter((user) => !selectedUsers.includes(user.no_report))
        );
        setSelectedUsers([]); // Kosongkan pilihan setelah menghapus
      }
    });
  };

  // Fungsi hapus row user with SweetAlert2
  const handleDeleteRowUser = (no_report: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
        console.log(`Hapus user dengan ID: ${no_report}`);
        setUserListField((prevUsers) =>
          prevUsers.filter((user) => user.no_report !== no_report)
        );
      }
    });
  };

  return (
    <>
      {/* header */}
      <HeaderComponent
        title="my incident report"
        routeOne="dashboard"
        routeTwo="my incident report"
      />

      {/* filter */}
      <FilterMyIncidentComponent
        selectedUsers={selectedUsers}
        userListField={filteredUsers}
        handleDeselectedAll={handleDeselectedAll}
        handleSelectedAll={handleSelectedAll}
        handleDeleteSelected={handleDeleteSelected}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />

      {/* table user management by daisyUI */}
      <div className="max-w-xs overflow-x-auto py-2 pl-2 lg:overflow-visible lg:max-w-full shadow-lg rounded-lg mb-8 mt-2 border">
        {/* table */}
        <table className="table table-zebra table-xs lg:table-md">
          {/* head */}
          <HeaderTableMyIncidentComponent
            handleSort={handleSort}
            sortField={sortField}
            sortOrder={sortOrder}
            handleDisplayCount={handleDisplayCountChange}
            placeholderShow={displayCount}
          />

          {/* data field */}
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <DataFieldMyTableIncidentComponent
                  key={user.no_report}
                  userListField={[user]}
                  selectedUsers={selectedUsers}
                  setSelectedUsers={setSelectedUsers}
                  handleDeleteRowUser={handleDeleteRowUser}
                />
              ))
            ) : (
              <tr>
                <td colSpan={16} className="text-gray-500 text-center py-4">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* pagination */}
        <div className="p-4">
          <PaginationTableIncidentComponent
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default MyIncidentReportPage;
