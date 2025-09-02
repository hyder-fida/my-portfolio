const posts = [
  {
    slug: "react-developer-kashmir",
    title: "Hiring a React Developer in Kashmir (Srinagar & Budgam): A Quick Guide",
    summary:
      "What to look for in a React/Next.js developer in Kashmir, project scoping, pricing, and SEO considerations for local businesses.",
  },
  {
    slug: "full-stack-developer-srinagar-budgam",
    title: "Full Stack Development for Businesses in Srinagar & Budgam, J&K",
    summary:
      "How a modern full stack stack (React/Next.js + Node.js) helps local businesses launch faster with better performance.",
  },
  {
    slug: "seo-for-jk-startups",
    title: "SEO Tips for J&K Startups: Getting Found in Search",
    summary:
      "Simple, actionable SEO practices for startups and SMEs in Jammu & Kashmir to rank on relevant keywords.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="px-4 section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights on React, Full Stack development, and SEO for businesses in Kashmir, Srinagar, Budgam, and J&K.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.slug} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.summary}</p>

              <div className="prose prose-sm text-gray-700 space-y-3">
                <p>
                  React and Next.js are ideal for building fast, SEO‑friendly interfaces. For local businesses in Kashmir
                  (Srinagar & Budgam), good UI plus Core Web Vitals can directly improve lead generation and rankings.
                </p>
                <p>
                  When hiring, review GitHub, past work, and deployment quality (Lighthouse score, accessibility, mobile‑first).
                  A clear scope, timelines, and communication cadence keep projects predictable.
                </p>
                <ul className="list-disc pl-5">
                  <li>Modern stack: React/Next.js, Tailwind CSS, Node.js</li>
                  <li>SEO: metadata, schema, sitemap, fast page load</li>
                  <li>UX: accessible components, consistent design system</li>
                </ul>
                <p>
                  See my <a href="#services" className="text-purple-600 hover:text-purple-700">Services</a> for options or
                  <a href="#contact" className="text-purple-600 hover:text-purple-700"> contact me</a> to discuss.
                </p>
              </div>

              <div className="mt-4">
                <a href="#contact" className="text-purple-600 font-medium hover:text-purple-700">Work with me →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;


