import { Link } from "react-router-dom";

interface AddButtonComponentProps {
  title: string;
  link: string;
}

const AddButtonComponent: React.FC<AddButtonComponentProps> = ({
  title,
  link,
}) => {
  return (
    <Link to={link}>
      <button className="capitalize text-xs lg:text-sm bg-green-500 py-1 px-2 lg:py-1 lg:px-4 rounded-sm shadow-md text-white border border-green-700 hover:scale-105 duration-150 ease-in-out hover:shadow-lg">
        {title}
      </button>
    </Link>
  );
};

export default AddButtonComponent;
