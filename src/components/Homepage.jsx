import Navbar from "./Navbar";
import HeroImg from "../assets/hero.png";
import Communitybtn from "./button/Communitybtn";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="overflow-x-hidden rounded-bl-[80px] bg-gray-50">
      <Navbar />

      <main className="px-6 py-10">
        <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center md:flex-row">
          <div className="flex basis-full flex-col items-center gap-8 text-center md:items-start md:text-left md:basis-3/5">
            <h1 className="font-cabinet text-4xl font-bold leading-tight md:text-[88px]">
              The platform for creative{" "}
              <span className="text-primary">minds</span>.
            </h1>

            <p className="mx-auto max-w-xl text-base text-text-primary md:mx-0 md:text-xl">
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>

            <div className="flex items-center justify-center gap-4 md:justify-start">
              <Communitybtn />
              <Link
                to="/signin"
                className="inline-block rounded-full border border-gray-300 bg-white px-8 py-2 text-center font-medium text-gray-900 shadow-md hover:bg-blue-50 hover:text-primary active:scale-95"
              >
                Sign In
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-20 md:justify-start md:gap-12">
              <div>
                <h3 className="text-2xl font-bold ">27M</h3>
                <p className="text-base font-normal">Inspiration</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">14K</h3>
                <p className="text-base font-normal">Creators</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">8K</h3>
                <p className="text-base font-normal">Projects</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex basis-full justify-center overflow-visible md:mt-0 md:basis-2/5 md:justify-end">
            <img
              src={HeroImg}
              alt="Creative minds platform hero illustration"
              className="w-full origin-right md:scale-120 md:translate-x-[65%] md:translate-y-[8%]"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
