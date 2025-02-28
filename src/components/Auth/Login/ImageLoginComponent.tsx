import BgLogin from "../../../assets/bgLogin.jpg";

const ImageLoginComponent: React.FC = () => {
  return (
    <img
      src={BgLogin}
      alt="background image"
      className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
    />
  );
};

export default ImageLoginComponent;
