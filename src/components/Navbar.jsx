import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection, useScrollSpy } from "../hook/useScrollSpy.js";
import { NAV_LINKS } from "../utils/constants.js";

const MenuIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));
  const activeNavId = location.pathname.startsWith("/service")
    ? "services"
    : location.pathname === "/services"
      ? "services"
      : location.pathname === "/contact"
        ? "contact"
        : activeSection;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sectionFromState = location.state?.scrollTo;
    if (!sectionFromState) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToSection(sectionFromState);
    });
  }, [location]);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        isScrolled ? "py-3" : "py-3"
      }`}
    >
      <div
        className={`w-[95%] max-w-[1420px] max-h-[50px] flex items-center justify-between px-7 py-3 rounded-3xl border transition-all duration-300 ${
          isScrolled
            ? "bg-black/50 backdrop-blur-md shadow-md border-gray-200"
            : "bg-black border-gray-900"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-2xl font-bold text-blue-600"
        >
          <motion.img
            layoutId="brand-logo"
            src="/images/DCreates.svg"
            alt="Globus Logo"
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="h-6 w-auto object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-base font-medium transition-all duration-300 ${
                activeNavId === link.id
                  ? "text-white"
                  : "text-white/50 hover:text-blue-500"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <button
            onClick={() => handleNavClick("contact")}
            className="px-6 py-1 rounded-full text-white font-semibold hover:opacity-90 transition"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <CloseIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full w-[95%] max-w-[1320px] md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen
            ? "rounded-2xl max-h-96 opacity-100 mt-[-8px]"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                activeNavId === link.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="w-full mt-0 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;