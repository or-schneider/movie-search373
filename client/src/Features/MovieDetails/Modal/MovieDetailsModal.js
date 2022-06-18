import style from "./MovieDetailsModal.module.css";
import Modal from "../../Modal/Modal.js";
import useMovieDetails from "../useMovieDetails.js";

function MovieDetailsModal({ show, onBackgroundClick, movieId = null }) {
  const { movieDetails } = useMovieDetails({ movieId });

  return (
    <Modal
      show={true}
      invisible={!show}
      onBackgroundClick={onBackgroundClick}
      className={style.root}
    >
      <div className={style.formContainer}>{movieId}</div>
    </Modal>
  );
}

export default MovieDetailsModal;
