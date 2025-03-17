import { FaRegCopy } from "react-icons/fa";
import { GrDocumentCsv } from "react-icons/gr";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa6";
import { Divider } from "@mui/material";
import AddButtonComponent from "../../AddButtonComponent";
import SearchButtonComponent from "../../SearchButtonComponent";

interface User {
  no_report: number;
  data_incident: string;
  reporter: string;
  origin_department: string;
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

interface FilterMyIncidentComponentProps {
  handleSelectedAll: () => void;
  selectedUsers: number[];
  userListField: User[];
  handleDeselectedAll: () => void;
  handleDeleteSelected: () => void;
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterMyIncidentComponent: React.FC<FilterMyIncidentComponentProps> = ({
  selectedUsers,
  userListField,
  handleDeleteSelected,
  handleSelectedAll,
  handleDeselectedAll,
  searchQuery,
  handleSearch,
}) => {
  return (
    <div className="pb-2 flex flex-col gap-2 lg:flex lg:flex-row lg:gap-4 w-full lg:justify-between">
      <div className="w-full flex flex-col lg:flex lg:flex-row lg:items-center gap-4">
        {/* left feature */}
        <AddButtonComponent
          title={"add my incident report"}
          link={"add_my_incident_report"}
        />

        <Divider className="hidden lg:block h-8 w-[0.7px] bg-black" />

        {/* right feature */}
        <div className="flex flex-col gap-2 items-start lg:flex lg:flex-row lg:gap-2 lg:items-center">
          {/* Selected button */}
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

      {/*searching */}
      <SearchButtonComponent
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default FilterMyIncidentComponent;
