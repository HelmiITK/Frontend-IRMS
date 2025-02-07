import { Divider } from "@mui/material";
import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";
import { IoSearch } from "react-icons/io5";
import { RxDoubleArrowUp } from "react-icons/rx";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { GrDocumentCsv } from "react-icons/gr";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FooterComponent from "../../components/Footer/FooterComponent";
import Swal from "sweetalert2";

const UserManagementPage = () => {
  // Definisikan tipe data User
  type User = {
    id: number;
    npk: string;
    name: string;
    email: string;
    roles: string;
    job: string;
    department: string;
    superior: string;
  };

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

  // NOTE: perhatikan posisi state pastikan berada di atas fungsi agar dideklarasi terlebih dahulu
  const [sortField, setSortField] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [userListField, setUserListField] = useState<User[]>(userList);

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
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <div className="flex flex-col w-full">
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 className="mt-14 text-xl mb-2 font-montserrat">User List</h1>
          <Divider className="w-full h-[0.5px] bg-slate-200" />

          {/* Header tools fitur */}
          <div className="py-2 flex flex-row gap-4">
            {/* left feature */}
            <div className="flex flex-row gap-4">
              {/* Create user  */}
              <Link to={"/add_user"}>
                <button className="capitalize text-sm bg-green-500 py-1 px-4 rounded-sm shadow-md text-white border border-green-700 hover:scale-105 duration-150 ease-in-out hover:shadow-lg">
                  add user
                </button>
              </Link>
              <Divider className="h-8 w-[1px] bg-black" />
              {/* searching */}
              <div className="flex flex-row gap-1 items-center">
                <label htmlFor="search">
                  <IoSearch className="w-6 h-6 text-slate-500" />
                </label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="px-2 py-1 text-sm placeholder:text-sm placeholder:text-slate-400 border border-slate-400 rounded-sm shadow-sm"
                  placeholder="search"
                />
              </div>
              <Divider className="h-8 w-[0.7px] bg-black" />
            </div>
            {/* right feature */}
            <div className="flex flex-row gap-2 items-center">
              {/* Middle button */}
              <div className="flex flex-row gap-2 mr-2">
                {selectedUsers.length === userListField.length ? (
                  <button
                    typeof="button"
                    onClick={handleDeselectedAll}
                    className="w-28 py-1 px-3 text-sm rounded-sm shadow-sm bg-zinc-600 text-white hover:scale-105 duration-150 ease-in-out hover:shadow-lg"
                  >
                    Deselect all
                  </button>
                ) : (
                  <button
                    typeof="button"
                    onClick={handleSelectedAll}
                    className="w-28 py-1 px-3 text-sm rounded-sm shadow-sm bg-zinc-500 text-white hover:scale-105 duration-150 ease-in-out hover:shadow-lg"
                  >
                    Select all
                  </button>
                )}
                <button
                  typeof="button"
                  onClick={handleDeleteSelected}
                  disabled={selectedUsers.length === 0}
                  className={`py-1 px-3 text-sm rounded-sm shadow-sm text-white ${
                    selectedUsers.length > 0
                      ? "bg-red-600 hover:scale-105 duration-150 ease-in-out hover:shadow-lg"
                      : "bg-red-300 cursor-not-allowed"
                  }`}
                >
                  Delete selected
                </button>
              </div>

              <Divider className="h-8 w-[0.7px] bg-black" />

              {/* dokumen button */}
              <div className="flex flex-row gap-2 items-center ml-2">
                <div className="bg-slate-300 rounded-md shadow-sm flex items-center gap-[2px] p-1 hover:scale-105 duration-150 hover:shadow-md cursor-pointer">
                  <FaRegCopy className="w-6 h-6 p-[2px]" />
                  <p className="text-xs">Copy</p>
                </div>
                <div className="bg-slate-400 rounded-md shadow-sm flex items-center gap-[2px] p-1 hover:scale-105 duration-150 hover:shadow-md cursor-pointer">
                  <GrDocumentCsv className="w-6 h-6 p-[2px]" />
                  <p className="text-xs">CSV</p>
                </div>
                <div className="bg-green-300 rounded-md shadow-sm flex items-center gap-[2px] p-1 hover:scale-105 duration-150 hover:shadow-md cursor-pointer">
                  <RiFileExcel2Line className="w-6 h-6 p-[2px]" />
                  <p className="text-xs">Excel</p>
                </div>
                <div className="bg-red-400 rounded-md shadow-sm flex items-center gap-[2px] p-1 hover:scale-105 duration-150 hover:shadow-md cursor-pointer">
                  <FaRegFilePdf className="w-6 h-6 p-[2px]" />
                  <p className="text-xs">PDF</p>
                </div>
              </div>
            </div>
          </div>

          <Divider className="w-full h-[0.5px] bg-slate-200 " />

          {/* table user management by daisyUI */}
          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="bg-gray-50">
                  {/* show dropdown */}
                  <th className="flex flex-row items-center gap-1">
                    <label htmlFor="show" className="text-sm text-black">
                      Show
                    </label>
                    <select
                      name="show"
                      id="show"
                      className="p-1 rounded-sm shadow-sm border border-1 border-slate-900 w-[52px]"
                    >
                      <option value="volvo">5</option>
                      <option value="saab">10</option>
                      <option value="mercedes">50</option>
                      <option value="audi">100</option>
                    </select>
                  </th>
                  {/* ID */}
                  <th>
                    <div className="flex items-center gap-1">
                      <p className="text-black text-sm">ID</p>
                      <div
                        onClick={() => handleSort("id")}
                        className="cursor-pointer"
                      >
                        {sortField === "id" ? (
                          sortOrder === "asc" ? (
                            <RxDoubleArrowUp className="text-black w-4 h-4" />
                          ) : (
                            <RxDoubleArrowDown className="text-black w-4 h-4" />
                          )
                        ) : (
                          <div className="flex flex-row">
                            <RxDoubleArrowUp className="text-slate-500" />
                            <RxDoubleArrowDown className="text-slate-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </th>
                  {/* NPK */}
                  <th>
                    <div className="flex items-center gap-1">
                      <p className="text-black text-sm">NPK</p>
                      <div
                        onClick={() => handleSort("npk")}
                        className="cursor-pointer"
                      >
                        {sortField === "npk" ? (
                          sortOrder === "asc" ? (
                            <RxDoubleArrowUp className="text-black w-4 h-4" />
                          ) : (
                            <RxDoubleArrowDown className="text-black w-4 h-4" />
                          )
                        ) : (
                          <div className="flex flex-row">
                            <RxDoubleArrowUp className="text-slate-500" />
                            <RxDoubleArrowDown className="text-slate-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </th>
                  {/* Name */}
                  <th>
                    <div className="flex items-center gap-1">
                      <p className="text-black text-sm">Name</p>
                      <div
                        onClick={() => handleSort("name")}
                        className="cursor-pointer"
                      >
                        {sortField === "name" ? (
                          sortOrder === "asc" ? (
                            <RxDoubleArrowUp className="text-black w-4 h-4" />
                          ) : (
                            <RxDoubleArrowDown className="text-black w-4 h-4" />
                          )
                        ) : (
                          <div className="flex flex-row">
                            <RxDoubleArrowUp className="text-slate-500" />
                            <RxDoubleArrowDown className="text-slate-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </th>
                  {/* Email */}
                  <th>
                    <div className="flex items-center gap-1">
                      <p className="text-black text-sm">Email</p>
                      <div
                        onClick={() => handleSort("email")}
                        className="cursor-pointer"
                      >
                        {sortField === "email" ? (
                          sortOrder === "asc" ? (
                            <RxDoubleArrowUp className="text-black w-4 h-4" />
                          ) : (
                            <RxDoubleArrowDown className="text-black w-4 h-4" />
                          )
                        ) : (
                          <div className="flex flex-row">
                            <RxDoubleArrowUp className="text-slate-500" />
                            <RxDoubleArrowDown className="text-slate-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </th>
                  {/* Roles */}
                  <th>
                    <div className="flex items-center gap-1">
                      <p className="text-black text-sm">Roles</p>
                      <div
                        onClick={() => handleSort("roles")}
                        className="cursor-pointer"
                      >
                        {sortField === "roles" ? (
                          sortOrder === "asc" ? (
                            <RxDoubleArrowUp className="text-black w-4 h-4" />
                          ) : (
                            <RxDoubleArrowDown className="text-black w-4 h-4" />
                          )
                        ) : (
                          <div className="flex flex-row">
                            <RxDoubleArrowUp className="text-slate-500" />
                            <RxDoubleArrowDown className="text-slate-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </th>
                  {/* Job */}
                  <th>
                    <div className="flex items-center gap-1">
                      <p className="text-black text-sm">Job</p>
                      <div
                        onClick={() => handleSort("job")}
                        className="cursor-pointer"
                      >
                        {sortField === "job" ? (
                          sortOrder === "asc" ? (
                            <RxDoubleArrowUp className="text-black w-4 h-4" />
                          ) : (
                            <RxDoubleArrowDown className="text-black w-4 h-4" />
                          )
                        ) : (
                          <div className="flex flex-row">
                            <RxDoubleArrowUp className="text-slate-500" />
                            <RxDoubleArrowDown className="text-slate-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </th>
                  {/* Department */}
                  <th>
                    <div className="flex items-center gap-1">
                      <p className="text-black text-sm">Department</p>
                      <div
                        onClick={() => handleSort("department")}
                        className="cursor-pointer"
                      >
                        {sortField === "department" ? (
                          sortOrder === "asc" ? (
                            <RxDoubleArrowUp className="text-black w-4 h-4" />
                          ) : (
                            <RxDoubleArrowDown className="text-black w-4 h-4" />
                          )
                        ) : (
                          <div className="flex flex-row">
                            <RxDoubleArrowUp className="text-slate-500" />
                            <RxDoubleArrowDown className="text-slate-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </th>
                  {/* Superior */}
                  <th>
                    <div className="flex items-center gap-1">
                      <p className="text-black text-sm">Superior</p>
                      <div
                        onClick={() => handleSort("superior")}
                        className="cursor-pointer"
                      >
                        {sortField === "superior" ? (
                          sortOrder === "asc" ? (
                            <RxDoubleArrowUp className="text-black w-4 h-4" />
                          ) : (
                            <RxDoubleArrowDown className="text-black w-4 h-4" />
                          )
                        ) : (
                          <div className="flex flex-row">
                            <RxDoubleArrowUp className="text-slate-500" />
                            <RxDoubleArrowDown className="text-slate-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              {/* data field */}
              <tbody>
                {userListField.map((itemList, index) => (
                  <tr key={index}>
                    <th>
                      <label className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={selectedUsers.includes(itemList.id)}
                          onChange={() => {
                            if (selectedUsers.includes(itemList.id)) {
                              setSelectedUsers(
                                selectedUsers.filter((id) => id !== itemList.id)
                              );
                            } else {
                              setSelectedUsers([...selectedUsers, itemList.id]);
                            }
                          }}
                        />
                      </label>
                    </th>
                    <td className="text-sm text-black">{itemList.id}</td>
                    <td className="text-sm text-black">{itemList.npk}</td>
                    <td>{itemList.name}</td>
                    <td>{itemList.email}</td>
                    <td>
                      <p className="bg-orange-500 py-1 px-2 rounded-md text-white text-center">
                        {itemList.roles}
                      </p>
                    </td>
                    <td>{itemList.job}</td>
                    <td>{itemList.department}</td>
                    <td>{itemList.superior}</td>
                    <td className="flex flex-col gap-2 ">
                      <Link
                        to="/detail_user"
                        type="button"
                        className="border border-blue-700 px-2 py-1 rounded-sm bg-blue-500 text-white capitalize hover:bg-blue-700 duration-150 text-center"
                      >
                        view
                      </Link>
                      <button className="border border-sky-500 px-2 py-1 rounded-sm bg-sky-300 text-white capitalize hover:bg-sky-700 duration-150">
                        edit
                      </button>
                      <button
                        onClick={() => handleDeleteRowUser(itemList.id)}
                        type="button"
                        className="border border-red-700 px-2 py-1 rounded-sm bg-red-500 text-white capitalize hover:bg-red-700 duration-150"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <FooterComponent />
      </div>
    </Box>
  );
};

export default UserManagementPage;
