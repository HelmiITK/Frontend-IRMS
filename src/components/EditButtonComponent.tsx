import { Link } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";

interface EditButtonComponentProps {
  title: string;
  link: string;
}

const EditButtonComponent: React.FC<EditButtonComponentProps> = ({
  title,
  link,
}) => {
  return (
    <Link
      to={link}
      type="button"
      className="text-xs border p-1 border-sky-500 lg:px-2 lg:py-1 lg:w-full rounded-sm bg-sky-300 text-white capitalize hover:bg-sky-700 duration-150 text-center"
    >
      <MdOutlineModeEditOutline className="text-sm md:hidden" />
      <span className="hidden md:block">{title}</span>
    </Link>
  );
};

export default EditButtonComponent;
