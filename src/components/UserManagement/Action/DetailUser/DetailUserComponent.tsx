import FooterComponent from "../../../Footer/FooterComponent";
import CardDetailComponent from "./DetailComp/CardDetailComponent";
import HeaderDetailComponent from "./DetailComp/HeaderDetailComponent";

const DetailUserComponent: React.FC = () => {
  const user = {
    id: 24,
    npk: "11211043",
    name: "Helmi",
    email: "helmi123@gmail.com",
    roles: "Superintendent",
    job: "Manager",
    department: "Information Technology",
    superior: "Daniel",
  };
  return (
    <div className="flex flex-col h-full justify-between gap-10">
      <div className="flex flex-col w-full">
        {/* header top */}
        <HeaderDetailComponent />
        {/* Card Detail User */}
        <CardDetailComponent user={user}/>
      </div>
      <FooterComponent />
    </div>
  );
};

export default DetailUserComponent;
