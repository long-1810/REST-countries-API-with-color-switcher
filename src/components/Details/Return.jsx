import arrowLeftIcon from "../../assets/images/arrow-left.svg";
import { useNavigate } from "react-router-dom";

export default function Return() {
  const navigate = useNavigate();

  return (
    <button
      className="back"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={arrowLeftIcon} alt="Return" className="back__icon" />
      <p className="back__text">Back</p>
    </button>
  );
}
