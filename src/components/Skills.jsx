const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React.js',
        'Next js',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'Tailwind CSS',
        'Bootstrap CSS',
        'Vue.js',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Python',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'GraphQL',
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        'Git',
        'Docker',
        'AWS',
        'Figma',
        'Photoshop',
        'WordPress',
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg card-hover"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white px-4 py-3 rounded-lg shadow-sm text-center font-medium text-gray-700 hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;