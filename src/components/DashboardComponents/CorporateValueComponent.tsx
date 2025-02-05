import VisionIcon from "../../assets/vision.png";
import MissionIcon from "../../assets/mission.png";
import BgDashboard from "../../assets/BgDashboard.png";
import { useState } from "react";

const CorporateValueComponent = () => {
  const [hoverId, setHoverId] = useState<string | null>(null);
  // state untuk melacak hover

  const misi = [
    {
      id: "B",
      judul: "erpengetahuan",
      paragraf: "Menjadi ahli di bidangnya",
      color1: "#1D8000",
      color2: "#2EA30E",
    },
    {
      id: "A",
      judul: "kuntabilitas",
      paragraf:
        "Memahami dan bertanggung jawab untuk melaksanaan pekerjaan dengan benar",
      color1: "#058DE2",
      color2: "#049FFF",
    },
    {
      id: "I",
      judul: "ntegritas dan Etika",
      paragraf:
        "Melakukan hal yang benar, dengan cara yang jujur, adil, dan bertanggung jawab",
      color1: "#05C1E2",
      color2: "#00D9FF",
    },
    {
      id: "K",
      judul: "erja Tim",
      paragraf:
        "Bekerja secara kolaboratif, penuh keharmonisan dan saling menghormati",
      color1: "#E28D05",
      color2: "#FF9D00",
    },
  ];
  return (
    <>
      <h1 className="font-montserrat text-lg font-medium tracking-wide uppercase mb-3">
        Corporate Value
      </h1>
      {/* jargon */}
      <div className="relative w-full h-[400px] rounded-md overflow-hidden shadow-lg">
        <img
          src={BgDashboard}
          alt="foto dashboard"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Overlay untuk efek gelap agar teks lebih jelas */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-5"></div>

        <div className="mt-20 flex flex-col justify-between items-start gap-6 p-2 ">
          {/* header jargon */}
          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            {misi.map((item) => (
              <div
                key={item.id}
                className={`relative z-10 text-center text-white text-4xl font-montserrat font-semibold p-4 shadow-lg shadow-gray-400 rounded-md transition-transform duration-150 ease-in-out 
                  ${hoverId === item.id ? "scale-110" : "hover:scale-110"}`}
                style={{ backgroundColor: item.color2 }}
                onMouseEnter={() => setHoverId(item.id)}
                onMouseLeave={() => setHoverId(null)}
              >
                {item.id}
              </div>
            ))}
          </div>
          {/* card jargon */}
          <div className="relative z-10 grid grid-cols-4 gap-2">
            {misi.map((itemJargon) => (
              <div
                key={itemJargon.id}
                style={{ backgroundColor: itemJargon.color1 }}
                className={`p-4 shadow-lg shadow-gray-400 rounded-md flex flex-col justify-between h-28 transition-transform duration-150 ease-in-out 
                  ${
                    hoverId === itemJargon.id ? "scale-110" : "hover:scale-110"
                  }`}
                onMouseEnter={() => setHoverId(itemJargon.id)}
                onMouseLeave={() => setHoverId(null)}
              >
                <div className="flex flex-row items-end">
                  <div
                    style={{ backgroundColor: itemJargon.color2 }}
                    className="shadow-md px-2 text-4xl rounded-sm text-white"
                  >
                    {itemJargon.id}
                  </div>
                  <h1 className="font-medium text-xl text-white uppercase">
                    {itemJargon.judul}
                  </h1>
                </div>
                <div>
                  <p className="text-xs text-white font-poppins font-extralight">
                    {itemJargon.paragraf}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* visi misi */}
      <div className="mt-3 rounded-sm grid grid-cols-2 gap-4">
        {/* visi */}
        <div className="bg-gradient-to-r from-blue-700 to-slate-800 px-6 py-2 flex flex-row items-center justify-between rounded-md shadow-md shadow-slate-500">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold font-montserrat uppercase text-white">
              Vision
            </h1>
            <p className="text-lg font-montserrat font-light text-white">
              Perusahaan penghasil amoniak terefisien di dunia
            </p>
          </div>
          <img
            src={VisionIcon}
            alt="vision icon"
            className="w-40 h-40 opacity-45"
          />
        </div>
        {/* misi */}
        <div className="bg-gradient-to-r from-red-700 to-slate-800 px-6 py-4 flex flex-row items-center justify-between rounded-md shadow-md shadow-slate-500">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold font-montserrat uppercase text-white">
              Mission
            </h1>
            <ol className="list-decimal list-outside text-sm font-montserrat font-light text-white pl-4">
              <li>
                Peduli akan kualitas, keselamatan, kesehatan, dan lingkungan
                (QSHE)
              </li>
              <li>Fokus pada produktifitas dan kehandalan pabrik</li>
              <li>
                Menjadi perusahaan terbaik, di mana setiap karyawan bangga
                menjadi bagian dari perusahaan
              </li>
            </ol>
          </div>
          <img
            src={MissionIcon}
            alt="vision icon"
            className="w-40 h-40 opacity-45"
          />
        </div>
      </div>
    </>
  );
};

export default CorporateValueComponent;
