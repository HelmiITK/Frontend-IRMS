import { RxDoubleArrowUp } from "react-icons/rx";
import { RxDoubleArrowDown } from "react-icons/rx";

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

interface HeaderTableComponentProps {
  handleSort: (field: keyof User) => void;
  sortField: keyof User | null;
  sortOrder: "asc" | "desc";
  handleDisplayCount: (count: number) => void;
  placeholderShow: number;
}

const HeaderTableComponent: React.FC<HeaderTableComponentProps> = ({
  handleSort,
  sortField,
  sortOrder,
  handleDisplayCount,
  placeholderShow,
}) => {
  return (
    <thead>
      <tr>
        {/* show dropdown */}
        <th className="flex flex-row items-center gap-1 justify-start">
          <div className=" flex flex-row items-center  gap-2">
            <div className="relative flex items-center text-center">
              <label
                htmlFor="displayCount"
                className="text-sm text-center flex items-center gap-1"
              >
                <p>Show</p>
                <p>:</p>
              </label>
              <input
                id="displayCount"
                type="number"
                min="0"
                className="border ml-1 py-2 rounded-md text-center w-12"
                placeholder={`${placeholderShow}`}
                onChange={(e) => {
                  let value = e.target.value.replace(/^0+/, ""); // Hapus leading zero
                  if (value === "" || Number(value) < 0) {
                    value = "0"; // Set 0 jika kosong atau negatif
                  }
                  handleDisplayCount(Number(value));
                }}
                onBlur={(e) => {
                  if (!e.target.value || Number(e.target.value) < 0) {
                    handleDisplayCount(0);
                  }
                }}
              />
            </div>
          </div>
        </th>
        {/* ID */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-sm">ID</p>
            <div onClick={() => handleSort("id")} className="cursor-pointer">
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
            <div onClick={() => handleSort("npk")} className="cursor-pointer">
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
            <div onClick={() => handleSort("name")} className="cursor-pointer">
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
            <div onClick={() => handleSort("email")} className="cursor-pointer">
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
            <div onClick={() => handleSort("roles")} className="cursor-pointer">
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
            <div onClick={() => handleSort("job")} className="cursor-pointer">
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
        <th className="sticky right-0 text-black text-center bg-white capitalize text-xs lg:text-sm">
          action
        </th>
      </tr>
    </thead>
  );
};

export default HeaderTableComponent;
