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
    <>
      {/* image */}
      <ImageLoginComponent />

      {/* header */}
      <div className="flex flex-col justify-center items-center mb-10">
        <HeaderOneLoginComponent />

        <div className="flex flex-col items-center justify-center w-full gap-4 mx-4 lg:mx-0">
          {/* type animation */}
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
    </>
  );
};

export default LoginPage;
