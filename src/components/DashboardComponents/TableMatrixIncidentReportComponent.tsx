import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const TableMatrixIncidentReportComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tableMatrix = [
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

  return (
    <div className="bg-white pt-1 border border-t-2 border-t-slate-400 flex flex-col gap-2 shadow-sm shadow-slate-200 ">
      <div className="flex justify-between items-center px-2 border border-t-0 border-x-0 pb-2">
        <h1 className="font-montserrat font-medium text-base lg:text-lg capitalize">
          Table Matrix Incident Report
        </h1>
        <button
          className="p-1 rounded-md hover:bg-gray-200 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </button>
      </div>
      {isOpen && (
        <div className="overflow-x-auto">
          <table className="table table-sm table-zebra min-w-full">
            <thead>
              <tr>
                <th className="text-xs md:text-sm"></th>
                <th className="text-black text-xs md:text-sm whitespace-nowrap">
                  Manusia
                </th>
                <th className="text-black text-xs md:text-sm whitespace-nowrap">
                  Asset/Produksi
                </th>
                <th className="text-black text-xs md:text-sm whitespace-nowrap">
                  Lingkungan
                </th>
                <th className="text-black text-xs md:text-sm whitespace-nowrap">
                  Reputasi
                </th>
                <th className="text-black text-xs md:text-sm whitespace-nowrap">
                  Security Fisik
                </th>
                <th className="text-black text-xs md:text-sm whitespace-nowrap">
                  Security Siber
                </th>
              </tr>
            </thead>
            <tbody>
              {tableMatrix.map((itemTable, index) => (
                <tr key={index} className="hover">
                  <th className="text-black text-xs md:text-sm whitespace-nowrap">
                    {itemTable.kategoriIncident}
                  </th>
                  <td className="text-xs md:text-sm">{itemTable.manusia}</td>
                  <td className="text-xs md:text-sm">
                    {itemTable.asset.length > 1 ? (
                      <ul className="list-disc ml-4">
                        {itemTable.asset.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      itemTable.asset[0]
                    )}
                  </td>
                  <td className="text-xs md:text-sm">{itemTable.lingkungan}</td>
                  <td className="text-xs md:text-sm">
                    {itemTable.reputasi.length > 1 ? (
                      <ul className="list-disc ml-4">
                        {itemTable.reputasi.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      itemTable.reputasi[0]
                    )}
                  </td>
                  <td className="text-xs md:text-sm">
                    {itemTable.securityFisik}
                  </td>
                  <td className="text-xs md:text-sm">
                    {itemTable.securitySiber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableMatrixIncidentReportComponent;
