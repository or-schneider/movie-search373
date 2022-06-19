import style from "./SearchPageNavigation.module.css";

function SearchPageNavigation({
  page = 1,
  totalPages = 1,
  onPreviousClick = () => {},
  onNextClick = () => {},
  searchInProgress = false,
}) {
  function handlePreviousClick() {
    if (searchInProgress) return;
    if (page <= 1) return;
    onPreviousClick();
  }
  function handleNextClick() {
    if (searchInProgress) {
      return;
    }
    if (page >= totalPages) return;
    onNextClick();
  }
  return (
    <div className={style.root}>
      <button disabled={page <= 1} onClick={handlePreviousClick}>
        Previous
      </button>
      <div>{page}</div>
      <button disabled={page >= totalPages} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default SearchPageNavigation;
