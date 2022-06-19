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
      <div className={style.navigationContainer}>
        <button
          className={style.button}
          disabled={page <= 1}
          onClick={handlePreviousClick}
        >
          {"<"}
        </button>
        <div className={style.currentPage}>{page}</div>
        <button
          className={style.button}
          disabled={page >= totalPages}
          onClick={handleNextClick}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default SearchPageNavigation;
