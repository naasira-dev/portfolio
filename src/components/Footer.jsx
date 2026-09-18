function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <span className="text-white font-bold text-lg">
          Naasira<span className="text-purple-500">.</span>
        </span>

        <p className="text-gray-500 text-sm">
          2026 Naasira Khanam. Built with React and Tailwind CSS.
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/naasira-dev" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-purple-400 text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/naasira-khanam" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-purple-400 text-sm">LinkedIn</a>
          <a href="mailto:naasirakhanam.93@gmail.com" className="text-gray-500 hover:text-purple-400 text-sm">Email</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer