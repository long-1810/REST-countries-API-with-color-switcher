import { useContext } from "react";
import { PageData } from "../App";
import Header from "../components/Common/Header";
import Main from "../components/Home/Main";
import "../styles/home.scss";

export default function Home() {
  const { darkMode } = useContext(PageData)[0];

  return (
    <div className={`home-container ${darkMode ? "home-container--dark" : ""}`}>
      <Header />
      <Main />
    </div>
  );
}
