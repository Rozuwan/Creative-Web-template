import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { PicsumProvider } from "./context/PiscumContext";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";

const userData = [
  {
    slug: "concept-art-illustrations",
    name: "Emma Wilson",
    title: "@emmawilson",
    blogTitle: "Concept Art & Illustrations by Stef Euphoria",
    blogDescription:
      "A look at how Stef Euphoria blends hand-drawn texture with digital polish to create concept art that feels alive.",
    quote:
      "I've been using Community Club to track my ideas, and it's such a helpful and enjoyable product. Thanks for building it!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    slug: "patrick-chen-branding",
    name: "James Carter",
    title: "@jamescarter",
    blogTitle: "Patrick Chen's Branding by Thought & Found Studio",
    blogDescription:
      "Thought & Found Studio reimagined Patrick Chen's personal brand with a flexible identity system across print, web, and social.",
    quote:
      "If you want real marketing that works and effective implementation - Community Club's got you covered.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    slug: "soma-brewing-branding",
    name: "Sophia Brown",
    title: "@sophiabrown",
    blogTitle: "Soma Brewing Branding & Packaging by Quim Martin",
    blogDescription:
      "Quim Martin crafted a bold packaging system for Soma Brewing that stands out on the shelf and tells a story in every detail.",
    quote:
      "Community Club has really helped our business in many different ways. I just can't get enough of this awesome company.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    slug: "creating-minimal-interfaces",
    name: "Liam Anderson",
    title: "@liamanderson",
    blogTitle: "Creating Minimal Interfaces That Feel Effortless",
    blogDescription:
      "Discover how thoughtful spacing, typography, and motion work together to create clean, modern user experiences.",
    quote:
      "The clean design and smooth experience make collaboration so much easier. It's exactly what our team needed.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    slug: "building-brands-that-people-remember",
    name: "Olivia Taylor",
    title: "@oliviataylor",
    blogTitle: "Building Brands That People Remember",
    blogDescription:
      "A practical guide to creating memorable visual identities that remain consistent across digital and print platforms.",
    quote:
      "A practical guide to creating memorable visual identities that remain consistent across digital and print platforms.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    slug: "great-design-improves-user-engagement",
    name: "Noah Martinez",
    title: "@noahmartinez",
    blogTitle: "How Great Design Improves User Engagement",
    blogDescription:
      "Learn why intuitive layouts, accessibility, and visual hierarchy can dramatically improve user retention.",
    quote:
      "Everything feels polished and intuitive. Whether I'm planning a project or saving inspiration, it's always reliable.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&q=80",
  },
  {
    slug: "modern-web-design-trends",
    name: "Ava Johnson",
    title: "@avajohnson",
    blogTitle: "Modern Web Design Trends Worth Following",
    blogDescription:
      "Explore emerging UI trends that balance aesthetics, performance, and usability for modern websites and more.",
    quote:
      "A practical guide to creating memorable visual identities that remain consistent across digital and print platforms.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
  },
  {
    slug: "power-of-design-systems",
    name: "William Davis",
    title: "@williamdavis",
    blogTitle: "The Power of Consistent Design Systems",
    blogDescription:
      "See how scalable design systems help teams build products faster while maintaining visual consistency.",
    quote:
      "Our team adopted it in just a few days, and productivity noticeably improved. Simple tools really do make the biggest difference.",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&q=80",
  },
  {
    slug: "storytelling-in-design",
    name: "Mia Thomas",
    title: "@miathomas",
    blogTitle: "Designing Better Experiences Through Storytelling",
    blogDescription:
      "Strong visual storytelling creates emotional connections that keep users engaged from the first interaction.",
    quote:
      "It's rare to find software that's both powerful and enjoyable. This has become one of my favorite tools to use.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
  },
  {
    slug: "creative-inspiration-worldwide",
    name: "Ethan Harris",
    title: "@ethanharris",
    blogTitle: "Creative Inspiration From Around the World",
    blogDescription:
      "Explore a curated collection of creative work and discover how global design influences today's digital experiences.",
    quote:
      "Every update keeps getting better. The thoughtful design and attention to detail make it stand out from the competition.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
];

const App = () => {
  return (
    <div>
      <PicsumProvider>
        <Routes>
          <Route path="/" element={<Homepage userData={userData} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<BlogPage userData={userData} />} />
          <Route
            path="/blog/:slug"
            element={<BlogPost userData={userData} />}
          />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/privacy" element={<PrivacyPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </PicsumProvider>
    </div>
  );
};

export default App;
