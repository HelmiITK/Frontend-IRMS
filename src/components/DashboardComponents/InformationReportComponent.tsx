import ReportIcon from "../../assets/analytics.png";
import ApprovedIcon from "../../assets/check-circle.png";
import RejectedIcon from "../../assets/rejected.png";
import InProgressIcon from "../../assets/processing-time (1).png";
import CloseIcon from "../../assets/thumbs-up.png";

const InformationReportComponent = () => {
  const informationReport = [
    {
      total: "27",
      kategori: "Total Reports",
      icon: ReportIcon,
      bgColor: "#38bdf8 ",
    },
    {
      total: "27",
      kategori: "Approved",
      icon: ApprovedIcon,
      bgColor: "#16a34a",
    },
    {
      total: "0",
      kategori: "Rejected",
      icon: RejectedIcon,
      bgColor: "#ef4444",
    },
    {
      total: "16",
      kategori: "In Progress",
      icon: InProgressIcon,
      bgColor: "#3b82f6",
    },
    {
      total: "11",
      kategori: "Close",
      icon: CloseIcon,
      bgColor: "#22d3ee",
    },
  ];
  return (
    <div className="p-1 grid grid-cols-1 gap-1 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:gap-y-3 bg-white lg:p-4 shadow-md rounded-sm">
      {informationReport.map((itemReport, index) => (
        <div
          key={index}
          className="p-1 border flex flex-row justify-between lg:p-2 rounded-sm group hover:scale-105 hover:shadow-md hover:shadow-slate-400 hover:rounded-md hover:border-slate-400 duration-150 ease-linear "
          style={{ backgroundColor: itemReport.bgColor }}
        >
          <div className="flex flex-col justify-between pl-3 py-2">
            <h1 className="text-5xl font-semibold text-white">
              {itemReport.total}
            </h1>
            <p className="font-semibold text-white text-base">
              {itemReport.kategori}
            </p>
          </div>
          <div className="p-4">
            <img
              src={itemReport.icon}
              alt={itemReport.kategori}
              className="w-20 h-20 opacity-30 group-hover:scale-110 group-hover:opacity-45 duration-150 ease-linear"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InformationReportComponent;
