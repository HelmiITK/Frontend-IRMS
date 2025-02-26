import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
interface TableMatrixIncidentReportComponentProps {
  t: (key: string) => string;
}

const TableMatrixIncidentReportComponent: React.FC<
  TableMatrixIncidentReportComponentProps
> = ({ t }) => {
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
    // Insignificant
    {
      kategoriIncident: `${t(`table.headerRow.Insignificant`)}`,
      manusia: `${t(`table.fieldTable.Insignificant.manusia`)}`,
      asset: [`${t(`table.fieldTable.Insignificant.asset`)}`],
      lingkungan: `${t(`table.fieldTable.Insignificant.lingkungan`)}`,
      reputasi: [`${t(`table.fieldTable.Insignificant.reputasi`)}`],
      securityFisik: `${t(`table.fieldTable.Insignificant.securityFisik`)}`,
      securitySiber: `${t(`table.fieldTable.Insignificant.securitySiber`)}`,
    },

    // Minor
    {
      kategoriIncident: `${t(`table.headerRow.Minor`)}`,
      manusia: `${t(`table.fieldTable.minor.manusia`)}`,
      asset: [`${t(`table.fieldTable.minor.asset`)}`],
      lingkungan: `${t(`table.fieldTable.minor.lingkungan`)}`,
      reputasi: [`${t(`table.fieldTable.minor.reputasi`)}`],
      securityFisik: `${t(`table.fieldTable.minor.securityFisik`)}`,
      securitySiber: `${t(`table.fieldTable.minor.securitySiber`)}`,
    },

    // Moderate
    {
      kategoriIncident: `${t(`table.headerRow.Moderate`)}`,
      manusia: `${t(`table.fieldTable.moderate.manusia`)}`,
      asset: [
        `${t(`table.fieldTable.moderate.asset.a1`)}`,
        `${t(`table.fieldTable.moderate.asset.a2`)}`,
      ],
      lingkungan: `${t(`table.fieldTable.moderate.lingkungan`)}`,
      reputasi: [
        `${t(`table.fieldTable.moderate.reputasi.r1`)}`,
        `${t(`table.fieldTable.moderate.reputasi.r2`)}`,
      ],
      securityFisik: `${t(`table.fieldTable.moderate.securityFisik`)}`,
      securitySiber: `${t(`table.fieldTable.moderate.securitySiber`)}`,
    },

    // Major
    {
      kategoriIncident: `${t(`table.headerRow.Major`)}`,
      manusia: `${t(`table.fieldTable.major.manusia`)}`,
      asset: [
        `${t(`table.fieldTable.major.asset.a1`)}`,
        `${t(`table.fieldTable.major.asset.a2`)}`,
      ],
      lingkungan: `${t(`table.fieldTable.major.lingkungan`)}`,
      reputasi: [
        `${t(`table.fieldTable.major.reputasi.r1`)}`,
        `${t(`table.fieldTable.major.reputasi.r2`)}`,
        `${t(`table.fieldTable.major.reputasi.r3`)}`,
      ],
      securityFisik: `${t(`table.fieldTable.major.securityFisik`)}`,
      securitySiber: `${t(`table.fieldTable.major.securitySiber`)}`,
    },

    // Catastrophic
    {
      kategoriIncident: `${t(`table.headerRow.Catastrophic`)}`,
      manusia: `${t(`table.fieldTable.Catastrophic.manusia`)}`,
      asset: [
        `${t(`table.fieldTable.Catastrophic.asset.a1`)}`,
        `${t(`table.fieldTable.Catastrophic.asset.a2`)}`,
      ],
      lingkungan: `${t(`table.fieldTable.Catastrophic.lingkungan`)}`,
      reputasi: [
        `${t(`table.fieldTable.Catastrophic.reputasi.r1`)}`,
        `${t(`table.fieldTable.Catastrophic.reputasi.r2`)}`,
      ],
      securityFisik: `${t(`table.fieldTable.Catastrophic.securityFisik`)}`,
      securitySiber: `${t(`table.fieldTable.Catastrophic.securitySiber`)}`,
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white shadow-md overflow-hidden border-t-2 border-slate-400 px-2 pb-2 pt-1">
      <div className="flex justify-between items-center">
        <h1 className="font-montserrat font-medium text-base lg:text-lg capitalize">
          {t(`table.header`)}
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
                <th className="capitalize">{t(`table.headerColumn.m`)}</th>
                <th className="capitalize">{t(`table.headerColumn.a`)}</th>
                <th className="capitalize">{t(`table.headerColumn.l`)}</th>
                <th className="capitalize">{t(`table.headerColumn.r`)}</th>
                <th className="capitalize">{t(`table.headerColumn.sf`)}</th>
                <th className="capitalize">{t(`table.headerColumn.ss`)}</th>
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
