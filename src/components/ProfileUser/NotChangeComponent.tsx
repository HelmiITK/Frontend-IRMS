const NotChangeComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 cursor-not-allowed">
        <h1 className="font-montserrat font-medium text-sm">NPK*</h1>
        <p className="border p-2 rounded-md bg-slate-100 text-slate-500 font-montserrat text-sm">
          11211043
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-not-allowed">
        <h1 className="font-montserrat font-medium text-sm">Name*</h1>
        <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
          Helmi
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-not-allowed">
        <h1 className="font-montserrat font-medium text-sm">Job*</h1>
        <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
          IT Support
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-not-allowed">
        <h1 className="font-montserrat font-medium text-sm">Email*</h1>
        <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
          helmi220602@gmail.com
        </p>
      </div>
    </div>
  );
};

export default NotChangeComponent;
