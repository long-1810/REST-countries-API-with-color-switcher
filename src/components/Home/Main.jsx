import SearchBar from "./SearchBar";
import FilterDropDown from "./FilterDropDown";
import CountryCard from "./CountryCard";
import { useMemo } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { PageData } from "../../App";
import { useState } from "react";

export default function Main() {
  const { countriesData } = useContext(PageData)[0];

  const [filterOption, setFilterOption] = useState("None");
  const [searchBarValue, setSearchBarValue] = useState("");

  const countryCards = useMemo(() => {
    let filteredCountriesBySearchBar = filterBySearchBar(
      searchBarValue,
      countriesData
    );
    let filteredCountriesByFilterBar = filterByFilterBar(
      filterOption,
      filteredCountriesBySearchBar
    );

    return filteredCountriesByFilterBar.map((country) => {
      const { name, population, region, capital, flag } = country;
      return (
        <CountryCard
          key={nanoid()}
          name={name}
          population={population}
          region={region}
          capital={capital}
          flag={flag}
        />
      );
    });
  }, [searchBarValue, filterOption]);

  function handleSearchBarChange(event) {
    setSearchBarValue(event.target.value);
  }

  function filterBySearchBar(searchBarValue, countriesData) {
    if (searchBarValue) {
      let filteredCountries = [];
      countriesData.forEach((countryData) => {
        const countryName = countryData.name.toLowerCase();
        if (countryName.includes(searchBarValue.toLowerCase())) {
          filteredCountries.push(countryData);
        }
      });
      return filteredCountries;
    } else {
      return countriesData;
    }
  }

  function filterByFilterBar(filterRegion, countriesData) {
    if (filterRegion === "None") {
      return countriesData;
    } else {
      let filteredCountries = [];
      countriesData.forEach((countryData) => {
        const countryRegion = countryData.region;
        if (countryRegion === filterRegion) {
          filteredCountries.push(countryData);
        }
      });
      return filteredCountries;
    }
  }

  return (
    <main className="main">
      <div className="main__functionality">
        <SearchBar
          value={searchBarValue}
          handleChange={handleSearchBarChange}
        />
        <FilterDropDown
          filterOption={filterOption}
          setFilterOption={setFilterOption}
        />
      </div>
      <div className="main__list-countries">{countryCards}</div>
    </main>
  );
}
