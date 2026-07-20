import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";

const UserSlider = ({ userData }) => {
  console.log(userData);

  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="UserCardSwiper"
    >
      {userData.slice(0, 3).map((index, i) => {
        console.log(index.name);
        return (
          <SwiperSlide>
            <div key={i} className="flex items-center gap-12 min-h-100 ">
              {/* Left */}
              <div className="relative shrink-0">
                <img
                  src={index.image}
                  alt="User"
                  className="w-72 h-72 rounded-full object-cover"
                />

                <div className="absolute bottom-6 -right-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                  <FaXTwitter className="text-sky-500 text-lg" />
                  <span className="text-base font-bold font-cabinet hover:underline hover:decoration-2 hover:underline-offset-2 decoration-primary">
                    {index.title}
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="flex-1">
                <h2 className="text-3xl font-extrabold font-cabinet leading-tight w-180  mt-2">
                  {index.quote}
                </h2>

                <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600">
                  <span>Read Story</span>

                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default UserSlider;
