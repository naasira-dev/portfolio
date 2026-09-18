function About() {
  return (
    <section id="about" className="bg-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-white text-3xl font-bold text-center mb-12">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              I'm a Java Backend Developer with 3+ years of professional experience at TCS, specializing in building scalable REST APIs and Spring Boot applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              After a career break for childcare, I returned with stronger skills — rebuilding modern applications using Java 21, Spring Security, Docker, Redis, and Keycloak.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm passionate about clean code, secure APIs, and continuous learning. Currently seeking Java Backend / Spring Boot Developer opportunities in Hyderabad.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Quick Info</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-purple-400">▸</span>
                <span className="text-gray-400">Name: <span className="text-white">Naasira Khanam</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▸</span>
                <span className="text-gray-400">Location: <span className="text-white">Hyderabad, India</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▸</span>
                <span className="text-gray-400">Experience: <span className="text-white">3+ Years</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▸</span>
                <span className="text-gray-400">Education: <span className="text-white">B.Tech IT, JNTU 2014</span></span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▸</span>
                <span className="text-gray-400">Email: <span className="text-white">naasirakhanam.93@gmail.com</span></span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About