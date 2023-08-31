import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageData } from "../../App";

export default function Main(props) {
  const {
    flagSource,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props;

  const contextArray = useContext(PageData);
  const { countriesData } = contextArray[0];

  const [formattedPopulation, setFormattedPopulation] = useState("");
  const [formattedLanguages, setFormattedLanguages] = useState("");
  const [formattedCurrencies, setFormattedCurrencies] = useState("");

  const [borderList, setBorderList] = useState([]);

  useEffect(() => {
    setFormattedPopulation(population?.toLocaleString("de-DE"));
    currencies &&
      setFormattedCurrencies(
        currencies.map((currency) => currency.name).join(", ")
      );
    languages &&
      setFormattedLanguages(
        languages.map((language) => language.name).join(", ")
      );

    // In data.json, borders properties contains only the "cioc" (country code) names
    if (borders) {
      let formattedBorders = [];
      countriesData.forEach((country) => {
        borders.forEach((countryBorder) => {
          if (countryBorder === country.cioc) {
            formattedBorders.push(country.name);
          }
        });
      });

      setBorderList(
        formattedBorders.map((border) => (
          <Link
            key={nanoid()}
            className="main__info__value main__info__value--tag"
            to={`/${border}`}
          >
            {border}
          </Link>
        ))
      );
    } else {
      setBorderList(<span className="main__info__value--no-value">None</span>);
    }
  }, [name, population, currencies, languages, borders, countriesData]);

  return (
    <div className="main">
      <img src={flagSource} alt={name || "None"} className="main__flag"></img>
      <div className="main__info">
        <h2 className="main__info__name">{name || "None"}</h2>

        <div className="main__info__col-1">
          <p className="main__info__label">
            Native Name:{" "}
            <span className="main__info__value">{nativeName || "None"}</span>
          </p>
          <p className="main__info__label">
            Population:{" "}
            <span className="main__info__value">
              {formattedPopulation || "None"}
            </span>
          </p>
          <p className="main__info__label">
            Region:{" "}
            <span className="main__info__value">{region || "None"}</span>
          </p>
          <p className="main__info__label">
            Sub Region:{" "}
            <span className="main__info__value">{subregion || "None"}</span>
          </p>
          <p className="main__info__label">
            Capital:{" "}
            <span className="main__info__value">{capital || "None"}</span>
          </p>
        </div>

        <div className="main__info__col-2">
          <p className="main__info__label">
            Top Level Domain:{" "}
            <span className="main__info__value">
              {topLevelDomain || "None"}
            </span>
          </p>
          <p className="main__info__label">
            Currencies:{" "}
            <span className="main__info__value">
              {formattedCurrencies || "None"}
            </span>
          </p>
          <p className="main__info__label">
            Languages:{" "}
            <span className="main__info__value">
              {formattedLanguages || "None"}
            </span>
          </p>
        </div>

        <div className="main__info__border-countries">
          <p className="main__info__label">Border Countries:</p>
          <div className="main__info__border-countries__list">{borderList}</div>
        </div>
      </div>
    </div>
  );
}
