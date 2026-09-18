function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="text-center">

        <p className="text-purple-400 text-sm font-medium mb-4 tracking-widest uppercase">
          Welcome to my portfolio
        </p>

        <h1 className="text-white text-5xl font-bold mb-4">
          Hi, I'm <span className="text-purple-400">Naasira Khanam</span>
        </h1>

        <h2 className="text-gray-400 text-2xl font-medium mb-6">
          Java Backend Developer
        </h2>

        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
          Passionate about building robust REST APIs and microservices using Java 21 and Spring Boot. Based in Hyderabad, India.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            View Projects
          </a>
          <a href="#contact" className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero