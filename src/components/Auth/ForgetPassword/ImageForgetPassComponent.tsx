import imgForgetPass from "./../../../assets/forget_password.jpg";

const ImageForgetPassComponent: React.FC = () => {
  return (
    <img
      src={imgForgetPass}
      alt="image forget password"
      className="w-1/2 md:w-64 lg:w-1/3"
    />
  );
};

export default ImageForgetPassComponent;
