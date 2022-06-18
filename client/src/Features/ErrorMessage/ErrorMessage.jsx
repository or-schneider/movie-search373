import style from "./ErrorMessage.module.css";

function ErrorMessage({ className = "", message = "" }) {
  return <p className={`${className} ${style.root}`}>&#x200b;{message}</p>;
}

export default ErrorMessage;
