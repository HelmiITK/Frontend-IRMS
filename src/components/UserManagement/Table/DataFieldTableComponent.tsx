import React from "react";
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
          <td className="sticky right-0 flex flex-col gap-[5px] justify-center ">
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
              onClick={() => handleDeleteRowUser(itemList.id)}
              type="button"
              className="text-xs border border-red-700 px-2 py-1 rounded-sm bg-red-500 text-white capitalize hover:bg-red-700 duration-150"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DataFieldTableComponent;
