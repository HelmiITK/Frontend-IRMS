const PaginationTableComponent: React.FC = () => {
  return (
    <tfoot>
      <tr className="">
        <th>Showing 0-50 of 100</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th className="">
          <div className="join flex items-center gap-2">
            <button className="join-item bg-slate-100 px-2 py-1 hover:bg-slate-200 duration-150">
              «
            </button>
            <div className="flex items-center">
              <h1 className="join-item px-2 py-1">1</h1>
            </div>
            <button className="join-item bg-slate-100 px-2 py-1 hover:bg-slate-200 duration-150">
              »
            </button>
          </div>
        </th>
      </tr>
    </tfoot>
  );
};

export default PaginationTableComponent;
