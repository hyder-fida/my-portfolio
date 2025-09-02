const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      location: "Kashmir • Srinagar • Budgam • J&K",
      description:
        "End‑to‑end web applications using React/Next.js, Node.js, and modern databases with SEO, performance, and accessibility best practices.",
      keywords: ["Full Stack Developer Kashmir", "Full Stack Developer Srinagar", "Full Stack Developer Budgam"],
      cta: "Start Full Stack Project",
      id: "fullstack",
    },
    {
      title: "React.js & Next.js Frontend",
      location: "Srinagar • Budgam • Remote India",
      description:
        "High‑performance, responsive UI with Tailwind CSS, design systems, and UX best practices. SSR/SSG with Next.js for better SEO.",
      keywords: ["React Developer Kashmir", "Next.js Developer Srinagar", "Frontend Developer J&K"],
      cta: "Build Frontend UI",
      id: "frontend",
    },
    {
      title: "UI/UX Design & Prototyping",
      location: "Jammu & Kashmir • India",
      description:
        "User‑centered design, wireframes, and interactive prototypes that translate into pixel‑perfect, accessible interfaces.",
      keywords: ["UI UX Designer Kashmir", "Product Design Srinagar"],
      cta: "Design My Product",
      id: "design",
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="px-4 section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full Stack and React/Next.js development in Kashmir (Srinagar & Budgam), J&K — with SEO‑friendly, fast, and accessible delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article key={s.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-purple-700 font-medium mb-3">{s.location}</p>
              <p className="text-gray-600 mb-4">{s.description}</p>
              <ul className="flex flex-wrap gap-2 mb-6" aria-label="keywords">
                {s.keywords.map((k) => (
                  <li key={k} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{k}</li>
                ))}
              </ul>
              <button onClick={scrollToContact} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors">
                {s.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


