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
}

const HeaderTableComponent: React.FC<HeaderTableComponentProps> = ({
  handleSort,
  sortField,
  sortOrder,
}) => {
  return (
    <thead>
      <tr>
        {/* show dropdown */}
        <th className="flex flex-row items-center gap-1 justify-center">
          <label htmlFor="show" className="text-sm text-black">
            Show :
          </label>
          <select
            name="show"
            id="show"
            className="p-1 rounded-sm shadow-sm border border-1 border-slate-900 w-[52px]"
          >
            <option value="volvo">5</option>
            <option value="saab">10</option>
            <option value="mercedes">50</option>
            <option value="audi">100</option>
          </select>
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
