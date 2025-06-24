import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1BRe7Fse156s7nVbCWhvR5GGqJaakGFtF/view?usp=drive_link"; // Place your resume PDF in the public folder
    link.download = "John_Doe_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 p-2 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl font-bold ${
                isScrolled ? "gradient-text" : "text-white drop-shadow-lg"
              }`}
            >
              Fida Hussain Mir
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="btn-primary flex items-center space-x-2"
              >
                <FaDownload className="text-sm" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="btn-primary w-full flex items-center justify-center space-x-2 mt-4"
              >
                <FaDownload className="text-sm" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
