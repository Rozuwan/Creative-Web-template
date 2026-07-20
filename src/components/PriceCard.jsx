import { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PriceCard = () => {
  const [billing, setBilling] = useState("yearly");

  return (
    <div className="max-w-4xl mx-auto  px-6">
      {/* Toggle btn */}
      <div className="flex justify-center mb-20 text-sm  font-sans font-medium">
        <div className="flex bg-gray-200 rounded-full p-1">
          <button
            onClick={() => setBilling("yearly")}
            className={`px-5 py-1 rounded-full  transition ${
              billing === "yearly"
                ? "bg-white shadow-md text-black"
                : "text-gray-500"
            }`}
          >
            Yearly <span className="text-green-500">-20%</span>
          </button>

          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-1 rounded-full  transition ${
              billing === "monthly"
                ? "bg-white shadow-md text-black"
                : "text-gray-500"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Starter */}
        <div className="rounded-2xl p-5 border border-gray-200 bg-white">
          <h3 className="text-xl font-semibold font-cabinet mb-2">Starter</h3>

          <h1 className="text-5xl font-cabinet font-bold mb-5">Free</h1>

          <p className="text-gray-500 mb-8">
            Explore the tool, save inspiration and create collections.
          </p>
          <Link to="/signup">
            <button className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Join The Community
            </button>
          </Link>
          <h4 className="font-semibold mt-6 mb-5">Features include:</h4>

          <div className="space-y-2">
            {[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check size={18} className="text-green-500" />
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business */}
        <div className="relative rounded-2xl p-5 bg-bg-primary text-white">
          <span className="absolute -top-4 right-8 bg-green-300 text-green-900 px-3 py-1 rounded-full font-semibold">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold font-cabinet mb-2">Business</h3>

          <div className="flex items-end gap-1 mb-5">
            <span className="text-gray-400 mb-1 font-medium text-3xl font-cabinet">
              {" "}
              $
            </span>
            <span className="text-5xl font-cabinet font-bold">
              {billing === "yearly" ? 29 : 35}
            </span>

            <span className="text-gray-400 mb-2">/mo</span>
          </div>

          <p className="text-gray-400 mb-8">
            Get unlimited access to our new mood boarding tool.
          </p>
          <Link to="/signup">
            <button className="w-full bg-blue-500 text-white py-3  rounded-full font-semibold hover:bg-blue-600 transition">
              Start Free Trial
            </button>
          </Link>
          <h4 className="font-semibold mt-6 mb-5">All free features, plus:</h4>

          <div className="space-y-2">
            {[
              "Unlimited placeholder texts",
              "Consectetur adipiscing elit",
              "Excepteur sint occaecat cupidatat",
              "Officia deserunt mollit anim",
              "Priority support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check size={18} className="text-green-400" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
