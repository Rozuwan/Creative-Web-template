import Navbar from "../components/Navbar";
import HeroImg from "../assets/hero.png";
import cardimg from "../assets/fourthSectionCard.jpg";
import Communitybtn from "../components/button/Communitybtn";
import { Link } from "react-router-dom";
import Card from "../components/Card";
// context
import { usePicsum } from "../context/PiscumContext";
// swiper
import "swiper/css";
import TrendingCollectionSlider from "../components/TrendingCollectionSlider";
import CreatorCard from "../components/CreatorCard";
import PriceCard from "../components/PriceCard";

// hero section stats
const stats = [
  { value: "27M", label: "Inspiration" },
  { value: "14K", label: "Creators" },
  { value: "8K", label: "Projects" },
];

// second section section btn data
const btnData = [
  { data: "View All", span: "2.7k" },
  { data: "Illustration", span: "1.2k" },
  { data: "Branding", span: "1.4k" },
  { data: "Product Design", span: "1.7k" },
  { data: "Typography", span: "989" },
];
// Third Section (user data with photo)
const userData = [
  {
    name: "Emma Wilson",
    title: "@emmawilson",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    name: "James Carter",
    title: "@jamescarter",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Sophia Brown",
    title: "@sophiabrown",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
  },
  {
    name: "Michael Lee",
    title: "@michaellee",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    name: "Olivia Martin",
    title: "@oliviamartin",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    name: "Daniel Walker",
    title: "@danielwalker",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&q=80",
  },
  {
    name: "Ava Johnson",
    title: "@avajohnson",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    name: "Ethan Harris",
    title: "@ethanharris",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&q=80",
  },
  {
    name: "Mia Thompson",
    title: "@miathompson",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
  },
  {
    name: "Noah Anderson",
    title: "@noahanderson",
    image:
      "https://images.unsplash.com/photo-1641260774125-04d527b376a5?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Homepage = () => {
  // Context
  const { images, loading, error } = usePicsum();

  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="rounded-bl-[80px]  bg-gray-50 px-10 py-18 overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
            {/* Left content */}
            <div className="flex basis-full flex-col items-center gap-8 text-center md:basis-3/5 md:items-start md:text-left ">
              <h1 className="font-cabinet text-4xl font-bold md:text-[64px] lg:text-[88px] lg:font-extrabold">
                The platform for creative{" "}
                <span className="relative inline-block text-primary">
                  minds
                  {/* UnderLine below minds! */}
                  <svg
                    className="absolute -bottom-0.5 -left-2 "
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

              <p className="max-w-155 text-base text-text-primary md:text-xl ">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>

              <div className="flex items-center justify-center gap-4 md:justify-start">
                <Communitybtn />
                <Link
                  to="/signin"
                  className="inline-block rounded-full border border-gray-300 bg-white px-6 py-2 text-center font-medium text-gray-900 shadow-md hover:bg-primary hover:text-white active:scale-95"
                >
                  Sign In
                </Link>
              </div>

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

        {/* Second Section */}
        <section className="px-10 py-18">
          <div className="mx-auto max-w-6xl  ">
            <h2 className="text-5xl font-extrabold font-cabinet">
              Latest inspiration
            </h2>

            {/* button*/}
            <div className="flex flex-wrap justify-center gap-2 mt-12 md:justify-start">
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

              <div className="hidden lg:block absolute top-180 right-120 -translate-y-3">
                <Communitybtn />
              </div>
            </div>

            <div className="flex justify-center lg:hidden mt-6">
              <Communitybtn />
            </div>
          </div>
        </section>
        {/*END Second section */}

        {/* Third Section */}
        <section className="px-10 py-18 bg-bg-secondary">
          <div className="mx-auto max-w-6xl  ">
            <h2 className="text-white font-cabinet font-extrabold text-5xl text-center mb-20">
              Trending collections
            </h2>
            <TrendingCollectionSlider userData={userData} images={images} />
          </div>
        </section>
        {/* END Third Section */}

        {/* Fourth Section */}
        <section className="px-10 py-18">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-cabinet text-[42px] text-bg-primary sm:text-4xl lg:text-5xl font-extrabold text-center leading-tight ">
              Join over 2M creatives from around <br />
              the world
            </h2>
            <div className="mt-15 grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {/* Card 1 */}
                <CreatorCard userData={userData} images={images} />
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <img
                  src={cardimg}
                  alt="Creative Community"
                  className="object-fill bg-amber-500 "
                />

                <div className="mt-5">
                  <h2 className="mt-15 font-cabinet text-4xl font-extrabold leading-tight">
                    More than a community
                  </h2>

                  <p className="mt-5 mb-8 max-w-md text-xl leading-relaxed text-bg-primary font-normal">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking.
                  </p>

                  <div className="flex justify-center lg:justify-start">
                    <Communitybtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END Fourth Section */}

        {/* Fifth Section */}
        <section className="px-10 py-18 bg-gray-50">
          <div className="mx-auto max-w-6xl ">
            <div className="">
              <h2 className="font-cabinet font-extrabold text-center text-5xl">
                Become a member of the best <br />
                creative community
              </h2>
            </div>
            <div className="">
              <PriceCard />
            </div>
          </div>
        </section>
        {/* END Fifth Section */}
      </main>
    </>
  );
};

export default Homepage;
