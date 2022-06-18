import style from "./Modal.module.css";

function Modal({ show, children, onBackgroundClick, className, invisible }) {
  function handleContentClick(event) {
    event.stopPropagation();
  }
  if (!show) return null;
  return (
    <div className={style.root + " " + (invisible ? style.invisible : "")}>
      <div onMouseDown={onBackgroundClick} className={style.background}>
        <div
          onClick={handleContentClick}
          onMouseDown={handleContentClick}
          className={style.content + " " + className}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
