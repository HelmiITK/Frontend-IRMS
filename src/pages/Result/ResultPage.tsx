import HeaderComponent from "../../components/HeaderComponent";
import example from "../../assets/bgNotFound.jpg";
import { FaRegImage } from "react-icons/fa";
import { useState } from "react";
import PhotoComponent from "../../components/PhotoComponent";

const ResultPage: React.FC = () => {
  const dummy = [
    {
      no_report: "li200-300-456",
      name: "Helmi",
      category_incident: "Asset/Produksi",
      photos: example,
    },
    {
      no_report: "li100-221-789",
      name: "Asep",
      category_incident: "Keamananan",
      photos: example,
    },
    {
      no_report: "li300-112-289",
      name: "Ronaldo",
      category_incident: "Lingkungan",
      photos: example,
    },
  ];
  const [openImage, setOpenImage] = useState<boolean>(false);
  return (
    <>
      {/* header */}
      <HeaderComponent title="result" routeOne="dashboard" routeTwo="result" />

      {/* filter result */}

      {/* table content */}
      <div className="max-w-xs sm:max-w-full overflow-x-auto rounded-box border border-base-content/1 bg-base-100">
        <table className="table table-sm lg:table-md">
          {/* head */}
          <thead>
            <tr className="bg-gray-300 text-black text-xs lg:text-sm">
              <th className="border-r text-center w-1">No</th>
              <th className="border-r">No Report</th>
              <th className="border-r">Reporter</th>
              <th className="border-r">Category Incident</th>
              <th className="text-center">Documentation</th>
            </tr>
          </thead>
          <tbody>
            {dummy.map((item, index) => (
              <tr key={item.no_report}>
                <th className="border-r text-center text-xs">{index + 1}</th>
                <td className="border-r text-xs">{item.no_report}</td>
                <td className="border-r text-xs">{item.name}</td>
                <td className="border-r text-xs">{item.category_incident}</td>
                <td className="flex justify-center">
                  <div>
                    <button
                      onClick={() => setOpenImage(true)}
                      className="flex items-center gap-1 rounded-sm py-1 px-2 bg-gray-200 hover:bg-gray-300"
                    >
                      <span>view</span>
                      <FaRegImage />
                    </button>
                    <PhotoComponent
                      openImage={openImage}
                      setOpenImage={setOpenImage}
                      photo={item.photos}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultPage;
