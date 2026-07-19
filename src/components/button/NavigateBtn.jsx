import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const NavigateBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="cursor-pointer text-text-primary transition hover:text-primary flex items-center gap-1"
    >
      <FaArrowLeft className="size-5" /> <span>back</span>
    </button>
  );
};

export default NavigateBtn;
