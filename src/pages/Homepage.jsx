import Navbar from "../components/Navbar";
import HeroImg from "../assets/hero.png";
import Communitybtn from "../components/button/Communitybtn";
import { Link } from "react-router-dom";
import Card from "../components/Card";
// context
import { usePicsum } from "../context/PiscumContext";
// swiper
import "swiper/css";
import TrendingCollectionSlider from "../components/TrendingCollectionSlider";

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
// Third Section card data 
const cardData = [
  {
    author: "Jeffery Rogers",
    date: "06 September",
    title: "Toughening the Mind by Challenging the Body",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80",
  },
  {
    author: "Alina Meyers",
    date: "12 October",
    title: "Finding Stillness in the Middle of Chaos",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    author: "Marcus Lee",
    date: "18 March",
    title: "Exploring the Hidden Beauty of Mountain Trails",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
  },
  {
    author: "Sophia Carter",
    date: "25 April",
    title: "Designing Spaces That Inspire Everyday Living",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80",
  },
  {
    author: "Daniel Brooks",
    date: "09 May",
    title: "The Art of Slowing Down in a Fast-Paced World",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  },
  {
    author: "Emma Wilson",
    date: "14 June",
    title: "Capturing Golden Hour Through a Creative Lens",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  },
  {
    author: "Nathan Harris",
    date: "21 July",
    title: "Adventure Begins Where the Road Ends",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
  },
  {
    author: "Olivia Bennett",
    date: "03 August",
    title: "Creating Calm Interiors with Natural Elements",
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=600&q=80",
  },
  {
    author: "Ryan Cooper",
    date: "17 November",
    title: "Moments That Turn Ordinary Trips into Memories",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80",
  },
  {
    author: "Isabella Moore",
    date: "29 December",
    title: "Embracing Nature as the Ultimate Escape",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
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
            <div className="flex basis-full flex-col items-center gap-8 text-center md:basis-3/5 md:items-start md:text-left">
              <h1 className="font-cabinet text-4xl font-bold leading-tight md:text-[64px] lg:text-[88px] lg:font-extrabold">
                The platform for creative{" "}
                <span className="relative inline-block text-primary">
                  minds
                  {/* UnderLine  */}
                  <svg
                    className="absolute bottom-1 -left-2 "
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
            <h2 className="text-5xl font-extrabold font-cabinet">Latest inspiration</h2>

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
        {/*END Second layout */}

        {/* Third Section */}
        <section className="px-10 py-18 bg-bg-secondary">
          <div className="mx-auto max-w-6xl  ">
            <h2 className="text-white font-cabinet font-extrabold text-5xl text-center mb-20">Trending collections</h2>
            <TrendingCollectionSlider cardData={cardData} />
          </div>
        </section>
        {/* END Third Section */}
      </main>
    </>
  );
};

export default Homepage;
