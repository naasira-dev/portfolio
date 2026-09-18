function Projects() {
  const projects = [
    {
      title: 'Hotel Booking System',
      description: 'A full-stack hotel reservation platform with guest and admin functionality. Features JWT authentication, role-based authorization, and Docker deployment.',
      tech: ['Java 21', 'Spring Boot', 'React 18', 'PostgreSQL', 'JWT', 'Docker'],
      github: 'https://github.com/naasira-dev/hotel-booking-system',
    },
    {
      title: 'Product Inventory Management',
      description: 'A secure REST API for product inventory with Keycloak OAuth2 authentication, Redis caching, Spring AOP logging, and full Docker Compose setup.',
      tech: ['Java 21', 'Spring Boot', 'Keycloak', 'Redis', 'MySQL', 'Docker'],
      github: 'https://github.com/naasira-dev/product-crud',
    },
  ]

  return (
    <section id="projects" className="bg-gray-800 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-12">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-purple-900 text-purple-300 text-xs px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Corrected anchor tag below */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
