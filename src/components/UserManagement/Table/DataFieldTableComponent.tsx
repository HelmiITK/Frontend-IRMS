import React from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

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

interface DataFieldTableComponentProps {
  userListField: User[];
  selectedUsers: number[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<number[]>>;
  handleDeleteRowUser: (id: number) => void;
}

const DataFieldTableComponent: React.FC<DataFieldTableComponentProps> = ({
  userListField,
  selectedUsers,
  setSelectedUsers,
  handleDeleteRowUser,
}) => {
  return (
    <>
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
          <td className="text-sm text-black">{itemList.email}</td>
          <td>
            <p className="bg-orange-600 py-1 px-2 rounded-md text-white text-center text-xs font-medium font-poppins">
              {itemList.roles}
            </p>
          </td>
          <td>{itemList.job}</td>
          <td>{itemList.department}</td>
          <td>{itemList.superior}</td>
          <td className="sticky right-0 bg-white flex flex-col gap-[5px] items-center justify-center ">
            <Link
              to="detail_user"
              type="button"
              className="text-xs border p-1  border-blue-700 lg:px-2 lg:py-1 lg:w-full rounded-sm bg-blue-500 text-white capitalize hover:bg-blue-700 duration-150 text-center"
            >
              <IoMdEye className="text-sm md:hidden" />
              <span className="hidden md:block ">View</span>
            </Link>
            <Link
              to="edit_user"
              type="button"
              className="text-xs border p-1 border-sky-500 lg:px-2 lg:py-1 lg:w-full rounded-sm bg-sky-300 text-white capitalize hover:bg-sky-700 duration-150 text-center"
            >
              <MdOutlineModeEditOutline className="text-sm md:hidden" />
              <span className="hidden md:block">Edit</span>
            </Link>
            <button
              onClick={() => handleDeleteRowUser(itemList.id)}
              type="button"
              className="text-xs border p-1 border-red-700 lg:px-2 lg:py-1 lg:w-full rounded-sm bg-red-500 text-white capitalize hover:bg-red-700 duration-150"
            >
              <MdOutlineDelete className="text-sm md:hidden" />
              <span className="hidden md:block">Delete</span>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DataFieldTableComponent;
