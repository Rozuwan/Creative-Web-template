import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="px-6 py-16 lg:px-10 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="text-center">
            <h1 className="font-cabinet text-[56px] font-extrabold leading-none tracking-tight text-bg-primary sm:text-[72px] lg:text-[88px]">
              Get in touch
            </h1>

            <p className="mx-auto mt-8 max-w-2xl font-inter text-[20px] font-normal leading-9 text-slate-500">
              Questions, feedback, or just want to say hello? Send us a message
              and we'll get back to you.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-20 space-y-7"
          >
            {/* Name */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-inter text-[14px] font-medium text-text-primary">
                  First Name <span className="text-red-500 font-inter">*</span>
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  className="h-12 w-full border border-gray-200 px-4 font-inter text-base outline-none transition placeholder:text-slate-400 focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-inter text-[14px] font-medium text-text-primary">
                  Last Name <span className="text-red-500 font-inter">*</span>
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  className="h-12 w-full border border-gray-200 px-4 font-inter text-base outline-none transition placeholder:text-slate-400 focus:border-primary"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-inter text-[14px] font-medium text-text-primary">
                Email <span className="text-red-500 font-inter">*</span>
              </label>

              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="h-12 w-full border border-gray-200 px-4 font-inter text-base outline-none transition placeholder:text-slate-400 focus:border-primary"
              />
            </div>

            {/* Message */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="font-inter text-[14px] font-medium text-text-primary">
                  Message
                </label>

                <span className="font-inter text-[14px] font-normal text-slate-500">
                  Optional
                </span>
              </div>

              <textarea
                rows={6}
                placeholder="How can we help?"
                className="min-h-35 w-full resize-y border border-gray-200 p-4 font-inter text-base outline-none transition placeholder:text-slate-400 focus:border-primary"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center rounded-full bg-primary font-inter text-[18px] font-semibold text-white transition duration-300 hover:opacity-90 active:scale-95"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
