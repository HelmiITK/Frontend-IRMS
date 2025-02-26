interface NotChangeComponentProps {
  t: (key: string) => string;
}

const NotChangeComponent: React.FC<NotChangeComponentProps> = ({ t }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 cursor-not-allowed">
        <h1 className="font-montserrat font-medium text-sm uppercase">
          {t(`profileUser.notChange.label1`)}*
        </h1>
        <p className="border p-2 rounded-md bg-slate-100 text-slate-500 font-montserrat text-sm">
          11211043
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-not-allowed">
        <h1 className="font-montserrat font-medium text-sm capitalize">
          {t(`profileUser.notChange.label2`)}*
        </h1>
        <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
          Helmi
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-not-allowed capitalize">
        <h1 className="font-montserrat font-medium text-sm">
          {t(`profileUser.notChange.label3`)}*
        </h1>
        <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
          IT Support
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-not-allowed">
        <h1 className="font-montserrat font-medium text-sm capitalize">
          {t(`profileUser.notChange.label4`)}*
        </h1>
        <p className="border p-2 rounded-sm bg-slate-100 text-slate-500 font-montserrat text-sm">
          helmi220602@gmail.com
        </p>
      </div>
    </div>
  );
};

export default NotChangeComponent;
