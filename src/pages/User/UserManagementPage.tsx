import { Divider } from "@mui/material";
import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";
import { IoSearch } from "react-icons/io5";

const UserManagementPage = () => {
  const userList = [
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
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>ID</th>
                <th>NPK</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Job</th>
                <th>Department</th>
                <th>Superior</th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {userList.map((itemList, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="text-sm text-black">{itemList.id}</div>
                  </td>
                  <td>
                    <div className="text-sm text-black">{itemList.npk}</div>
                    {/* <br />
                  <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                  </span> */}
                  </td>
                  <td>{itemList.name}</td>
                  <td>{itemList.email}</td>
                  <td>{itemList.roles}</td>
                  <td>{itemList.job}</td>
                  <td>{itemList.department}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">{itemList.superior}</button>
                  </th>
                  <th className="flex flex-col gap-2 ">
                    <button className="border border-blue-700 p-2 rounded-sm bg-blue-500 text-white">
                      view
                    </button>
                    <button className="border border-sky-500 p-2 rounded-sm bg-sky-300 text-white">
                      edit
                    </button>
                    <button className="border border-red-700 p-2 rounded-sm bg-red-500 text-white">
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </Box>
    </Box>
  );
};

export default UserManagementPage;
