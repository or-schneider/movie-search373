import { useState } from "react";
import style from "./SearchBar.module.css";

function SearchBar({ onSearchSumbit = () => {} }) {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchSubmit(event) {
    event.preventDefault();
    onSearchSumbit(searchInput);
  }
  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }
  return (
    <form className={style.root} onSubmit={handleSearchSubmit}>
      <input
        type="text"
        onChange={handleSearchInputChange}
        placeholder="Search"
      />
    </form>
  );
}

export default SearchBar;
