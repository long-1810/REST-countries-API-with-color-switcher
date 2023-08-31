import moonIconFull from "../../assets/images/moon-solid.svg";
import moonIconRegular from "../../assets/images/moon-regular.svg";
import "../../styles/header.scss";
import { useContext } from "react";
import { PageData } from "../../App";

export default function Header() {
  const { darkMode } = useContext(PageData)[0];
  const setPageData = useContext(PageData)[1];

  function toggleDarkMode() {
    setPageData((oldPageData) => ({
      ...oldPageData,
      darkMode: !darkMode,
    }));
  }

  return (
    <header className={`header ${darkMode ? "header--dark" : ""}`}>
      <h1 className="header__title">Where in the world?</h1>
      <button className="header__toggler" onClick={toggleDarkMode}>
        <img
          src={darkMode ? moonIconFull : moonIconRegular}
          alt="icon-search"
          className="header__toggler__moon-icon"
        />
        <p className="header__toggler__text">Dark Mode</p>
      </button>
    </header>
  );
}
