import { IoSearch } from "react-icons/io5";

interface SearchButtonComponentProps {
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchButtonComponent: React.FC<SearchButtonComponentProps> = ({
  searchQuery,
  handleSearch,
}) => {
  return (
    <div className=" flex flex-row gap-1 items-center sticky right-2">
      <label htmlFor="search">
        <IoSearch className="hidden lg:block text-xl text-slate-400 absolute top-[10px] right-3" />
      </label>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search"
          value={searchQuery}
          onChange={handleSearch}
          className="px-3  py-[6px] text-sm placeholder:text-sm placeholder:font-light placeholder:font-poppins placeholder:tracking-wider placeholder:text-slate-400 border border-slate-400 rounded-sm shadow-sm"
        />
        {searchQuery && (
          <p className="text-gray-600 font-light text-sm">
            Hasil Pencarian : {searchQuery}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchButtonComponent;
