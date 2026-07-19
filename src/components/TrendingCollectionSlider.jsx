// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function App({ cardData }) {
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
        {cardData.map((item, i) => (
          <SwiperSlide
            key={i}
            className="!w-[360px] sm:!w-[500px] lg:!w-[620px]"
          >
            <div className="relative h-65 sm:h-83 lg:h-100 w-full overflow-hidden rounded-2xl shadow-xl">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/25 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-3 text-sm font-medium tracking-wide text-white/75">
                  {item.author} • {item.date}
                </p>

                <h3 className="max-w-[90%] text-2xl font-bold leading-tight text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
