import Navbar from "./Navbar";
import HeroImg from "../assets/hero.png";
import Communitybtn from "./button/Communitybtn";
import { Link } from "react-router-dom";

const stats = [
  { value: "27M", label: "Inspiration" },
  { value: "14K", label: "Creators" },
  { value: "8K", label: "Projects" },
];

const Homepage = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="rounded-bl-[80px]  bg-gray-50 px-10 py-18 overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
            {/* Left content */}
            <div className="flex basis-full flex-col items-center gap-8 text-center md:basis-3/5 md:items-start md:text-left">
              <h1 className="font-cabinet text-4xl font-bold leading-tight md:text-[64px] lg:text-[80px]">
                The platform for creative{" "}
                <span className="relative inline-block text-primary">
                  minds
                  {/* UnderLine  */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 Q50 1 98 8"
                      stroke="#E0E0E7"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>

              <p className="max-w-xl text-base text-text-primary md:text-xl">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>

              <div className="flex items-center gap-4">
                <Communitybtn />
                <Link
                  to="/signin"
                  className="inline-block rounded-full border border-gray-300 bg-white px-8 py-2 text-center font-medium text-gray-900 shadow-md hover:bg-primary hover:text-white active:scale-95"
                >
                  Sign In
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-15">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <h3 className="text-2xl font-bold">{value}</h3>
                    <p className="text-base font-normal text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content */}
            <div className=" flex basis-full justify-center md:basis-2/5 md:justify-end">
              <img
                src={HeroImg}
                alt="Creative minds platform hero illustration"
                className=" w-full scale-130 translate-x-55 translate-y-10"
              />
            </div>
          </div>
        </section>
        {/* End Hero section */}
        <section className="px-10 py-18">
          <div className="mx-auto max-w-6xl">
            <h2>Latest Inspiration</h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
