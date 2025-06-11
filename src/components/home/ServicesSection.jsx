// ServicesSection.jsx
import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: "STEM LABS",
      description: "State-of-the-art STEM labs designed to ignite curiosity and foster innovation.",
      icon: "🔬",
      link: "/services/stem-labs"
    },
    {
      title: "STEM WORKSHOPS",
      description: "Interactive hands-on sessions to inspire young minds in science, technology, engineering, and math.",
      icon: "🧪",
      link: "/services/stem-workshops"
    },
    {
      title: "ADVANCED LABS",
      description: "Tailored laboratory solutions to meet academic and research demands.",
      icon: "🔭",
      link: "/services/advanced-labs"
    },
    {
      title: "WORKSHOPS",
      description: "Specialized workshops to upskill students in advanced technologies and engineering concepts.",
      icon: "🛠️",
      link: "/services/workshops"
    },
    {
      title: "3D PRINTING",
      description: "High-quality 3D printing services for prototyping, production, and innovation.",
      icon: "🖨️",
      link: "/services/3d-printing"
    },
    {
      title: "MECHANICAL CAD",
      description: "Precise mechanical CAD services to bring ideas to life with accuracy and efficiency.",
      icon: "📐",
      link: "/services/mechanical-cad"
    }
  ];

  return (
    <section className="section section--primary">
      <div className="section__container">
        <h2 className="section__title section__title--center">Our Services</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <a href={service.link} className="service-card__link">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
