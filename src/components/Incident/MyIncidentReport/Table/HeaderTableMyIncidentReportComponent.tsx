import { RxDoubleArrowUp } from "react-icons/rx";
import { RxDoubleArrowDown } from "react-icons/rx";

interface User {
  id: number;
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

interface HeaderTableMyIncidentComponentProps {
  handleSort: (field: keyof User) => void;
  sortField: keyof User | null;
  sortOrder: "asc" | "desc";
  handleDisplayCount: (count: number) => void;
  placeholderShow: number;
}

const HeaderTableMyIncidentComponent: React.FC<
  HeaderTableMyIncidentComponentProps
> = ({
  handleSort,
  sortField,
  sortOrder,
  handleDisplayCount,
  placeholderShow,
}) => {
  return (
    <thead className="overflow-x-auto">
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
        {/* status incident */}
        <th>
          <div className="flex items-center gap-4 md:gap-10 ">
            <p className="text-black text-xs font-semibold capitalize">
              status <br /> incident
            </p>
            <div
              onClick={() => handleSort("status_incident")}
              className="cursor-pointer"
            >
              {sortField === "status_incident" ? (
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
          <div className="flex items-center gap-1 justify-between">
            <p className="text-black text-xs font-semibold capitalize">
              basic cause
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
        <th className="min-w-[150px]">
          <div className="flex items-center gap-1 justify-between">
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

export default HeaderTableMyIncidentComponent;
