import { FaCode, FaDesktop, FaMobile, FaServer } from 'react-icons/fa';

const About = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, Vue, and modern CSS frameworks.',
    },
    {
      icon: FaDesktop,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user experiences with attention to detail and user-centered approach.',
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications with React Native and Flutter.',
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Node.js, Python, and cloud technologies.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with 2+ years of experience creating digital experiences 
            that are both beautiful and functional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About me"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Creating Digital Experiences
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              I specialize in building modern web applications using cutting-edge technologies. 
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that not only meet requirements but exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-primary-600 mb-2">20+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary-600 mb-2">10+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary-600 mb-2">2+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary-600 mb-2">100%</h4>
                <p className="text-gray-600">Dedication</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-6">
                <service.icon className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;