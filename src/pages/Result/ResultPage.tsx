import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderResultComponent from "../../components/Result/HeaderResultComponent";

const ResultPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between bg-gray-50">
      {/* header */}
      <HeaderResultComponent />

      {/* filter */}
      {/* table user management by daisyUI */}
      <FooterComponent />
    </div>
  );
};

export default ResultPage;
