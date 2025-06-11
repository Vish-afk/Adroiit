import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: "STEM LABS",
      description: "State-of-the-art STEM labs designed to ignite curiosity and foster innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
          <circle cx="12" cy="12" r="10" fill="none" stroke="black" strokeWidth="2" />
          <path d="M6 6l12 12M18 6L6 18" stroke="black" strokeWidth="2" />
        </svg>
      ),
      link: "/services/stem-labs"
    },
    {
      title: "STEM WORKSHOPS",
      description: "Interactive hands-on sessions to inspire young minds in science, technology, engineering, and math.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
          <path d="M12 2L4 12l8 8 8-8-8-8z" fill="none" stroke="black" strokeWidth="2" />
        </svg>
      ),
      link: "/services/stem-workshops"
    },
    {
      title: "ADVANCED LABS",
      description: "Tailored laboratory solutions to meet academic and research demands.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
          <circle cx="12" cy="12" r="10" fill="none" stroke="black" strokeWidth="2" />
          <path d="M12 2v20M2 12h20" stroke="black" strokeWidth="2" />
        </svg>
      ),
      link: "/services/advanced-labs"
    },
    {
      title: "WORKSHOPS",
      description: "Specialized workshops to upskill students in advanced technologies and engineering concepts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
          <path d="M6 12h12M12 6v12" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="9" fill="none" stroke="black" strokeWidth="2" />
        </svg>
      ),
      link: "/services/workshops"
    },
    {
      title: "3D PRINTING",
      description: "High-quality 3D printing services for prototyping, production, and innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
          <rect x="4" y="4" width="16" height="16" fill="none" stroke="black" strokeWidth="2" />
          <path d="M4 8h16M4 12h16M4 16h16" stroke="black" strokeWidth="2" />
        </svg>
      ),
      link: "/services/3d-printing"
    },
    {
      title: "MECHANICAL CAD",
      description: "Precise mechanical CAD services to bring ideas to life with accuracy and efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
          <path d="M7 7h10v10H7z" fill="none" stroke="black" strokeWidth="2" />
          <path d="M7 7L3 3M7 17l-4 4M17 17l4 4M17 7l4-4" stroke="black" strokeWidth="2" />
        </svg>
      ),
      link: "/services/mechanical-cad"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href={service.link} className="text-blue-500 hover:underline mt-4 block">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
