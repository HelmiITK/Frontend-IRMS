import VisionIcon from "../../assets/vision.png";
import MissionIcon from "../../assets/mission.png";
import BgDashboard from "../../assets/BgDashboard.png";
import { useState } from "react";

interface CorporateValueComponentProps {
  t: (key: string) => string;
}

const CorporateValueComponent: React.FC<CorporateValueComponentProps> = ({
  t,
}) => {
  const [hoverId, setHoverId] = useState<string | null>(null);
  // state untuk melacak hover

  const misi = [
    {
      id: `${t(`corporateValue.jargon.b`)}`,
      judul: `${t(`corporateValue.cardHeader.b`)}`,
      paragraf: `${t(`corporateValue.description.b`)}`,
      color1: "#1D8000",
      color2: "#2EA30E",
    },
    {
      id: `${t(`corporateValue.jargon.a`)}`,
      judul: `${t(`corporateValue.cardHeader.a`)}`,
      paragraf: `${t(`corporateValue.description.a`)}`,
      color1: "#058DE2",
      color2: "#049FFF",
    },
    {
      id: `${t(`corporateValue.jargon.i`)}`,
      judul: `${t(`corporateValue.cardHeader.i`)}`,
      paragraf: `${t(`corporateValue.description.i`)}`,
      color1: "#05C1E2",
      color2: "#00D9FF",
    },
    {
      id: `${t(`corporateValue.jargon.k`)}`,
      judul: `${t(`corporateValue.cardHeader.k`)}`,
      paragraf: `${t(`corporateValue.description.i`)}`,
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
      <div className="relative w-full lg:h-[400px] rounded-md overflow-hidden shadow-lg">
        <img
          src={BgDashboard}
          alt="foto dashboard"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Overlay untuk efek gelap agar teks lebih jelas */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-5"></div>

        <div className="p-4 lg:mt-20 flex flex-col justify-between items-start gap-6 lg:p-3 ">
          {/* header jargon */}
          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            {misi.map((item) => (
              <div
                key={item.id}
                className={`relative z-10 text-center capitalize text-white text-2xl lg:text-4xl font-montserrat font-semibold p-2 lg:p-4 shadow-lg shadow-gray-400 rounded-md transition-transform duration-150 ease-in-out 
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
          <div className="relative z-10 grid grid-cols-1 gap-4 lg:grid lg:grid-cols-4 lg:gap-2">
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
                    className="shadow-md px-2 text-2xl lg:text-4xl rounded-sm text-white font-medium font-montserrat capitalize"
                  >
                    {itemJargon.id}
                  </div>
                  <h1 className="font-medium text-base lg:text-xl text-white uppercase">
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
      <div className="mt-3 rounded-sm grid grid-cols-1 gap-2 lg:grid lg:grid-cols-2 lg:gap-4">
        {/* visi */}
        <div className="relative h-48 bg-gradient-to-r from-blue-700 to-slate-900 px-6 py-2 flex flex-row items-center justify-between rounded-md shadow-md shadow-slate-500 group hover:bg-gradient-to-l hover:from-blue-700 hover:to-slate-900 hover:shadow-lg hover:shadow-blue-500 duration-150 ease-linear">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold font-montserrat uppercase text-white group-hover:text-4xl duration-150 ease-linear">
              {/* Vision */}
              {t(`corporateValue.header.v`)}
            </h1>
            <p className="text-base font-montserrat font-extralight text-white z-10 w-[80%] group-hover:font-light group-hover:text-lg duration-150 ease-linear">
              {/* Perusahaan penghasil amoniak terefisien di dunia */}
              {t(`corporateValue.visi`)}
            </p>
          </div>
          <img
            src={VisionIcon}
            alt="vision icon"
            className="absolute right-2 bottom-0 w-40 h-40 opacity-45 group-hover:-translate-y-3 group-hover:-translate-x-4 duration-150 ease-linear"
          />
        </div>
        {/* misi */}
        <div className="relative h-48 bg-gradient-to-r from-red-700 to-slate-900 px-6 py-4 flex flex-row items-center justify-between rounded-md shadow-md shadow-slate-500 group hover:bg-gradient-to-l hover:from-red-700 hover:to-slate-900 hover:shadow-lg hover:shadow-red-500 duration-150 ease-linear">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold font-montserrat uppercase text-white group-hover:text-4xl duration-150 ease-linear">
              {/* Mission */}
              {t(`corporateValue.header.m`)}
            </h1>
            <ol className="z-10 list-decimal list-outside text-xs font-montserrat font-extralight text-white pl-4 group-hover:text-sm group-hover:font-light duration-150 ease-linear">
              {/* <li>
                Peduli akan kualitas, keselamatan, kesehatan, dan lingkungan
                (QSHE)
              </li>
              <li>Fokus pada produktifitas dan kehandalan pabrik</li>
              <li>
                Menjadi perusahaan terbaik, di mana setiap karyawan bangga
                menjadi bagian dari perusahaan
              </li> */}
              <li>{t(`corporateValue.misi.a`)}</li>
              <li>{t(`corporateValue.misi.b`)}</li>
              <li>{t(`corporateValue.misi.c`)}</li>
            </ol>
          </div>
          <img
            src={MissionIcon}
            alt="vision icon"
            className="absolute right-0 bottom-0 w-40 h-40 scale-x-[-1] opacity-45 group-hover:-translate-y-3 group-hover:-translate-x-4 duration-150 ease-linear"
          />
        </div>
      </div>
    </>
  );
};

export default CorporateValueComponent;
