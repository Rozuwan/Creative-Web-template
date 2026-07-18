import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const NavigateBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="cursor-pointer text-text-primary transition hover:text-primary"
    >
      <FaArrowLeft className="size-5" />
    </button>
  );
};

export default NavigateBtn;
