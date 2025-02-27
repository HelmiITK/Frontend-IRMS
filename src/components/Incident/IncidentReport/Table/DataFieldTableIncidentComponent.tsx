import { useState } from "react";
import { Link } from "react-router-dom";

interface User {
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
}

interface DataFieldTableIncidentComponentProps {
  userListField: User[];
  selectedUsers: number[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<number[]>>;
  handleDeleteRowUser: (id: number) => void;
}

const DataFieldTableIncidentComponent: React.FC<
  DataFieldTableIncidentComponentProps
> = ({
  userListField,
  selectedUsers,
  setSelectedUsers,
  handleDeleteRowUser,
}) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleMore = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
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
                        selectedUsers.filter((id) => id !== itemList?.no_report)
                      );
                    } else {
                      setSelectedUsers([...selectedUsers, itemList?.no_report]);
                    }
                  }}
                />
              </label>
            </th>
            <td className="text-xs text-black">{itemList?.no_report}</td>
            <td className="text-xs text-black">{itemList?.data_incident}</td>
            <td className="text-xs text-black">{itemList?.reporter}</td>
            <td className="text-xs text-black">
              {itemList?.origin_department}
            </td>
            <td>
              <p className="bg-orange-600 py-1 px-2 rounded-md text-white text-center text-xs font-normal">
                {itemList?.basic_cause}
              </p>
            </td>
            <td className="text-xs text-black">{itemList?.category_incident}</td>
            <td>
              <span className="py-1 px-2 text-white bg-black rounded-md text-xs font-normal">
                {itemList?.classification_incident}
              </span>
            </td>
            <td className="text-xs text-black">{itemList?.area}</td>
            <td className="text-xs text-black">{itemList?.loaction}</td>
            <td className="text-xs text-black">{itemList?.itcr}</td>
            <td>
              {expandedRows.includes(itemList?.no_report) ? (
                <span className="text-xs text-black">{itemList?.description}</span>
              ) : (
                <span className="text-xs text-black">
                  {itemList?.description.length > 20
                    ? `${itemList?.description.substring(0, 20)}...`
                    : itemList?.description}
                </span>
              )}
              {itemList?.description.length > 20 && (
                <button
                  onClick={() => toggleMore(itemList?.no_report)}
                  className="text-blue-500 ml-2 hover:underline text-xs"
                >
                  {expandedRows.includes(itemList?.no_report) ? "Less" : "More"}
                </button>
              )}
            </td>
            <td>
              <img src={itemList?.photos} alt="" className="w-10 h-10 object-cover"/>
            </td>
            <td className="text-xs text-black">{itemList?.reviewed_by}</td>
            <td className=" sticky right-0 backdrop-blur-sm bg-opacity-55 bg-white flex flex-col gap-[5px] justify-center">
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
  );
};

export default DataFieldTableIncidentComponent;
