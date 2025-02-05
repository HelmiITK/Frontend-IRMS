import CorporateValueComponent from "../../components/DashboardComponents/CorporateValueComponent";
import InformationReportComponent from "../../components/DashboardComponents/InformationReportComponent";
import TableMatrixIncidentReportComponent from "../../components/DashboardComponents/TableMatrixIncidentReportComponent";
import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const DashboardPage = () => {
  const data = [
    { name: "Asset/Produksi", value: 88.9, color: "#64B5F6" }, // Biru
    { name: "Manusia", value: 7.4, color: "#424242" }, // Hitam/Abu
    { name: "Reputasi", value: 3.7, color: "#4CAF50" }, // Hijau
  ];

  return (
    <>
      <Box sx={{ display: "flex" }} className="bg-gray-50">
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>
            {/* header */}
            <h1 className="mt-14 text-base font-montserrat font-medium tracking-wider">
              Dashboard
            </h1>
            <div className="w-full h-[1px] bg-slate-300 my-2 mb-4"></div>

            {/* List grid information report*/}
            <InformationReportComponent />
            <div className="w-full h-[1px] bg-slate-200 mt-4 mb-4"></div>

            {/* Corporate Value */}
            <CorporateValueComponent />
            <div className="w-full h-[1px] bg-slate-200 mt-4 mb-4"></div>

            {/* Table matrix incident report */}
            <TableMatrixIncidentReportComponent />
            <div className="w-full h-[1px] bg-slate-200 mt-4 mb-2"></div>

            {/* Pie chart kategory incident */}
            <div className="flex flex-col gap-2 bg-white border-t-2 border-red-500 rounded-sm shadow-sm">
              {/* header */}
              <h1 className="font-montserrat font-medium text-lg capitalize p-2 border-b-2 border-slate-100 ">
                kategori insiden
              </h1>
              {/* pie chart by recharts */}
              <div className="flex flex-col items-center justify-center mt-2 mb-3">
                <h3 className="font-montserrat font-medium text-base">
                  Kategori Insiden
                </h3>
                <p className="font-montserrat font-light text-sm">Per Tahun</p>
                {/* <div className="flex flex-row items-center justify-center"> */}
                <PieChart width={1190} height={350} className="-mt-5">
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60} // Ini membuat PieChart jadi Donut
                    outerRadius={100}
                    paddingAngle={2} // Memberi jarak antar bagian
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(1)} %`
                    }
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    layout="horizontal"
                    align="center"
                    verticalAlign="bottom"
                    wrapperStyle={{
                      bottom: 20,
                      fontSize: "14px",
                      lineHeight: "30px",
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px", 
                    }}
                  />
                </PieChart>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
