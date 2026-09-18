function Experience() {
  return (
    <section id="experience" className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-white text-3xl font-bold text-center mb-12">
          My <span className="text-purple-400">Experience</span>
        </h2>

        <div className="border-l-2 border-purple-600 pl-8 space-y-10">

          <div className="relative">
            <div className="absolute -left-11 bg-purple-600 w-4 h-4 rounded-full"></div>
            <span className="text-purple-400 text-sm font-medium">Oct 2014 – Mar 2018</span>
            <h3 className="text-white text-xl font-semibold mt-1">Software Programmer</h3>
            <p className="text-gray-400 text-sm mb-3">Tata Consultancy Services (TCS) — Hyderabad</p>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm flex gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                Built and maintained core tax-filing modules including taxpayer registration, account management, and declaration processing using Java/J2EE, Spring MVC, and Hibernate.
              </li>
              <li className="text-gray-400 text-sm flex gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                Designed and delivered features across application layers and developed Jasper Reports used in government tax assessment workflows.
              </li>
              <li className="text-gray-400 text-sm flex gap-2">
                <span className="text-purple-400 mt-1">▸</span>
                Diagnosed and resolved production defects within a 20-member Agile team, applying MVC, Front Controller, and Singleton design patterns.
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-11 bg-gray-600 w-4 h-4 rounded-full"></div>
            <span className="text-gray-500 text-sm font-medium">2018 – 2025</span>
            <h3 className="text-white text-xl font-semibold mt-1">Career Break</h3>
            <p className="text-gray-400 text-sm mb-3">Maternity and Childcare</p>
            <p className="text-gray-400 text-sm">
              Planned career break for maternity and childcare. Maintained and upgraded technical skills through hands-on development of modern Java 21 and Spring Boot portfolio applications.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience