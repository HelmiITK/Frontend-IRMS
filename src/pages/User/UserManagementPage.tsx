import { Divider } from "@mui/material";
import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";
import { IoSearch } from "react-icons/io5";
import { RxDoubleArrowUp } from "react-icons/rx";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useState } from "react";

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
      department: "Information technologu",
      superior: "Daniel",
    },
    {
      id: 44,
      npk: "11211043",
      name: "Asep",
      email: "asep@gmail.com",
      roles: "independent",
      job: "IT Support",
      department: "Information technologu",
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
      job: "anana",
      department: "General Afiar",
      superior: "Nina",
    },
    {
      id: 87,
      npk: "11211033",
      name: "Lasep",
      email: "Lasep@gmail.com",
      roles: "Office Boy",
      job: "Senior OB",
      department: "Office",
      superior: "Rasyid",
    },
  ];

  const [sortField, setSortField] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof User) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedUserList = [...userList].sort((a, b) => {
    if (!sortField) return 0;
    if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1 className="mt-14 text-xl mb-2 font-montserrat">User List</h1>
        <Divider className="w-full h-[0.5px] bg-slate-200" />

        {/* header add / search */}
        <div className="flex flex-row items-center gap-4 mt-4 mb-4">
          <button className="capitalize text-sm font-montserrat font-medium bg-green-500 py-2 px-4 rounded-sm shadow-md text-white border border-green-700 hover:scale-105 duration-150 ease-in-out hover:shadow-lg">
            add user
          </button>
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
        </div>

        <Divider className="w-full h-[0.5px] bg-slate-200 " />

        {/* table user management by daisyUI */}
        <div className="overflow-x-auto mt-4">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-gray-50">
                <th></th>
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
                      onClick={() => handleSort("name")}
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
            {/* isi data */}
            <tbody>
              {sortedUserList.map((itemList, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
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
                    <button className="border border-blue-700 px-2 py-1 rounded-sm bg-blue-500 text-white capitalize hover:bg-blue-700 duration-150">
                      view
                    </button>
                    <button className="border border-sky-500 px-2 py-1 rounded-sm bg-sky-300 text-white capitalize hover:bg-sky-700 duration-150">
                      edit
                    </button>
                    <button className="border border-red-700 px-2 py-1 rounded-sm bg-red-500 text-white capitalize hover:bg-red-700 duration-150">
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    </Box>
  );
};

export default UserManagementPage;
