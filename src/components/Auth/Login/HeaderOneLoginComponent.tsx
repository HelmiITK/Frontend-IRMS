import LogoKPI from "../../../assets/KPI_logo_2.png";

const HeaderOneLoginComponent: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 py-3 w-full bg-white bg-opacity-65 backdrop-blur-sm lg:justify-center lg:h-32 lg:backdrop-blur-0 lg:bg-opacity-0 lg:bg-gradient-to-b from-white to-transparent">
      <div className="flex gap-2 items-center lg:bg-white lg:rounded-b-2xl lg:py-3 lg:px-40 lg:shadow-xl lg:drop-shadow-lg lg:backdrop-blur-md lg:bg-opacity-40">
        <img src={LogoKPI} alt="logo" className="max-w-20 " />
        <div className="flex flex-col lg:px-4 lg:py-2">
          <h1 className="font-bold text-primary  text-lg lg:text-xl">
            PT KALTIM PARNA INDUSTRI
          </h1>
          <p className="italic text-primary text-sm font-semibold lg:text-base">
            AMMONIA INSDUSTRY
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderOneLoginComponent;
