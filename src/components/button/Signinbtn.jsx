import { Link } from "react-router-dom";

const Signinbtn = () => {
  return (
    <div>
      <Link to="/signin">
        <button className="cursor-pointer relative text-sm md:text-base after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
          Sign in
        </button>
      </Link>
    </div>
  );
};

export default Signinbtn;
