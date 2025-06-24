import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "University Website",
      description:
        "A dynamic university website with course listings, faculty profiles, notice board, and a responsive design to enhance student engagement.",
      image: "iust.png",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiTailwindcss, name: "Bootstrap" },
      ],
      github: "https://github.com/hyder-fida/University-Website",
      live: "https://iustwebsite.netlify.app/",
      featured: true,
    },
    {
      title: "Website Solutions App",
      description:
        "A platform for managing client website projects with task assignments, live updates, and real-time collaboration among developers.",
      image: "yaam.png",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: SiTailwindcss, name: "Tailwind" },
      ],
      github: "https://github.com/faahadyws/yaamwebsolutions",
      live: "https://yaamwebsolutions.com/",
      featured: true,
    },
    {
      title: "Hotel Heaven Heights",
      description:
        "An interactive hotel booking website with weather integration, contact options, gallery, and a responsive user-friendly layout.",
      image: "heavenheights.png",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaPython, name: "Node js" },
        { icon: SiTailwindcss, name: "Tailwind" },
      ],
      github: "https://github.com/faahadyws/hotelheavenheights",
      live: "https://heavenheights.in/",
      featured: false,
    },
    {
      title: "Hotel Best Palace",
      description:
        "A fully functional hotel website with room showcase, booking functionality, and modern UI to streamline guest engagement.",
      image: "bestpalace.png",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" },
      ],
      github: "https://github.com/fidayws/HotelBestPalace",
      live: "https://hotelbestpalace.com/",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio to showcase development work, skills, contact info, and project demos with animated sections and responsive design.",
      image: "portfolio.png",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind" },
      ],
      github: "https://github.com/hyder-fida/my-portfolio",
      live: "https://fidaHussainMir.netlify.app",
      featured: false,
    },
    {
      title: "Diabetes Prediction Using ML",
      description:
        "A machine learning web app that predicts diabetes likelihood based on patient input, trained on real health datasets.",
      image: "diabetes.png",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" },
      ],
      github: "https://github.com/hyder-fida/diabetesApp",
      live: "https://github.com/hyder-fida/diabetesApp",
      featured: false,
    },
    {
      title: "E-Commerce App",
      description:
        "A modern e-commerce platform with product filtering, shopping cart, user authentication, and MongoDB-powered backend.",
      image: "myntra.jpeg",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" },
      ],
      github: "https://github.com/hyder-fida/E-commerce-App",
      live: "https://github.com/hyder-fida/E-commerce-App",
      featured: false,
    },
    {
      title: "Trading App",
      description:
        "A basic trading dashboard simulating stock data analysis, graphs, and news integration using Python and MongoDB backend.",
      image: "trading.jpeg",
      technologies: [
        { icon: FaReact, name: "React" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: FaPython, name: "Python" },
        { icon: SiTailwindcss, name: "Material Ui" },
      ],
      github: "https://github.com/hyder-fida/TradingApp",
      live: "https://github.com/hyder-fida/TradingApp",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-2xl w-full h-80  card-hover"
                />
              </div>
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                } animate-slide-up`}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md"
                    >
                      <tech.icon className="text-primary-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 btn-primary"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 "
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        <tech.icon className="text-primary-600 text-sm" />
                        <span className="text-xs font-medium text-gray-700">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
