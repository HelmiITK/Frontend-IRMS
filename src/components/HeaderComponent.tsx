import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

interface HeaderComponentProps {
  title: string;
  routeOne: string;
  routeTwo: string;
  routeThree?: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title,
  routeOne,
  routeTwo,
  routeThree,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <h1 className="lg:mt-1 text-xl font-montserrat capitalize">{title}</h1>
      <div className="flex items-center gap-1">
        {/* Route one */}
        <Link
          to={"/dashboard"}
          className="flex items-center gap-1 cursor-pointer text-gray-500 hover:text-black whitespace-nowrap"
        >
          <AiFillHome className="text-sm" />
          <h1 className=" text-sm capitalize">{routeOne}</h1>
        </Link>

        <MdChevronRight className="text-gray-500" />

        {/* Route two */}
        <Link
          to={"../"}
          className={`text-sm capitalize whitespace-nowrap ${
            routeThree
              ? "cursor-pointer text-gray-500 hover:text-black"
              : "text-black"
          }`}
        >
          {routeTwo}
        </Link>

        {/* Route three */}
        {routeThree && (
          <>
            <MdChevronRight className="text-gray-500" />
            <h2 className="text-sm capitalize text-black ">{routeThree}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
