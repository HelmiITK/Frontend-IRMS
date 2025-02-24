import UserIcon from "../../assets/user.png";

const ImageIconComponent = () => {
  return (
    <img
      src={UserIcon}
      alt="user icon"
      className="hidden lg:block w-44 h-44 p-2 mr-3 rounded-full shadow-md opacity-80"
    />
  );
};

export default ImageIconComponent;
