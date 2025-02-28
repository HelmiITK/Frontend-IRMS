import LogoKPI from "../../../assets/KPI_logo_2.png";

const HeaderOneLoginComponent: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-row items-center justify-center gap-2 py-3 px-3 bg-white bg-opacity-65 backdrop-blur-sm lg:w-[29%] lg:rounded-md lg:mt-4">
      <img src={LogoKPI} alt="logo" className="max-w-20" />
      <div className="flex flex-col">
        <h1 className="font-bold text-green-700 text-lg">
          PT KALTIM PARNA INDUSTRI
        </h1>
        <p className="italic text-green-700 text-sm font-semibold">
          AMMONIA INSDUSTRY
        </p>
      </div>
    </div>
  );
};

export default HeaderOneLoginComponent;
