import Navbar from "../components/Navbar";
import HeroImg from "../assets/hero.png";
import Communitybtn from "../components/button/Communitybtn";
import { Link } from "react-router-dom";
import { usePicsum } from "../context/PiscumContext";
import Card from "../components/Card";

// hero section stats
const stats = [
  { value: "27M", label: "Inspiration" },
  { value: "14K", label: "Creators" },
  { value: "8K", label: "Projects" },
];

// second section btn data
const btnData = [
  { data: "View All", span: "2.7k" },
  { data: "Illustration", span: "1.2k" },
  { data: "Branding", span: "1.4k" },
  { data: "Product Design", span: "1.7k" },
  { data: "Typography", span: "989" },
];

const Homepage = () => {
  const { images, loading, error } = usePicsum();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <Navbar />

      {/* overflow-x-hidden prevents horizontal scroll on small screens */}
      <main className="overflow-x-hidden">
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

              {/* Center buttons on mobile, left-align on desktop */}
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <Communitybtn />
                <Link
                  to="/signin"
                  className="inline-block rounded-full border border-gray-300 bg-white px-8 py-2 text-center font-medium text-gray-900 shadow-md hover:bg-primary hover:text-white active:scale-95"
                >
                  Sign In
                </Link>
              </div>

              {/* Center stats on mobile, left-align on desktop */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-15 md:justify-start">
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
                className="w-full max-w-full h-auto object-contain md:max-w-none md:scale-130 md:translate-x-55 md:translate-y-10"
              />
            </div>
          </div>
        </section>
        {/* End Hero section */}

        {/* Second layout */}
        <section className="px-10 py-18">
          <div className="mx-auto max-w-6xl  ">
            <h2 className="text-5xl font-bold">Latest Inspiration</h2>

            {/* button row: wrap on mobile, left-align */}
            <div className="flex flex-wrap justify-center gap-2 mt-18 md:justify-start">
              {btnData.map(({ data, span }) => {
                return (
                  <button
                    key={data}
                    className="px-2 py-1 border-2 border-text-secondary rounded-full text-base active:scale-95"
                  >
                    {data}{" "}
                    <span className="text-base bg-text-secondary rounded-full px-2 text-white">
                      {span}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* grid images */}
            <div className="relative">
              {/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
              <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {loading ? (
                  <div className="col-span-3 flex items-center justify-center py-20">
                    Loading...
                  </div>
                ) : error ? (
                  <div className="col-span-3 flex items-center justify-center py-20 text-red-500">
                    {error}
                  </div>
                ) : (
                  images
                    .slice(0, 9)
                    .map((image) => <Card key={image.id} image={image} />)
                )}
              </div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white via-white/70 to-transparent pointer-events-none" />

              {/* Desktop floating button — hidden on mobile/tablet */}
              <div className="hidden lg:block absolute top-180 right-120 -translate-y-3">
                <Communitybtn />
              </div>
            </div>

            {/* Mobile/tablet inline button — hidden on desktop */}
            <div className="flex justify-center lg:hidden mt-6">
              <Communitybtn />
            </div>
          </div>
        </section>
        {/*END Second layout */}
      </main>
    </>
  );
};

export default Homepage;
