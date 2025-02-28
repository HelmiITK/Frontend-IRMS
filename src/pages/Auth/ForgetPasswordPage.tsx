import { useState } from "react";
import ImageForgetPassComponent from "../../components/Auth/ForgetPassword/ImageForgetPassComponent";
import FormForgetPassComponent from "../../components/Auth/ForgetPassword/FornForgetPassComponent";

const ForgetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col mt-6 gap-4 justify-center items-center lg:flex lg:flex-row lg:gap-4 lg:translate-y-24 lg:mt-0">
        {/* imgae */}
        <ImageForgetPassComponent />
        {/* content and forn */}
        <FormForgetPassComponent
          email={email}
          setEmail={setEmail}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />
      </div>
    </>
  );
};

export default ForgetPasswordPage;
