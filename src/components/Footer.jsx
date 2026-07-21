import { Link } from "react-router-dom";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import NavLogo from "./NavLogo";

const Footer = () => {
  return (
    <footer className="px-6 py-12 lg:px-10 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        {/* First Row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <NavLogo />
          </div>

          {/* Newsletter */}
          <div className="flex w-full flex-col items-center gap-4 lg:w-auto sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="h-10 w-full max-w-md border border-gray-200 px-5 text-sm outline-none sm:w-auto"
            />

            <Link
              to="/signup"
              className="flex h-10 w-full max-w-md items-center justify-center rounded-full bg-primary px-6 font-sans text-base font-semibold text-white active:scale-95 sm:w-auto"
            >
              Join Newsletter
            </Link>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="order-1 flex justify-center items-center gap-4 lg:order-2">
            <a
              href="#"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition-all duration-300 hover:bg-primary"
            >
              <FaXTwitter className="text-lg text-primary transition-colors duration-300 group-hover:text-white" />
            </a>

            <a
              href="https://github.com/Rozuwan/Creative-Web-template"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition-all duration-300 hover:bg-primary"
            >
              <FaGithub className="text-lg text-primary transition-colors duration-300 group-hover:text-white" />
            </a>

            <a
              href="#"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition-all duration-300 hover:bg-primary"
            >
              <FaTelegramPlane className="text-lg text-primary transition-colors duration-300 group-hover:text-white" />
            </a>
          </div>

          <div className="order-2 flex justify-center gap-10 text-sm font-medium text-text-primary lg:order-1">
            <Link
              to="/blog"
              className="hover:underline hover:decoration-2 hover:decoration-primary"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="hover:underline hover:decoration-2 hover:decoration-primary"
            >
              Contact
            </Link>

            <Link
              to="/privacy"
              className="hover:underline hover:decoration-2 hover:decoration-primary"
            >
              Privacy
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <p className="mx-auto mt-2 max-w-3xl text-center text-xs leading-6 text-slate-400 lg:mx-0 lg:w-[90%] lg:max-w-none lg:text-left">
          Some of our posts may contain affiliate links to partner brands. We
          earn a small commission if you click the link and make a purchase.
          There is no extra cost to you, so it's just a nice way to help support
          the site. All images, videos, and other content posted on the site are
          attributed to their creators and original sources. If you see
          something wrong here or would like to have it removed, please{" "}
          <Link to="/contact" className="text-primary hover:underline">
            contact us.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
