import SpinnerIcon from "./SpinnerIcon.svg";

function Spinner({ show = true, ...rest }) {
  if (!show) return null;
  return <img alt="spinner" {...rest} src={SpinnerIcon}></img>;
}

export default Spinner;
