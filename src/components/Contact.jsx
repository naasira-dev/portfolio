function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-4">
          Get In <span className="text-purple-400">Touch</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          I'm currently open to Java Backend Developer opportunities. Feel free
          to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="text-purple-400 text-2xl mb-3">✉</div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
           <p className="text-gray-400 text-sm break-all">naasirakhanam.93@gmail.com</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <div className="text-purple-400 text-2xl mb-3">💼</div>
            <h3 className="text-white font-semibold mb-1">GitHub</h3>

            {/* Corrected GitHub link opening tag below */}
            <a
              href="https://github.com/naasira-dev"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm block"
            >
              github.com/naasira-dev
            </a>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="text-purple-400 text-2xl mb-3">🔗</div>
            <h3 className="text-white font-semibold mb-1">LinkedIn</h3>

            {/* Corrected opening tag below */}
            <a
             href="https://www.linkedin.com/in/naasira-khanam"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm block"
            >
             naasira-khanam
            </a>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <div className="text-purple-400 text-2xl mb-3">📍</div>
            <h3 className="text-white font-semibold mb-1">Location</h3>
            <p className="text-gray-400 text-sm">Hyderabad, India</p>
          </div>
        </div>

        {/* Corrected main email button opening tag below */}
        <a
          href="mailto:naasirakhanam.93@gmail.com"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
        >
          Send me an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
