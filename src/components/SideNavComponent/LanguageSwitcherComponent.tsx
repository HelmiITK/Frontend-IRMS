import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import UKFlag from "../../assets/en.png"; // Import bendera UK
import IDFlag from "../../assets/id.png"; // Import bendera Indonesia

interface LanguageSwitcherProps {
  language: string;
  handleLanguageChange: (lang: string) => void;
}

const LanguageSwitcherComponent: React.FC<LanguageSwitcherProps> = ({
  language,
  handleLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: "English", flag: UKFlag },
    { code: "id", label: "Indonesia", flag: IDFlag },
  ];

  const selectedLanguage = languages.find((lang) => lang.code === language);

  // Menutup dropdown jika klik di luar komponen
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Tombol utama untuk membuka dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center border rounded-md px-3 py-1 bg-white text-primary"
      >
        <img src={selectedLanguage?.flag} alt="Flag" className="w-6 h-4 mr-2" />
        {selectedLanguage?.label}
      </button>

      {/* Dropdown dengan animasi */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1 }}
          className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg overflow-hidden"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                handleLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-primary"
            >
              <img src={lang.flag} alt="Flag" className="w-6 h-4 mr-2" />
              {lang.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcherComponent;
