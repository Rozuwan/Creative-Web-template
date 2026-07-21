import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPage = () => {
  return (
    <>
    <Navbar />
      <section className="px-6 py-16 lg:px-10 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <h1 className="font-cabinet text-[56px] font-extrabold leading-none tracking-tight text-bg-primary sm:text-[72px] lg:text-[88px]">
            Privacy Policy
          </h1>

          {/* Last Updated */}
          <p className="mt-6 font-sans text-[18px] font-normal text-text-primary">
            Last updated July 3, 2026
          </p>

          {/* Intro */}
          <p className="mt-12 font-sans text-[18px] font-normal leading-9 text-text-primary">
            This Privacy Policy explains how Creative ("we", "us") collects,
            uses, and shares information about you when you use our website,
            products, and services (collectively, the "Services"). We are
            committed to protecting your privacy and handling your data
            transparently.
          </p>

          {/* 1 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              1. Information we collect
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              We collect information you provide directly, such as your name,
              email address, and any other details you submit through forms or
              when creating an account. We also collect usage data
              automatically, including log data, device information, and
              cookies, to operate and improve the Services.
            </p>
          </div>

          {/* 2 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              2. How we use information
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              We use the information we collect to:
            </p>

            <ul className="mt-5 list-disc space-y-4 pl-8 font-sans text-[18px] font-normal leading-9 text-text-primary">
              <li>Provide, maintain, and improve the Services.</li>
              <li>Respond to your requests and provide customer support.</li>
              <li>
                Send you updates and marketing communications where permitted.
              </li>
              <li>
                Detect, prevent, and address technical or security issues.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              3. Sharing of information
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              We do not sell your personal information. We share information
              only with trusted service providers who process data on our
              behalf, when required by law, or in connection with a merger or
              acquisition, subject to appropriate safeguards.
            </p>
          </div>

          {/* 4 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              4. Cookies
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              We use cookies and similar tracking technologies to remember your
              preferences and understand how you interact with our Services. You
              can set your browser to refuse cookies, though some features may
              not function properly as a result.
            </p>
          </div>

          {/* 5 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              5. Data retention
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              We retain your information for as long as your account is active
              or as needed to provide the Services. We will delete or anonymize
              your information when it is no longer required unless we are
              legally obligated to keep it.
            </p>
          </div>

          {/* 6 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              6. Your rights
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              Depending on your location, you may have the right to access,
              correct, or delete your personal information, or to object to
              certain processing. To exercise these rights, please{" "}
              <Link to='/contact' className="text-primary hover:underline">
                contact us.
              </Link>
            </p>
          </div>

          {/* 7 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              7. Security
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              We use administrative, technical, and physical safeguards designed
              to protect your information. However, no method of transmission or
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          {/* 8 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              8. Changes to this policy
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              We may update this Privacy Policy from time to time. If we make
              material changes, we will update the date at the top of this page.
            </p>
          </div>

          {/* 9 */}
          <div className="mt-14">
            <h2 className="font-cabinet text-[24px] font-bold text-bg-primary">
              9. Contact
            </h2>

            <p className="mt-5 font-sans text-[18px] font-normal leading-9 text-text-primary">
              If you have any questions about this Privacy Policy, please{" "}
              <Link to='/contact' className="text-primary hover:underline">
                contact us.
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPage;
