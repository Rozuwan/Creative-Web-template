// Second section grid card

import { FaRegHeart } from "react-icons/fa";
import { motion } from "motion/react";

const Card = ({ image }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
    >
      {" "}
      {/* Image */}
      <img
        src={image.download_url}
        alt={image.author}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:from-black" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex items-center gap-3">
          {/* Author */}
          <div>
            <h3 className="font-semibold text-white font-inter"></h3>
            <p className="text-sm text-gray-300 font-inter">{image.author}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-white">
          <FaRegHeart className="text-xl text-red-500" />
          <span className="font-medium font-inter">4K</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
