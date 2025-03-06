import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

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
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <Loader2 className="animate-spin text-green-600 w-10 h-10 mb-3" />
            <p className="text-gray-700">Mengirim...</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoaderComponent;
