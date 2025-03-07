import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import PhotoComponent from "../../../PhotoComponent";
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
  const [openImage, setOpenImage] = useState<boolean>(false);

  const toggleMore = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <>
      {userListField.map((itemList, index) => (
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
          <td className="text-xs text-black">{itemList?.origin_department}</td>
          <td>
            <p className="bg-orange-600 py-1 px-2 text-center rounded-md text-white text-xs font-normal">
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
              <span className="text-xs text-black">
                {itemList?.description}
              </span>
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
            <div>
              <img
                src={itemList?.photos}
                alt="image incident"
                className="w-10 h-10 object-cover cursor-pointer"
                onClick={() => setOpenImage(true)}
              />
              <PhotoComponent
                openImage={openImage}
                setOpenImage={setOpenImage}
                photo={itemList.photos}
              />
            </div>
          </td>
          <td className="text-xs text-black">{itemList?.reviewed_by}</td>
          <td className=" sticky right-0 backdrop-blur-sm bg-opacity-55 bg-white flex flex-col gap-[5px] justify-center items-center">
            <Link
              to="detail_incident_report"
              type="button"
              className="text-xs border w-fit lg:w-full border-blue-700 px-2 py-1 rounded-sm bg-blue-500 text-white capitalize hover:bg-blue-700 duration-150 text-center"
            >
              <IoMdEye className="text-sm md:hidden" />
              <span className="hidden md:block">View</span>
            </Link>
            <Link
              to="edit_incident_report"
              type="button"
              className="text-xs border w-fit lg:w-full border-sky-500 px-2 py-1 rounded-sm bg-sky-300 text-white capitalize hover:bg-sky-700 duration-150 text-center"
            >
              <MdOutlineModeEditOutline className="text-sm md:hidden" />
              <span className="hidden md:block">Edit</span>
            </Link>
            <button
              onClick={() => handleDeleteRowUser(itemList?.no_report)}
              type="button"
              className="text-xs border w-fit lg:w-full border-red-700 px-2 py-1 rounded-sm bg-red-500 text-white capitalize hover:bg-red-700 duration-150"
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

export default DataFieldTableIncidentComponent;
