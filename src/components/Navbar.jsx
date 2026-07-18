import Signinbtn from "./button/Signinbtn";
import Communitybtn from "./button/Communitybtn";
import NavLogo from "./NavLogo";

const Navbar = () => {
  return (
    <header className="px-6 py-4 bg-gray-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <NavLogo />

        <div className="flex items-center gap-8 font-sans text-base px-10">
          <Signinbtn />
          <Communitybtn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;