// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function App({ images, userData }) {
  return (
    <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.slice(10, 20).map((item, i) => (
          <SwiperSlide
            key={i}
            className="w-90! sm:w-125! lg:w-155!"
          >
            <div className="relative h-65 sm:h-85 lg:h-105 w-full overflow-hidden rounded-2xl shadow-xl">
              {/* Background */}
              <img
                src={item.download_url}
                alt={userData[i].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Profile */}
              <div className="absolute bottom-7 left-7 flex items-center gap-4">
                <img
                  src={userData[i].image}
                  alt={userData[i].name}
                  className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-lg"
                />

                <div>
                  <h3 className="font-sans text-2xl font-bold text-white">
                    {userData[i].name}
                  </h3>

                  <p className="font-sans mt-1 text-sm text-white/80">
                    {userData[i].title}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
