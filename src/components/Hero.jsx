import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hyder-fida",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/fida-hussain-b9a047239/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/Fidaa37298252",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-max text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 mt-4">
            <img
              src="/IMG_9846.jpg"
              alt="Profile"
              className="w-40 h-40  rounded-full mx-auto shadow-2xl border-4 border-white/30 transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-down">
            Hi, I'm <span className="text-yellow-300">Fida Hussain Mir</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
            Full Stack Developer & UI/UX Designer
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto animate-slide-up">
            I create beautiful, responsive web applications with modern
            technologies. Passionate about clean code, user experience, and
            bringing ideas to life through technology.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 text-white/90">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-300" />
              <span>hyderfida14@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-yellow-300" />
              <span>+917006106504</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button
              onClick={scrollToProjects}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 py-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-yellow-300 text-2xl transform hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
