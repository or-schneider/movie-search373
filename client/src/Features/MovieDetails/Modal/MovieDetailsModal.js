import style from "./MovieDetailsModal.module.css";
import Modal from "../../Modal/Modal.js";
import useMovieDetails from "../useMovieDetails.js";
import MovieDetailsPanel from "../Details/MovieDetailsPanel.jsx";

function MovieDetailsModal({
  show,
  onBackgroundClick,
  onCloseClick,
  movieId = null,
}) {
  const { movieDetails, movieDetailsError } = useMovieDetails({ movieId });
  function renderMovieDetailsPanel() {
    if (movieDetails)
      return (
        <MovieDetailsPanel movieDetailsData={movieDetails}>
          <button className={style.closeButton}>
            <div className={style.closeButtonIcon} onClick={onCloseClick}>
              X
            </div>
          </button>
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
      {renderMovieDetailsPanel()}
    </Modal>
  );
}

export default MovieDetailsModal;
