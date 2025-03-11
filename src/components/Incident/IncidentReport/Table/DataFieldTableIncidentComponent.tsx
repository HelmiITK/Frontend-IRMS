import { useState } from "react";
import PhotoComponent from "../../../PhotoComponent";
import ViewButtonComponent from "../../../ViewButtonComponent";
import EditButtonComponent from "../../../EditButtonComponent";
import DeleteButtonComponent from "../../../DeleteButtonComponent";
interface User {
  no_report: number;
  data_incident: string;
  reporter: string;
  origin_department: string;
  status_incident: string;
  basic_cause: string;
  category_incident: string;
  classification_incident: string;
  area: string;
  location: string;
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
          <td>
            <p
              className={`py-1 px-2 text-white bg-black rounded-md text-xs font-normal text-center capitalize whitespace-nowrap
              ${
                itemList?.status_incident === "in progress"
                  ? "bg-yellow-500  "
                  : itemList?.status_incident === "approved"
                  ? "bg-green-500"
                  : itemList?.status_incident === "rejected"
                  ? "bg-red-500"
                  : itemList?.status_incident === "resolved"
                  ? "bg-blue-500"
                  : "bg-gray-400"
              }
              `}
            >
              {itemList?.status_incident}
            </p>
          </td>
          <td className="text-xs text-black pl-4">{itemList?.no_report}</td>
          <td className="text-xs text-black whitespace-nowrap">
            {itemList?.data_incident}
          </td>
          <td className="text-xs text-black">{itemList?.reporter}</td>
          <td className="text-xs text-black">{itemList?.origin_department}</td>
          <td>
            <p className="bg-orange-600 whitespace-nowrap py-1 px-2 text-center rounded-md text-white text-xs font-normal">
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
          <td className="text-xs text-black whitespace-nowrap">
            {itemList?.location}
          </td>
          <td className="text-xs text-black pl-6">{itemList?.itcr}</td>
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
          <td className="sticky right-0 backdrop-blur-sm bg-opacity-55 bg-white flex flex-col gap-[5px] justify-center items-center">
            <ViewButtonComponent title="view" link="detail_incident_report" />
            <EditButtonComponent title="edit" link="edit_incident_report" />
            <DeleteButtonComponent
              title="delete"
              handleDelete={handleDeleteRowUser}
              itemList={itemList.no_report}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default DataFieldTableIncidentComponent;
