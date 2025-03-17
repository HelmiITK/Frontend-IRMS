import React from "react";
import ViewButtonComponent from "../../ViewButtonComponent";
import EditButtonComponent from "../../EditButtonComponent";
import DeleteButtonComponent from "../../DeleteButtonComponent";

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
          <td className="sticky right-0 backdrop-blur-sm bg-opacity-55 bg-white flex flex-col  lg:flex lg:flex-row gap-[5px] justify-center items-center ">
            <ViewButtonComponent title="view" link={`detail_user/${itemList.id}`} />
            <EditButtonComponent title="edit" link={`edit_user/${itemList.id}`} />
            <DeleteButtonComponent
              title="delete"
              handleDelete={handleDeleteRowUser}
              itemList={itemList.id}
            />
            {/* <button
              onClick={() => handleDeleteRowUser(itemList.id)}
              type="button"
              className="text-xs border p-1 border-red-700 lg:px-2 lg:py-1 lg:w-full rounded-sm bg-red-500 text-white capitalize hover:bg-red-700 duration-150"
            >
              <MdOutlineDelete className="text-sm md:hidden" />
              <span className="hidden md:block">Delete</span>
            </button> */}
          </td>
        </tr>
      ))}
    </>
  );
};

export default DataFieldTableComponent;
