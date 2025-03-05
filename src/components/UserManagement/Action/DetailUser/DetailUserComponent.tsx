import HeaderComponent from "../../../HeaderComponent";
import CardDetailComponent from "./DetailComp/CardDetailComponent";

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
    <>
      <div className="flex flex-col w-full">
        {/* header top */}
        <HeaderComponent
          title="detail user"
          routeOne="dashboard"
          routeTwo="user management"
          routeThree="detail user"
        />
        {/* Card Detail User */}
        <CardDetailComponent user={user} />
      </div>
    </>
  );
};

export default DetailUserComponent;
