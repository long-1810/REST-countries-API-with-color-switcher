import angleDownIcon from "../../assets/images/angle-down.svg";

export default function FilterDropDown(props) {
  const { filterOption, setFilterOption } = props;

  return (
    <div className="filter">
      <div className="filter__drop-button">
        <p className="filter__drop-button__text">
          {filterOption === "None" ? "Filter by Region" : filterOption}
        </p>
        <img
          src={angleDownIcon}
          alt="Icon"
          className="filter__drop-button__icon"
        />
      </div>

      {/* For the styling only */}
      <div className="filter__gap"></div>

      <div className="filter__filter-options">
        {filterOption !== "None" && (
          <button
            className="filter__filter-options__filter-option"
            onClick={() => {
              setFilterOption("None");
            }}
          >
            None
          </button>
        )}

        <button
          className="filter__filter-options__filter-option"
          onClick={() => {
            setFilterOption("Africa");
          }}
        >
          Africa
        </button>
        <button
          className="filter__filter-options__filter-option"
          onClick={() => {
            setFilterOption("America");
          }}
        >
          America
        </button>
        <button
          className="filter__filter-options__filter-option"
          onClick={() => {
            setFilterOption("Asia");
          }}
        >
          Asia
        </button>
        <button
          className="filter__filter-options__filter-option"
          onClick={() => {
            setFilterOption("Europe");
          }}
        >
          Europe
        </button>
        <button
          className="filter__filter-options__filter-option"
          onClick={() => {
            setFilterOption("Oceania");
          }}
        >
          Oceania
        </button>
      </div>
    </div>
  );
}
