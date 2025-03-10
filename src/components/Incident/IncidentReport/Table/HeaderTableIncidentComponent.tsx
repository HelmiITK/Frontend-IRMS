import { RxDoubleArrowUp } from "react-icons/rx";
import { RxDoubleArrowDown } from "react-icons/rx";

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

interface HeaderTableIncidentComponentProps {
  handleSort: (field: keyof User) => void;
  sortField: keyof User | null;
  sortOrder: "asc" | "desc";
}

const HeaderTableIncidentComponent: React.FC<
  HeaderTableIncidentComponentProps
> = ({ handleSort, sortField, sortOrder }) => {
  return (
    <thead className="overflow-x-auto">
      <tr>
        {/* show dropdown */}
        <th>
          <div className="flex flex-row items-start gap-1">
            <label htmlFor="show" className="text-xs text-black font-semibold">
              Show :
            </label>
            <select
              name="show"
              id="show"
              className=" rounded-sm shadow-sm border border-1 border-slate-900 w-[52px]"
            >
              <option value="volvo">5</option>
              <option value="saab">10</option>
              <option value="mercedes">50</option>
              <option value="audi">100</option>
            </select>
          </div>
        </th>
        {/* No report */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              no <br /> report
            </p>
            <div
              onClick={() => handleSort("no_report")}
              className="cursor-pointer"
            >
              {sortField === "no_report" ? (
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
        {/* data incident */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              data <br /> incident
            </p>
            <div
              onClick={() => handleSort("data_incident")}
              className="cursor-pointer"
            >
              {sortField === "data_incident" ? (
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
        {/* reporter */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              reporter
            </p>
            <div
              onClick={() => handleSort("reporter")}
              className="cursor-pointer"
            >
              {sortField === "reporter" ? (
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
        {/* origin department */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              origin <br /> department
            </p>
            <div
              onClick={() => handleSort("origin_department")}
              className="cursor-pointer"
            >
              {sortField === "origin_department" ? (
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
        {/* basic cause */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              basic <br /> cause
            </p>
            <div
              onClick={() => handleSort("basic_cause")}
              className="cursor-pointer"
            >
              {sortField === "basic_cause" ? (
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
        {/* category incident */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              category <br /> incident
            </p>
            <div
              onClick={() => handleSort("category_incident")}
              className="cursor-pointer"
            >
              {sortField === "category_incident" ? (
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
        {/* classification incident */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              classification <br /> incident
            </p>
            <div
              onClick={() => handleSort("classification_incident")}
              className="cursor-pointer"
            >
              {sortField === "classification_incident" ? (
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
        {/* area */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">area</p>
            <div onClick={() => handleSort("area")} className="cursor-pointer">
              {sortField === "area" ? (
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
        {/* location */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              location
            </p>
            <div
              onClick={() => handleSort("location")}
              className="cursor-pointer"
            >
              {sortField === "location" ? (
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
        {/* is there a chemical release */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              is there a <br /> chemical <br />
              release?
            </p>
            <div onClick={() => handleSort("itcr")} className="cursor-pointer">
              {sortField === "itcr" ? (
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
        {/* description */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              description
            </p>
            <div
              onClick={() => handleSort("description")}
              className="cursor-pointer"
            >
              {sortField === "description" ? (
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
        {/* photos */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              photos
            </p>
            <div
              onClick={() => handleSort("photos")}
              className="cursor-pointer"
            >
              {sortField === "photos" ? (
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
        {/* reviewed by */}
        <th>
          <div className="flex items-center gap-1">
            <p className="text-black text-xs font-semibold capitalize">
              reviewed <br /> by
            </p>
            <div
              onClick={() => handleSort("reviewed_by")}
              className="cursor-pointer"
            >
              {sortField === "reviewed_by" ? (
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
        {/* action */}
        <th className="text-black capitalize sticky right-0 bg-white text-center backdrop-blur-sm bg-opacity-50">
          action
        </th>
      </tr>
    </thead>
  );
};

export default HeaderTableIncidentComponent;
