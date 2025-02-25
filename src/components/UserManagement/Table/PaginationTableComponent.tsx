import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

interface PaginationTableComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const PaginationTableComponent: React.FC<PaginationTableComponentProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <>
      <div className="flex justify-center overflow-hidden w-full gap-4 mt-2 items-center lg:mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="flex items-center gap-1 px-2  py-1 border rounded-md text-xs capitalize cursor-pointer text-gray-600 hover:text-black hover:scale-105 hover:shadow-md hover:shadow-gray-200 duration-200 ease-in-out transition-all"
        >
          <IoChevronBackOutline size={15} />
          <span>prev</span>
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="flex items-center gap-1 px-2  py-1 border rounded-md text-xs capitalize cursor-pointer text-gray-600 hover:text-black hover:scale-105 hover:shadow-md hover:shadow-gray-200 duration-200 ease-in-out transition-all"
        >
          <span>next</span>
          <IoChevronForwardOutline size={15} />
        </button>
      </div>
    </>
  );
};

export default PaginationTableComponent;
