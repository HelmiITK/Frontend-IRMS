import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface PhotoComponentProps {
  openImage: boolean;
  setOpenImage: React.Dispatch<React.SetStateAction<boolean>>;
  photo: string;
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({
  openImage,
  setOpenImage,
  photo,
}) => {
  return (
    <>
      {openImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-[9998]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white mx-2 lg:mx-0 p-4 rounded-lg shadow-lg relative"
          >
            <button
              className="absolute top-2 right-2 text-red-600 hover:text-gray-700 bg-white rounded-md lg:p-2"
              onClick={() => setOpenImage(false)}
            >
              <IoClose size={23} />
            </button>
            <img
              src={photo}
              alt="Incident"
              className="w-full lg:max-w-[900px] max-h-[500px] rounded"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PhotoComponent;
