import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderOneLoginComponent from "../../components/Auth/Login/HeaderOneLoginComponent";
import HeaderTwoLoginComponent from "../../components/Auth/Login/HeaderTwoLoginComponent";
import FormLoginComponent from "../../components/Auth/Login/FormLoginComponent";
import ImageLoginComponent from "../../components/Auth/Login/ImageLoginComponent";

const LoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false); //state menyimpan perubahan icon password
  const [onClickLogin, setOnClickLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  // handle password icon
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setOnClickLogin(true); //tampilkan loader

    setTimeout(() => {
      setOnClickLogin(false);
      navigate("/dashboard");
    }, 2000);
  };

  // handle navigate to forget pass link
  const handleForgetPass = () => {
    navigate("/forget-password");
  };
  return (
    <div className="container mx-auto min-h-screen w-full overflow-hidden">
      {/* image */}
      <ImageLoginComponent />
      <div className="relative z-10 min-h-screen bg-opacity-25 lg:flex lg:flex-col lg:items-center lg:justify-center">
        {/* header */}
        <HeaderOneLoginComponent />

        {/* header 2 */}
        <HeaderTwoLoginComponent />

        {/* form login */}
        <FormLoginComponent
          onClickLogin={onClickLogin}
          togglePasswordVisibility={togglePasswordVisibility}
          handleLogin={handleLogin}
          handleForgetPass={handleForgetPass}
          passwordVisible={passwordVisible}
        />
      </div>
    </div>
  );
};

export default LoginPage;
