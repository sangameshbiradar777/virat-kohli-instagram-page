import "./Search.css";
import { useState, useRef } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const searchIconRef = useRef();
  const searchInpuRef = useRef();

  const handleOnSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleOnClearSearchText = () => {
    setSearchText("");
    searchInpuRef.current.focus();
  };

  return (
    <div className="search">
      <span
        ref={searchIconRef}
        className="search__icon material-symbols-rounded"
      >
        search
      </span>
      <input
        className="search__input"
        ref={searchInpuRef}
        value={searchText}
        onChange={handleOnSearchTextChange}
        type="text"
        placeholder="Search"
      />
      {searchText && (
        <span
          onClick={handleOnClearSearchText}
          className="close__icon material-symbols-rounded"
        >
          cancel
        </span>
      )}
    </div>
  );
};

export default Search;
