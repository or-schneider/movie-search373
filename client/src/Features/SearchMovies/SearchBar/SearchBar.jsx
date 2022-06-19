import { useState } from "react";
import style from "./SearchBar.module.css";
import SearchIcon from "./SearchIcon.svg";
function SearchBar({
  onSearchSumbit = () => {},
  initialQuery = null ? "" : "",
}) {
  const [searchInput, setSearchInput] = useState(initialQuery);

  function handleSearchSubmit(event) {
    event.preventDefault();
    onSearchSumbit(searchInput);
  }
  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }
  return (
    <form className={style.root} onSubmit={handleSearchSubmit}>
      <div className={style.searchBarContainer}>
        <img className={style.searchIcon} src={SearchIcon} alt="Search" />
        <input
          className={style.searchBarInput}
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchBar;
