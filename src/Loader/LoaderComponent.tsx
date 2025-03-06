import { motion } from "framer-motion";
import { LuLoaderCircle } from "react-icons/lu";

interface LoaderComponentProps {
  loading: boolean;
}

const LoaderComponent: React.FC<LoaderComponentProps> = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9998]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex flex-col items-center"
          >
            <LuLoaderCircle className="animate-spin text-white w-10 h-10 mb-3" />
            <p className="text-white animate-pulse">Please wait...</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoaderComponent;
