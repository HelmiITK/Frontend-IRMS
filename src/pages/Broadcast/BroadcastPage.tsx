import HeaderComponent from "../../components/HeaderComponent";

const BroadcastPage: React.FC = () => {
  return (
    <>
      {/* header */}
      <HeaderComponent
        title="broadcast"
        routeOne="dashboard"
        routeTwo="broadcast"
      />
    </>
  );
};

export default BroadcastPage;
