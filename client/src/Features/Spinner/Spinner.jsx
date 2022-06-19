import SpinnerIcon from "./SpinnerIcon.svg";

function Spinner({ show = true, ...rest }) {
  if (!show) return null;
  return <img {...rest} src={SpinnerIcon}></img>;
}

export default Spinner;
