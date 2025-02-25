// import { useState } from "react";
// import Flag from "react-world-flags";

interface LanguageSwitcherProps {
  language: string; // Tambahkan language sebagai props
  handleLanguageChange: (lang: string) => void;
}

const LanguageSwitcherComponent: React.FC<LanguageSwitcherProps> = ({
  language,
  handleLanguageChange,
}) => {
  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      value={language} // Atur nilai default berdasarkan state `language`
      className="select text-white bg-transparent w-20"
    >
      <option value="en" className="text-black">
        EN
      </option>
      <option value="id" className="text-black">
        ID
      </option>
    </select>
  );
};

export default LanguageSwitcherComponent;
