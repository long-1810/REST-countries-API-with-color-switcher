import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageData } from "../App";
import Header from "../components/Common/Header";
import Return from "../components/Details/Return";
import Main from "../components/Details/Main";
import "../styles/details.scss";

export default function Details() {
  const { country } = useParams();

  const contextArray = useContext(PageData);
  const { darkMode, countriesData } = contextArray[0];
  const setPageData = contextArray[1];

  const [selectedCountryData, setSelectedCountryData] = useState({
    flagSource: "",
    name: "",
    nativeName: "",
    population: "",
    region: "",
    subregion: "",
    capital: "",
    topLevelDomain: "",
    currencies: "",
    languages: "",
    borders: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    let selectedCountryLocal = "";

    for (let countryData of countriesData) {
      if (countryData.name === country) {
        selectedCountryLocal = countryData.name;
        setPageData((oldPageData) => ({
          ...oldPageData,
          selectedCountry: selectedCountryLocal,
        }));

        setSelectedCountryData({
          flagSource: countryData.flag,
          name: countryData.name,
          nativeName: countryData.nativeName,
          population: countryData.population,
          region: countryData.region,
          subregion: countryData.subregion,
          capital: countryData.capital,
          topLevelDomain: countryData.topLevelDomain,
          currencies: countryData.currencies,
          languages: countryData.languages,
          borders: countryData.borders,
        });
        break;
      }
    }

    if (selectedCountryLocal === "") {
      navigate("*");
    }
  }, [country]);

  return (
    <div
      className={`details-container ${
        darkMode ? "details-container--dark" : ""
      }`}
    >
      <Header />
      <Return />
      <Main {...selectedCountryData} />
    </div>
  );
}
