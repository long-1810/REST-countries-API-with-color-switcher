import { Link } from "react-router-dom";

export default function CountryCard(props) {
  const { name, population, region, capital, flag } = props;

  return (
    <Link to={`/${name}`} className="card">
      <img src={flag} alt={name || "No data"} className="card__flag" />
      <div className="card__info">
        <h2 className="card__info__country-name">{name || "No data"}</h2>
        <p className="card__info__label">
          Population:{" "}
          <span className="card__info__number">
            {population.toLocaleString("de-DE") || "No data"}
          </span>
        </p>
        <p className="card__info__label">
          Region:{" "}
          <span className="card__info__name">{region || "No data"}</span>
        </p>
        <p className="card__info__label">
          Capital:{" "}
          <span className="card__info__name">{capital || "No data"}</span>
        </p>
      </div>
    </Link>
  );
}
