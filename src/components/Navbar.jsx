function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <span className="text-white text-xl font-bold">
          Naasira<span className="text-purple-500">.</span>
        </span>

        <ul className="flex gap-8">
          <li><a href="#about" className="text-gray-400 hover:text-purple-400 text-sm">About</a></li>
          <li><a href="#skills" className="text-gray-400 hover:text-purple-400 text-sm">Skills</a></li>
          <li><a href="#projects" className="text-gray-400 hover:text-purple-400 text-sm">Projects</a></li>
          <li><a href="#experience" className="text-gray-400 hover:text-purple-400 text-sm">Experience</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-purple-400 text-sm">Contact</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar