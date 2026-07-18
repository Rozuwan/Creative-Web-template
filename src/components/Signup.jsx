import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import NavLogo from "./NavLogo";


const Signup = () => {
  return (
    <>
      {/* header */}
      <header className="px-4 py-4">
        <nav className="mx-auto max-w-6xl flex justify-between items-center  ">
          <NavLogo />
        </nav>
      </header>
      {/* end header  */}
      <div className="min-h-screen py-16 ">
 
      {/* profile */}
      <div className="h-15 w-15 overflow-hidden rounded-full mx-auto mb-3">
        <img
          src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>
      {/* end of profile */}

      {/* start signup */}
      <h1 className="mb-2 max-w-4xl px-4  mx-auto text-center font-cabinet text-5xl font-bold">
        You've been invited by Mark Hooker to join Creative
      </h1>
      <div className="max-w-sm mx-auto">
        <form className="mt-10 flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="mb-2 block text-sm font-semibold text-text-primary"
            >
              Full Name
            </label>

            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-0"
            />
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-text-primary"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-0"
            />
          </div>

          {/* Email */}
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-0"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-text-primary"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex gap-4">
            <Link
              to="/signin"
              className="flex-1 py-3 text-center font-semibold text-primary hover:underline"
            >
              Go to Login
            </Link>

            <button
              type="submit"
              className="flex-1 rounded-full bg-primary py-3 font-semibold text-white transition hover:bg-primary-light active:scale-95"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="text-md italic text-text-primary">or</span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <button className="relative -mt-3 flex w-full cursor-pointer items-center justify-center rounded-full bg-primary px-5 py-2 font-semibold text-white transition active:scale-95">
          <RiTwitterXLine className="absolute left-5 text-xl" />
          <span>Sign Up with Twitter</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default Signup;
