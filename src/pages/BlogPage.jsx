import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import { usePicsum } from "../context/PiscumContext";

const BlogPage = ({ userData }) => {
  const { images } = usePicsum();

  return (
    <>
      <Navbar />

      <section className="px-4 sm:px-6 lg:px-10 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-extrabold font-cabinet">
            From our blog
          </h1>

          <span className="text-text-primary text-base sm:text-lg lg:text-xl font-sans">
            Stories, inspiration, and creative work from our community.
          </span>

          <div className="mt-8 sm:mt-10 lg:mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {userData.map((item, i) => (
              <BlogCard key={i} item={item} image={images[i]} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
