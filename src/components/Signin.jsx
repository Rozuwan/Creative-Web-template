import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import NavLogo from "./NavLogo";
import NavigateBtn from "./NavigateBtn";
const Signin = () => {
  return (
    <>
      {/* header */}
      <header className="px-4 py-4">
        <nav className="mx-auto max-w-6xl flex justify-between items-center  ">
          <NavLogo />
        </nav>
      </header>
      {/* end header  */}

      {/* Form */}
      <div className="px-6 py-4">
        <div className="mx-auto max-w-2xl ">
          <div className="mb-6">
            <NavigateBtn />
          </div>
          <h1 className="font-cabinet font-bold text-5xl mb-2 text-center">
            Welcome back, Creative!
          </h1>
          <div className="max-w-sm mx-auto ">
            <form className="  mt-10 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-0 "
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    required
                    className="text-sm font-semibold text-text-primary"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border px-4 py-3 transition border-gray-300  focus:outline-none focus:ring-0 "
                />
              </div>

              <div className="flex gap-4">
                <Link
                  to="/signup"
                  className="flex-1 rounded-xl text-primary py-3 text-center font-semibold hover:underline  "
                >
                  Join the Community
                </Link>

                <Link
                  to="/signin"
                  className="flex-1 bg-primary py-3 rounded-full text-center font-semibold text-white transition hover:bg-primary-light active:scale-95"
                >
                  <button>Sign In To Creative</button>
                </Link>
              </div>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-300"></div>

              <span className="text-md text-text-primary italic">or</span>

              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            <button className="w-full rounded-full py-2 px-5 flex items-center justify-center font-semibold transition relative bg-primary text-white -mt-3 cursor-pointer active:scale-95">
              <RiTwitterXLine className="absolute left-5 size-3em" />{" "}
              <span>Join with Twitter</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
