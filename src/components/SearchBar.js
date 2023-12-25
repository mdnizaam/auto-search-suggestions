import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../images/search-icon.png";
import Data from "../constants/states.json";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const handleChange = (e) => {
    const value = e.target?.value;
    setSearchInput(value);
    if (value) {
      const filteredData = Data.filter((items) => {
        return items?.name
          ?.toLocaleLowerCase()
          .includes(value?.toLocaleLowerCase());
      });
      setSearchedData(filteredData);
    } else {
      setSearchedData([]);
    }
  };
  const handleClick = (name) => {
    if (name) {
      setSearchInput(name);
      setSearchedData([]);
    }
  };
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          value={searchInput}
          onChange={handleChange}
          placeholder="Search Heare..."
        />
        <div className="search-icon">
          <img src={SearchIcon} width={25} />
        </div>
      </div>
      {searchedData?.length ? (
        <div className="search-items">
          <ul>
            {searchedData?.slice(0, 10).map((item) => {
              return (
                <li onClick={() => handleClick(item.name)}>{item?.name}</li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
