import { Link } from "react-router-dom";
import notFoundGif from "../assets/404.gif";
const NotFound = () => {
  return (
    <>
      <section className="fixed inset-0 flex h-dvh w-screen items-center justify-center overflow-hidden bg-white px-6 py-6">
        <div className="flex h-full w-full max-w-6xl flex-col items-center justify-center text-center">
          {/* GIF */}
          <img
            src={notFoundGif}
            alt="404 Not Found"
            className="max-h-[55vh] w-auto max-w-full select-none lg:max-h-[60vh]"
            draggable={false}
          />

          {/* Content */}
          <div className="-mt-4">
            <h1 className="font-cabinet text-3xl font-extrabold text-bg-primary sm:text-5xl lg:text-6xl">
              Looks like you're lost
            </h1>

            <p className="mx-auto mt-3 max-w-xl font-inter text-text-primary text-base text-bg-text-primary lg:text-lg">
              The page you are looking for doesn't exist or may have been moved.
            </p>

            <Link
              to="/"
              className="mt-7 inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-inter text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90 active:scale-95"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
