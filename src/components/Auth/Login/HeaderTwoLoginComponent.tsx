import { TypeAnimation } from "react-type-animation";

const HeaderTwoLoginComponent: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center mt-3">
      <TypeAnimation
        sequence={[
          1000,
          "Selamat Datang Di Aplikasi IRMS👋",
          1000,
          "Semangat Bekerja Keselamatan Tetap Dijaga",
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
        className="text-white text-base font-poppins"
      />
    </div>
  );
};

export default HeaderTwoLoginComponent;
