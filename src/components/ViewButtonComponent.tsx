import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

interface ViewButtonComponentProps {
  title: string;
  link: string;
}

const ViewButtonComponent: React.FC<ViewButtonComponentProps> = ({
  title,
  link,
}) => {
  return (
    <Link
      to={link}
      type="button"
      className="text-xs border p-1  border-blue-700 lg:px-2 lg:py-1 lg:w-full rounded-sm bg-blue-500 text-white capitalize hover:bg-blue-700 duration-150 text-center"
    >
      <IoMdEye className="text-sm md:hidden" />
      <span className="hidden md:block ">{title}</span>
    </Link>
  );
};

export default ViewButtonComponent;
