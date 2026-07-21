import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { usePicsum } from "../context/PiscumContext";
import NavigateBtn from "../components/button/NavigateBtn";

const BlogPost = ({ userData }) => {
  const { slug } = useParams();
  const { images } = usePicsum();

  const blog = userData.find((item) => item.slug === slug);

  const image = images[userData.findIndex((item) => item.slug === slug)];

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 px-4 sm:px-6 lg:px-10 py-18">
        <div className="mx-auto max-w-4xl">
          {/* Back */}
          <NavigateBtn />

          {/* Title */}
          <h1 className="font-cabinet mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[88px] leading-tight lg:leading-18 font-extrabold text-slate-900">
            {blog.blogTitle}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 py-6 flex-wrap">
            <img
              src={blog.image}
              alt={blog.name}
              className="h-14 w-14 rounded-full object-cover shrink-0"
            />

            <div className="min-w-0">
              <p className="font-medium text-sm font-inter text-bg-primary">
                {blog.name}
              </p>
              <p className="font-normal text-sm font-inter text-text-primary">
                {blog.title}
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <img
            src={image?.download_url}
            alt={blog.blogTitle}
            className="mb-10 aspect-video w-full object-cover"
          />

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl font-semibold font-cabinet leading-7 sm:leading-8 lg:leading-9 text-black">"{blog.quote}"</p>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 lg:leading-9 font-inter text-slate-600">
            {blog.blogDescription}
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
