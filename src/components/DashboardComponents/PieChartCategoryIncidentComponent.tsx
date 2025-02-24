import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const PieChartCategoryIncidentComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const data = [
    { name: "Asset/Produksi", value: 88.9, color: "#64B5F6" }, // Biru
    { name: "Manusia", value: 7.4, color: "#424242" }, // Hitam/Abu
    { name: "Reputasi", value: 3.7, color: "#4CAF50" }, // Hijau
  ];

  return (
    <div className=" flex flex-col gap-2 bg-white border-t-2 border-red-500 rounded-sm shadow-md shadow-slate-200">
      {/* Header */}
      <div className="flex justify-between items-center px-2 border border-t-0 border-x-0 border-b-0 py-1">
        <h1 className="font-montserrat font-medium text-base lg:text-lg capitalize">
          Kategori Insiden
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-md hover:bg-gray-200 transition"
        >
          {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </button>
      </div>

      {/* Pie Chart */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center mt-2 mb-3 ">
          <h3 className="font-montserrat font-medium text-base">
            Kategori Insiden
          </h3>
          <p className="font-montserrat font-light text-sm">Per Tahun</p>
          <div className="w-full h-64 sm:h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
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
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PieChartCategoryIncidentComponent;
