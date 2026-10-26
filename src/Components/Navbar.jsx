import { useState, useEffect } from "react";
import { Link } from "react-router";
import logo1 from "../assets/TempL.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "OFFER", path: "/offer" },
    { name: "GALLERY", path: "/gallery" },
    { name: "BLOG", path: "/blog" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`${
          scrolled ? "fixed" : "absolute"
        } top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-100/80 backdrop-blur-md border-b border-gray-300/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-10 py-4">
          <Link to="/" onClick={closeMenu}>
            <img src={logo1} alt="Logo" className="w-24 sm:w-28" />
          </Link>

          {/* Desktop links: visible before scrolling */}
          <ul
            className={`hidden lg:flex gap-6 items-center font-mono text-gray-800 transition-all duration-300 ${
              scrolled ? "lg:opacity-0 lg:pointer-events-none lg:hidden" : ""
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-gray-500 transition">
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/contact"
                className="inline-block border-2 border-gray-600 rounded-full py-2 px-8 hover:bg-black hover:text-white transition"
              >
                SIGN UP
              </Link>
            </li>
          </ul>

          {/* Hamburger: appears after scrolling */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`text-3xl text-gray-800 transition-all duration-300 ${
              scrolled ? "block" : "hidden"
            }`}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          {/* Mobile hamburger before scrolling */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-3xl text-gray-800"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Full-screen navigation menu */}
      {/* Stylish slide-in navigation panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[440px] z-[60]
  bg-[#f3f3f0] text-black transition-transform duration-500 ease-in-out
  ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full px-8 sm:px-10 py-8">
          <div className="flex items-center justify-between border-b border-black/20 pb-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase">
              Navigation
            </span>

            <button
              onClick={closeMenu}
              className="w-11 h-11 rounded-full border border-black/30
        flex items-center justify-center text-3xl
        hover:bg-black hover:text-white transition"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <div className="pt-10 pb-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
              Explore the website
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Let's explore<span className="text-gray-400">.</span>
            </h2>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="group block py-4 border-b border-black/15
    hover:pl-2 transition-all duration-300"
              >
                <span
                  className="text-2xl sm:text-3xl font-light tracking-tight
    text-gray-800 group-hover:text-gray-500 transition-colors"
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-black/20 mt-6">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-between bg-black text-white
        px-6 py-4 rounded-full hover:bg-gray-700 transition"
            >
              <span className="text-sm tracking-wide">
                Start a conversation
              </span>
              <span className="text-xl">↗</span>
            </Link>

            <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-gray-500">
              Discover · Create · Connect
            </p>
          </div>
        </div>
      </div>

      {/* Dark overlay behind the panel */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[55] bg-black/30 backdrop-blur-[2px]
  transition-opacity duration-500
  ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />
    </>
  );
}

export default Navbar;
