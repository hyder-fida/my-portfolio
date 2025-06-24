import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/hyder-fida',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/fida-hussain-b9a047239/',
      label: 'LinkedIn',
    },
    {
      icon: FaTwitter,
      href: 'https://x.com/Fidaa37298252',
      label: 'Twitter',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Fida Hussain 
            mir</h3>
            <p className="text-gray-400">
              Full Stack Developer & UI/UX Designer passionate about creating 
              beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl transform hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Fida Hussain Mir. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300 mt-4 md:mt-0"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;