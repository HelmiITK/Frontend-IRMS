import { MdOutlineDelete } from "react-icons/md";

interface DeleteButtonComponentProps {
  title: string;
  handleDelete: (id: number) => void;
  itemList: number;
}

const DeleteButtonComponent: React.FC<DeleteButtonComponentProps> = ({
  title,
  handleDelete,
  itemList
}) => {
  return (
    <button
      onClick={() => handleDelete(itemList)}
      type="button"
      className="text-xs border p-1 border-red-700 lg:px-2 lg:py-1 lg:w-full rounded-sm bg-red-500 text-white capitalize hover:bg-red-700 duration-150"
    >
      <MdOutlineDelete className="text-sm md:hidden" />
      <span className="hidden md:block">{title}</span>
    </button>
  );
};

export default DeleteButtonComponent;
