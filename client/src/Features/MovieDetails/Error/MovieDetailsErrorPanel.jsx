import ErrorMessage from "../../ErrorMessage/ErrorMessage.jsx";
import style from "./MovieDetailsErrorPanel.module.css";

function MovieDetailsErrorPanel({ children, error }) {
  return (
    <div className={style.root}>
      {children}
      <ErrorMessage message={error}></ErrorMessage>
    </div>
  );
}

export default MovieDetailsErrorPanel;
