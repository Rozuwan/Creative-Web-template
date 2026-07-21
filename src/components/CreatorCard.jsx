// fourth secion card
import { FaPlus } from "react-icons/fa6";
const CreatorCard = ({ images, userData }) => {
  return (
    <>
      {userData.slice(0, 4).map((item, i) => {
        // console.log(images[i]?.download_url);
        return (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            {/* bg of card */}
            <img
              src={images[i + 10]?.download_url}
              alt={item.name}
              className="h-32 w-full object-cover"
            />
            {/* profile */}
            <div className="relative px-6 pb-6  flex flex-col items-center ">
              <img
                src={item.image}
                alt={item.name}
                className="-mt-10 h-20 w-20 rounded-full border-3 border-white object-cover"
              />

              <h3 className="mt-4 text-xl font-bold font-cabinet hover:underline hover:decoration-2">{item.name}</h3>

              <p className="text-text-primary font-medium font-inter">{item.title}</p>

              <button className="mt-5 rounded-full bg-bg-primary font-medium px-4 py-2 text-white transition flex items-center gap-2 font-inter">
                <FaPlus className="text-text-primary" />
                Follow
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CreatorCard;
