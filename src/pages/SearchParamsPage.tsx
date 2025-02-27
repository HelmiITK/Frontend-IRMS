import { useSearchParams } from "react-router-dom";

const SearchParamsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || ""; // ambil query string atau kosong

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchParams(query ? { search: query } : {}); // update url query
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Cari Penelusuran Anda</h2>
      <input
        type="text"
        placeholder="cari penelusuran anada.."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full border p-2 rounded-sm"
      />
      {searchQuery && (
        <p className=" mt-2 text-gray-700">Hasil Pencarian : {searchQuery}</p>
      )}
    </div>
  );
};

export default SearchParamsPage;
