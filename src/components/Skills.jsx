function Skills() {
  const skills = {
    Backend: ['Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Spring AOP'],
    Security: ['JWT', 'Keycloak', 'OAuth2', 'BCrypt', 'RBAC'],
    Database: ['PostgreSQL', 'MySQL', 'Oracle 11g', 'Redis'],
    DevOps: ['Docker', 'Docker Compose', 'Maven', 'Git', 'GitHub'],
    Testing: ['JUnit 5', 'Mockito'],
    Frontend: ['React 18', 'JavaScript', 'HTML', 'CSS'],
  }

  return (
    <section id="skills" className="bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-white text-3xl font-bold text-center mb-12">
          Technical <span className="text-purple-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-purple-400 font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills