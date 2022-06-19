import style from "./MovieDetailsModal.module.css";
import Modal from "../../Modal/Modal.js";
import useMovieDetails from "../useMovieDetails.js";
import MovieDetailsPanel from "../Details/MovieDetailsPanel.jsx";
import Spinner from "../../Spinner/Spinner.jsx";
import MovieDetailsErrorPanel from "../Error/MovieDetailsErrorPanel.jsx";

function MovieDetailsModal({
  show,
  onBackgroundClick,
  onCloseClick,
  movieId = null,
}) {
  const { movieDetails, movieDetailsError, fetchingMovieDetailsInProgress } =
    useMovieDetails({ movieId });
  function renderCloseButton() {
    return (
      <button className={style.closeButton}>
        <div className={style.closeButtonIcon} onClick={onCloseClick}>
          X
        </div>
      </button>
    );
  }
  function renderMovieDetailsPanel() {
    if (movieDetailsError)
      return (
        <MovieDetailsErrorPanel error={movieDetailsError}>
          {renderCloseButton()}
        </MovieDetailsErrorPanel>
      );
    if (movieDetails)
      return (
        <MovieDetailsPanel movieDetailsData={movieDetails}>
          {renderCloseButton()}
        </MovieDetailsPanel>
      );
  }
  return (
    <Modal
      show={true}
      invisible={!show}
      onBackgroundClick={onBackgroundClick}
      className={style.root}
    >
      <div className={style.spinnerContainer}>
        <Spinner
          show={fetchingMovieDetailsInProgress}
          className={style.spinner}
        ></Spinner>
      </div>
      {renderMovieDetailsPanel()}
    </Modal>
  );
}

export default MovieDetailsModal;
