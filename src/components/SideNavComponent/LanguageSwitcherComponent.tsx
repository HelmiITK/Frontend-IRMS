import { useState } from "react";
import Flag from "react-world-flags";

const LanguageSwitcherComponent = () => {
  const [language, setLanguage] = useState("ID");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);

    console.log(`Bahasa dipilih: ${lang}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="" onClick={toggleDropdown}>
        {language == "ID" ? "ID" : "EN"}
      </div>
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-md p-1 w-20 shadow-md text-black"
        >
          <li>
            <div
              className="py-2 px-2"
              onClick={() => handleLanguageChange("ID")}
            >
              <Flag
                code="ID"
                style={{ width: 25 }}
                className="bg-black p-[1px]"
              />
              <a>ID</a>
            </div>
          </li>
          <li>
            <div
              className="py-2 px-2"
              onClick={() => handleLanguageChange("EN")}
            >
              <Flag
                code="us"
                style={{ width: 25 }}
                className="bg-black p-[1px]"
              />
              <a>EN</a>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcherComponent;
