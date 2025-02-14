import { useEffect, useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";

const FullScreenComponent: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <button
      className="hidden lg:block group hover:scale-110 ease-linear duration-150"
      onClick={toggleFullScreen}
    >
      {isFullScreen ? (
        <AiOutlineFullscreenExit size={24} />
      ) : (
        <AiOutlineFullscreen size={24} />
      )}
    </button>
  );
};

export default FullScreenComponent;
