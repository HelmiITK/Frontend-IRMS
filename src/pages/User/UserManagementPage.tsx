import { Divider } from "@mui/material";
import { useState } from "react";
import FooterComponent from "../../components/Footer/FooterComponent";
import Swal from "sweetalert2";
import FilterComponent from "../../components/UserManagement/FilterComponent";
import HeaderTableComponent from "../../components/UserManagement/Table/HeaderTableComponent";
import DataFieldTableComponent from "../../components/UserManagement/Table/DataFieldTableComponent";
import PaginationTableComponent from "../../components/UserManagement/Table/PaginationTableComponent";
import { MdChevronRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

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
  const [sortField, setSortField] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const [userListField, setUserListField] = useState<User[]>(userList);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const totalPages = Math.ceil(userListField.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentUsers = userListField.slice(indexOfFirstRow, indexOfLastRow);

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
    console.log("gua diklik - delete selected");
    setUserListField((prevList) =>
      prevList.filter((user) => !selectedUsers.includes(user.id))
    );
    setSelectedUsers([]); // Kosongkan pilihan setelah menghapus
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
    <div className="flex flex-col w-full h-full justify-between bg-gray-50">
      <div>
        {/* header */}
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="mt-2 lg:mt-3 text-xl font-montserrat">User List</h1>
          <div className="flex items-center gap-1">
            <Link
              to={"/dashboard"}
              className="flex items-center gap-1 cursor-pointer text-gray-500 hover:text-black"
            >
              <AiFillHome className="text-sm " />
              <h1 className=" text-sm capitalize">dashboard</h1>
            </Link>

            <MdChevronRight className="text-gray-500" />

            <h2 className="text-sm capitalize text-black">user management</h2>
          </div>
        </div>

        <Divider className="w-full h-[0.5px] bg-slate-200" />

        {/* filtering */}
        <FilterComponent
          handleSelectedAll={handleSelectedAll}
          selectedUsers={selectedUsers}
          userListField={userListField}
          handleDeselectedAll={handleDeselectedAll}
          handleDeleteSelected={handleDeleteSelected}
        />

        <Divider className="w-full h-[0.5px] bg-slate-200 " />

        {/* table user management by daisyUI */}
        <div className="overflow-x-auto w-full mt-2 lg:mt-4 mb-8 ">
          <table className="table table-zebra">
            {/* head */}
            <HeaderTableComponent
              handleSort={handleSort}
              sortField={sortField}
              sortOrder={sortOrder}
            />

            {/* data field */}
            <DataFieldTableComponent
              userListField={currentUsers}
              selectedUsers={selectedUsers}
              setSelectedUsers={setSelectedUsers}
              handleDeleteRowUser={handleDeleteRowUser}
            />

            {/* pagination */}
          </table>
          <PaginationTableComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default UserManagementPage;
