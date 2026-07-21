import { Link } from "react-router-dom";

const BlogCard = ({ item, image }) => {
  return (
    <>
      <Link to={`/blog/${item.slug}`} className="group flex flex-col py-6 sm:py-10">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={image?.download_url}
            alt={item.blogTitle}
            className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="mt-8 flex flex-col gap-5">
          <h3 className="font-cabinet text-2xl leading-[1.2] font-bold tracking-tight text-bg-primary hover:underline hover:decoration-2 hover:decoration-primary max-w-80">
            {item.blogTitle}
          </h3>

          <p className="text-base leading-5 text-text-primary">
            {item.blogDescription}
          </p>

          {/* Author */}
          <div className="mt-2 flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="h-11 w-11 rounded-full object-cover"
            />

            <p className="text-sm text-text-primary font-sans">
              By{" "}
              <span className="font-sm font-medium text-black font-sans hover:underline hover:decoration-2 hover:decoration-primary">
                {item.name}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
