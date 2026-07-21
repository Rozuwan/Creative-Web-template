import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

const UserSlider = ({ userData }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="UserCardSwiper"
    >
      {userData.slice(0, 3).map((user, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center gap-8 py-10 lg:min-h-105 lg:flex-row lg:gap-12">
            {/* Left */}
            <div className="relative shrink-0">
              <img
                src={user.image}
                alt={user.name}
                className="h-52 w-52 max-w-full rounded-full object-cover sm:h-60 sm:w-60 lg:h-72 lg:w-72"
              />

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg lg:bottom-6 lg:left-auto lg:-right-6 lg:translate-x-0">
                <FaXTwitter className="text-lg text-sky-500" />

                <span className="font-cabinet text-base font-bold hover:underline hover:decoration-2 hover:underline-offset-2 decoration-primary">
                  {user.title}
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="w-full font-cabinet text-xl font-extrabold leading-tight sm:text-xl lg:max-w-180 lg:text-3xl">
                {user.quote}
              </h2>

              <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600 font-inter">
                <span className="font-inter">Read Story</span>

                <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default UserSlider;