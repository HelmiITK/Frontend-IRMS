import { Divider } from "@mui/material";
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
import contohImage from "../../assets/KPI_logo_2.png";

const IncidentReportPage: React.FC = () => {
  // Definisikan tipe data User
  type User = {
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
  };

  const userList: User[] = [
    {
      no_report: 24,
      data_incident: "11211043",
      reporter: "Helmi",
      origin_department: "helmi123@gmail.com",
      basic_cause: "Superintendent",
      category_incident: "Manager",
      classification_incident: "Information technology",
      area: "Daniel",
      loaction: "dwd",
      itcr: "Yes",
      description: "Ais rusak cu woilah cik",
      photos: contohImage,
      reviewed_by: "Anto",
    },
    {
      no_report: 44,
      data_incident: "11211043",
      reporter: "Asep",
      origin_department: "asep@gmail.com",
      basic_cause: "independent",
      category_incident: "IT Support",
      classification_incident: "Information technology",
      area: "Daniel",
      loaction: "dwd",
      itcr: "Yes",
      description: "Ais rusak cu woilah cik",
      photos: contohImage,
      reviewed_by: "Anto",
    },
    {
      no_report: 12,
      data_incident: "11211047",
      reporter: "Heri",
      origin_department: "heri@gmail.com",
      basic_cause: "Messanger",
      category_incident: "External Relation Specialist",
      classification_incident: "Logistic",
      area: "Yessi",
      loaction: "dwd",
      itcr: "Yes",
      description: "Ais rusak cu woilah cik",
      photos: contohImage,
      reviewed_by: "Anto",
    },
    {
      no_report: 99,
      data_incident: "11211066",
      reporter: "Kurniawam",
      origin_department: "kurniawan@gmail.com",
      basic_cause: "CSR",
      category_incident: "Sales",
      classification_incident: "General Afiar",
      area: "Nina",
      loaction: "dwd",
      itcr: "Yes",
      description: "Ais rusak cu woilah cik",
      photos: contohImage,
      reviewed_by: "Anto",
    },
    {
      no_report: 87,
      data_incident: "11211033",
      reporter: "Marasep",
      origin_department: "mara@gmail.com",
      basic_cause: "Office Boy",
      category_incident: "Senior OB",
      classification_incident: "Office",
      area: "Rasyid",
      loaction: "dwd",
      itcr: "Yes",
      description: "Ais rusak cu woilah cik",
      photos: contohImage,
      reviewed_by: "Anto",
    },
    {
      no_report: 76,
      data_incident: "11211032",
      reporter: "Erine",
      origin_department: "erni@gmail.com",
      basic_cause: "Brand Ambassador",
      category_incident: "Streamer",
      classification_incident: "Esports",
      area: "Lasti",
      loaction: "dwd",
      itcr: "Yes",
      description: "Ais rusak cu woilah cik",
      photos: contohImage,
      reviewed_by: "Anto",
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
    setSelectedUsers(userListField.map((user) => user?.no_report));
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
      prevList.filter((user) => !selectedUsers.includes(user?.no_report))
    );
    setSelectedUsers([]); // Kosongkan pilihan setelah menghapus
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
    <div className="flex flex-col w-full bg-gray-50">
      <h1 className="mt-2 lg:mt-3 text-xl mb-2 font-montserrat capitalize">
        incident report list
      </h1>
      <Divider className="w-full h-[0.5px] bg-slate-200" />

      {/* Header tools fitur */}
      <div className="py-2 flex flex-col gap-2 lg:flex lg:flex-row lg:gap-4">
        {/* left feature */}
        <div className="flex items-center gap-2 lg:flex lg:flex-row lg:gap-4">
          {/* Create user  */}
          <Link to={"add_user"}>
            <button className="capitalize text-xs lg:text-sm bg-green-500 py-1 px-2 lg:py-1 lg:px-4 rounded-sm shadow-md text-white border border-green-700 hover:scale-105 duration-150 ease-in-out hover:shadow-lg">
              add incident report
            </button>
          </Link>
          <Divider className="hidden lg:block h-8 w-[1px] bg-black" />
          {/* searching */}
          <div className="flex flex-row gap-1 items-center">
            <label htmlFor="search">
              <IoSearch className="hidden lg:block w-6 h-6 text-slate-500" />
            </label>
            <input
              type="text"
              name="search"
              id="search"
              className="px-2 py-1 text-sm placeholder:text-sm placeholder:text-slate-400 border border-slate-400 rounded-sm shadow-sm"
              placeholder="search"
            />
          </div>
          <Divider className="hidden lg:block h-8 w-[0.7px] bg-black" />
        </div>
        {/* right feature */}
        <div className="flex flex-col gap-2 items-start lg:flex lg:flex-row lg:gap-2 lg:items-center">
          {/* Middle button */}
          <div className="flex flex-row gap-2 lg:flex lg:flex-row lg:gap-2 lg:mr-2">
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
                className="px-2 py-1 text-xs w-28 lg:py-1 lg:px-3 lg:text-sm rounded-sm shadow-sm bg-zinc-500 text-white hover:scale-105 duration-150 ease-in-out hover:shadow-lg"
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

          <Divider className="hidden lg:block h-8 w-[0.7px] bg-black" />

          {/* dokumen button */}
          <div className="flex flex-row gap-2 items-center lg:ml-2">
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
      <div className="overflow-x-auto mt-2 lg:mt-4 mb-4">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-gray-50">
              {/* show dropdown */}
              <th className="flex flex-row items-center gap-1 justify-center">
                <label htmlFor="show" className="text-sm text-black">
                  Show :
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
              {/* No report */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">
                    no <br /> report
                  </p>
                  <div
                    onClick={() => handleSort("no_report")}
                    className="cursor-pointer"
                  >
                    {sortField === "no_report" ? (
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
              {/* data incident */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">
                    data <br /> incident
                  </p>
                  <div
                    onClick={() => handleSort("data_incident")}
                    className="cursor-pointer"
                  >
                    {sortField === "data_incident" ? (
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
              {/* reporter */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">reporter</p>
                  <div
                    onClick={() => handleSort("reporter")}
                    className="cursor-pointer"
                  >
                    {sortField === "reporter" ? (
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
              {/* origin department */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">
                    origin <br /> department
                  </p>
                  <div
                    onClick={() => handleSort("origin_department")}
                    className="cursor-pointer"
                  >
                    {sortField === "origin_department" ? (
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
              {/* basic cause */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">
                    basic <br /> cause
                  </p>
                  <div
                    onClick={() => handleSort("basic_cause")}
                    className="cursor-pointer"
                  >
                    {sortField === "basic_cause" ? (
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
              {/* category incident */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">
                    category <br /> incident
                  </p>
                  <div
                    onClick={() => handleSort("category_incident")}
                    className="cursor-pointer"
                  >
                    {sortField === "category_incident" ? (
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
              {/* classification incident */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">
                    classification <br /> incident
                  </p>
                  <div
                    onClick={() => handleSort("classification_incident")}
                    className="cursor-pointer"
                  >
                    {sortField === "classification_incident" ? (
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
              {/* area */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">area</p>
                  <div
                    onClick={() => handleSort("area")}
                    className="cursor-pointer"
                  >
                    {sortField === "area" ? (
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
              {/* location */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">location</p>
                  <div
                    onClick={() => handleSort("loaction")}
                    className="cursor-pointer"
                  >
                    {sortField === "loaction" ? (
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
              {/* is there a chemical release */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">
                    is there a <br /> chemical <br />
                    release?
                  </p>
                  <div
                    onClick={() => handleSort("itcr")}
                    className="cursor-pointer"
                  >
                    {sortField === "itcr" ? (
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
              {/* description */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">description</p>
                  <div
                    onClick={() => handleSort("description")}
                    className="cursor-pointer"
                  >
                    {sortField === "description" ? (
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
              {/* photos */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">photos</p>
                  <div
                    onClick={() => handleSort("photos")}
                    className="cursor-pointer"
                  >
                    {sortField === "photos" ? (
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
              {/* reviewed by */}
              <th>
                <div className="flex items-center gap-1">
                  <p className="text-black text-sm capitalize">
                    reviewed <br /> by
                  </p>
                  <div
                    onClick={() => handleSort("reviewed_by")}
                    className="cursor-pointer"
                  >
                    {sortField === "reviewed_by" ? (
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
            {userListField.length > 0 ? (
              userListField.map((itemList, index) => (
                <tr key={index}>
                  <th>
                    <label className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selectedUsers.includes(itemList?.no_report)}
                        onChange={() => {
                          if (selectedUsers.includes(itemList?.no_report)) {
                            setSelectedUsers(
                              selectedUsers.filter(
                                (id) => id !== itemList?.no_report
                              )
                            );
                          } else {
                            setSelectedUsers([
                              ...selectedUsers,
                              itemList?.no_report,
                            ]);
                          }
                        }}
                      />
                    </label>
                  </th>
                  <td className="text-sm text-black">{itemList?.no_report}</td>
                  <td className="text-sm text-black">
                    {itemList?.data_incident}
                  </td>
                  <td>{itemList?.reporter}</td>
                  <td className="text-sm text-black">
                    {itemList?.origin_department}
                  </td>
                  <td>
                    <p className="bg-orange-500 py-1 px-2 rounded-md text-white text-center text-xs font-medium font-poppins">
                      {itemList?.basic_cause}
                    </p>
                  </td>
                  <td>{itemList?.category_incident}</td>
                  <td>{itemList?.classification_incident}</td>
                  <td>{itemList?.area}</td>
                  <td>{itemList?.loaction}</td>
                  <td>{itemList?.itcr}</td>
                  <td>{itemList?.description}</td>
                  <td>
                    <img src={itemList?.photos} alt="" />
                  </td>
                  <td>{itemList?.reviewed_by}</td>
                  <td className="flex flex-col gap-[5px] justify-center">
                    <Link
                      to="detail_user"
                      type="button"
                      className="text-xs border border-blue-700 px-2 py-1 rounded-sm bg-blue-500 text-white capitalize hover:bg-blue-700 duration-150 text-center"
                    >
                      View
                    </Link>
                    <Link
                      to="edit_user"
                      type="button"
                      className="text-xs border border-sky-500 px-2 py-1 rounded-sm bg-sky-300 text-white capitalize hover:bg-sky-700 duration-150 text-center"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteRowUser(itemList?.no_report)}
                      type="button"
                      className="text-xs border border-red-700 px-2 py-1 rounded-sm bg-red-500 text-white capitalize hover:bg-red-700 duration-150"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={10}
                  className="text-center text-base text-black font-montserrat font-light py-5"
                >
                  <h1 className="italic">Data field is not found</h1>
                  <p className="text-2xl">😴</p>
                </td>
              </tr>
            )}
          </tbody>

          {/* pagination */}
          <tfoot>
            <tr className="">
              <th>Showing 0-50 of 100</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th className="">
                <div className="join flex items-center gap-2">
                  <button className="join-item bg-slate-100 px-2 py-1 hover:bg-slate-200 duration-150">
                    «
                  </button>
                  <div className="flex items-center">
                    <h1 className="join-item px-2 py-1">1</h1>
                  </div>
                  <button className="join-item bg-slate-100 px-2 py-1 hover:bg-slate-200 duration-150">
                    »
                  </button>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <FooterComponent />
    </div>
  );
};

export default IncidentReportPage;
