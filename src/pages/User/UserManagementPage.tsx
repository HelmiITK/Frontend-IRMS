import { useState } from "react";
import Swal from "sweetalert2";
import FilterComponent from "../../components/UserManagement/FilterComponent";
import HeaderTableComponent from "../../components/UserManagement/Table/HeaderTableComponent";
import DataFieldTableComponent from "../../components/UserManagement/Table/DataFieldTableComponent";
import PaginationTableComponent from "../../components/UserManagement/Table/PaginationTableComponent";
import { useSearchParams } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent";

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

const userList: User[] = [
  {
    id: 24,
    npk: "11211043",
    name: "Helmi",
    email: "helmi123@gmail.com",
    roles: "Superintendent",
    job: "Manager",
    department: "Information technology",
    superior: "Daniel",
  },
  {
    id: 44,
    npk: "11211043",
    name: "Asep",
    email: "asep@gmail.com",
    roles: "independent",
    job: "IT Support",
    department: "Information technology",
    superior: "Daniel",
  },
  {
    id: 12,
    npk: "11211047",
    name: "Heri",
    email: "heri@gmail.com",
    roles: "Messanger",
    job: "External Relation Specialist",
    department: "Logistic",
    superior: "Yessi",
  },
  {
    id: 99,
    npk: "11211066",
    name: "Kurniawam",
    email: "kurniawan@gmail.com",
    roles: "CSR",
    job: "Sales",
    department: "General Afiar",
    superior: "Nina",
  },
  {
    id: 87,
    npk: "11211033",
    name: "Marasep",
    email: "mara@gmail.com",
    roles: "Office Boy",
    job: "Senior OB",
    department: "Office",
    superior: "Rasyid",
  },
  {
    id: 76,
    npk: "11211032",
    name: "Erine",
    email: "erni@gmail.com",
    roles: "Brand Ambassador",
    job: "Streamer",
    department: "Esports",
    superior: "Lasti",
  },
];

const UserManagementPage: React.FC = () => {
  // NOTE: perhatikan posisi state pastikan berada di atas fungsi agar dideklarasi terlebih dahulu
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const [sortField, setSortField] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const [userListField, setUserListField] = useState<User[]>(userList);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchParams(query ? { search: query } : {});
  };

  // filter data berdasarkan query pengguna
  const filteredUsers = userListField.filter(
    (user) =>
      user.id.toString().includes(searchQuery) ||
      user.npk.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.roles.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.job.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.superior.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const rowsPerPage = 4;
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const safeCurrentPage = Math.min(currentPage, totalPages || 1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
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
    setSelectedUsers(userListField.map((user) => user.id));
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

        setUserListField((prevList) =>
          prevList.filter((user) => !selectedUsers.includes(user.id))
        );
        setSelectedUsers([]); // Kosongkan pilihan setelah menghapus
      }
    });
  };

  // Fungsi hapus row user with SweetAlert2
  const handleDeleteRowUser = (id: number) => {
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
        console.log(`Hapus user dengan ID: ${id}`);
        setUserListField((prevUsers) =>
          prevUsers.filter((user) => user.id !== id)
        );
      }
    });
  };

  return (
    <>
      {/* header */}
      <HeaderComponent
        title="user management"
        routeOne="dashboard"
        routeTwo="user management"
      />

      {/* filtering */}
      <FilterComponent
        handleSelectedAll={handleSelectedAll}
        selectedUsers={selectedUsers}
        userListField={userListField}
        handleDeselectedAll={handleDeselectedAll}
        handleDeleteSelected={handleDeleteSelected}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />

      {/* table user management by daisyUI */}
      <div className="w-full shadow-lg rounded-lg mb-8 mt-2 pt-2 border">
        <table className="table table-zebra table-xs">
          {/* head */}
          <HeaderTableComponent
            handleSort={handleSort}
            sortField={sortField}
            sortOrder={sortOrder}
          />

          {/* data field */}
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <DataFieldTableComponent
                  key={user.id}
                  userListField={[user]}
                  selectedUsers={selectedUsers}
                  setSelectedUsers={setSelectedUsers}
                  handleDeleteRowUser={handleDeleteRowUser}
                />
              ))
            ) : (
              <tr>
                <td colSpan={15} className="text-gray-500 text-center py-4">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* pagination */}
        <div className="p-4">
          <PaginationTableComponent
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default UserManagementPage;
