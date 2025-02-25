import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

interface incidentMatrix {
  kategoriIncident: string;
  manusia: string;
  asset: string[];
  lingkungan: string;
  reputasi: string[];
  securityFisik: string;
  securitySiber: string;
}

const tableMatrix: incidentMatrix[] = [
  {
    kategoriIncident: "Insignificant",
    manusia: "First aid case (tanpa tindakan medis)",
    asset: ["Pabrik beroperasi normal dengan kondisi gangguan tidak berarti"],
    lingkungan: "Pencemaran di lingkungan kerja",
    reputasi: ["Reaksi di internal kawasan industri KIE"],
    securityFisik: "Masuk tanpa izin, tidak ada kehilangan",
    securitySiber:
      "Penggunaan hardware yang tidak terdaftar tanpa kehilangan informasi perusahaan",
  },
  {
    kategoriIncident: "Minor",
    manusia: "First aid case (ada tindakan medis)",
    asset: [
      "Pabrik beroperasi normal dengan gangguan yang menyebabkan perbaikan di tempat",
    ],
    lingkungan: "Pencemaran di lingkungan perusahaan",
    reputasi: ["Liputan oleh media lokal (Bontang Post)"],
    securityFisik:
      "Masuk tanpa izin, tidak ada kehilangan, dan mengganggu kenyamanan",
    securitySiber: "System down kurang dari 2 jam",
  },
  {
    kategoriIncident: "Moderate",
    manusia: "Medical treatment case",
    asset: [
      "Pabrik beroperasi tidak normal dan perlu perbaikan dengan menurunkan rate produksi",
      "Kerugian < USD 50.000",
    ],
    lingkungan: "Pencemaran ke masyarakat",
    reputasi: [
      "Liputan oleh media regional (Kaltim Post)",
      "Aduan kerusakan oleh masyarakat",
    ],
    securityFisik: "Masuk tanpa izin, ada kehilangan 1 barang",
    securitySiber:
      "System down 2-8 jam, kehilangan data perusahaan secara permanen",
  },
  {
    kategoriIncident: "Major",
    manusia: "Lost workday case atau cacat permanen",
    asset: [
      "Pabrik shutdown dengan kerusakan yang harus diperbaiki sampai dengan 5 hari",
      "Kerugian USD 50.000 - 100.000",
    ],
    lingkungan: "Pencemaran ke masyarakat dan menimbulkan protes masyarakat",
    reputasi: [
      "Liputan oleh media Nasional",
      "Tuntutan hukum oleh masyarakat/LSM",
      "PROPER Nasional MERAH",
    ],
    securityFisik: "Masuk tanpa izin, ada kehilangan lebih dari 1 barang",
    securitySiber:
      "System diretas, tanpa diketahui, dan sewaktu-waktu dapat dikendalikan dari luar",
  },
  {
    kategoriIncident: "Catastrophic",
    manusia: "Kematian (1 atau lebih orang)",
    asset: [
      "Pabrik shutdown dengan memerlukan perbaikan lebih dari 5 hari",
      "Kerugian > USD 100.000",
    ],
    lingkungan: "Pencemaran lingkungan yang menimbulkan tuntutan hukum",
    reputasi: [
      "Liputan oleh media Internasional",
      "Investigasi dari Pemerintah/Kepolisian",
    ],
    securityFisik: "Ancaman bom, pembajakan pabrik, sabotase",
    securitySiber: "Kelumpuhan infrastruktur IT",
  },
];

interface TableMatrixIncidentReportComponentProps {
  t: (key: string) => string;
}

const TableMatrixIncidentReportComponent: React.FC<
  TableMatrixIncidentReportComponentProps
> = ({ t }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white shadow-md overflow-hidden border-t-2 border-slate-400 px-2 pb-2 pt-1">
      <div className="flex justify-between items-center">
        <h1 className="font-montserrat font-medium text-base lg:text-lg capitalize">
          {t(`table`)}
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-200 rounded"
        >
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Manusia</th>
                <th>Asset</th>
                <th>Lingkungan</th>
                <th>Reputasi</th>
                <th>Security Fisik</th>
                <th>Security Siber</th>
              </tr>
            </thead>
            <tbody>
              {tableMatrix.map((row, index) => (
                <tr key={index}>
                  <td>{row.kategoriIncident}</td>
                  <td>{row.manusia}</td>
                  <td className="text-xs md:text-sm">
                    {row.asset.length > 1 ? (
                      <ul className="list-disc ml-4">
                        {row.asset.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      row.asset[0]
                    )}
                  </td>
                  <td>{row.lingkungan}</td>
                  <td className="text-xs md:text-sm">
                    {row.asset.length > 1 ? (
                      <ul className="list-disc ml-4">
                        {row.reputasi.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      row.asset[0]
                    )}
                  </td>
                  <td>{row.securityFisik}</td>
                  <td>{row.securitySiber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default TableMatrixIncidentReportComponent;
