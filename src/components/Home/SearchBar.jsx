import magnifiyingGlassIcon from "../../assets/images/magnifying-glass.svg";

export default function SearchBar(props) {
  const { value, handleChange } = props;

  return (
    <div className="search">
      <img src={magnifiyingGlassIcon} alt="Search" className="search__icon" />
      <input
        type="text"
        className="search__input"
        placeholder="Search for a country..."
        maxLength="100"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
