const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Creative. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
