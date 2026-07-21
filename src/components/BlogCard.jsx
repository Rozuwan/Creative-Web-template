const BlogCard = ({ item, image }) => {
  return (
    <>
      <div className="group flex flex-col">
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
          <h3 className="font-cabinet text-[2rem] leading-[1.2] font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
            {item.blogTitle}
          </h3>

          <p className="text-[20px] leading-9 text-slate-500">
            {item.blogDescription}
          </p>

          {/* Author */}
          <div className="mt-2 flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="h-11 w-11 rounded-full object-cover"
            />

            <p className="text-lg text-slate-500">
              By{" "}
              <span className="font-semibold text-slate-900">{item.name}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
