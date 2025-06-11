import React from 'react';

// Custom SVG Icons (remain unchanged)
const MicroscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
    <path d="M6 18h8"/>
    <path d="M3 22h18"/>
    <path d="M14 22a7 7 0 1 0 0-14h-1"/>
    <path d="M9 14h.01"/>
    <path d="M15 16a5 5 0 0 0-6 0"/>
    <circle cx="12" cy="10" r="2"/>
    <path d="M13 4v6"/>
    <path d="M11 4v6"/>
  </svg>
);

const FlaskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
    <path d="M9 3h6v7l5 8H4l5-8V3z"/>
    <path d="M9 11h6"/>
    <circle cx="12" cy="16" r="1"/>
  </svg>
);

const TelescopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
    <path d="M3 12l9-9 9 9"/>
    <path d="M12 3v18"/>
    <path d="M8 7l8 8"/>
    <path d="M16 7l-8 8"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v2"/>
    <path d="M12 21v2"/>
    <path d="M4.22 4.22l1.42 1.42"/>
    <path d="M18.36 18.36l1.42 1.42"/>
    <path d="M1 12h2"/>
    <path d="M21 12h2"/>
    <path d="M4.22 19.78l1.42-1.42"/>
    <path d="M18.36 5.64l1.42-1.42"/>
  </svg>
);

const CogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6"/>
    <path d="M21 12h-6m-6 0H3"/>
    <path d="M18.364 5.636l-4.243 4.243m-4.242 0L5.636 5.636"/>
    <path d="M18.364 18.364l-4.243-4.243m-4.242 0L5.636 18.364"/>
  </svg>
);

const PrinterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
    <path d="M6 9V2h12v7"/>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
    <rect x="6" y="14" width="12" height="8"/>
    <path d="M8 18h8"/>
    <path d="M8 22h8"/>
    <circle cx="17" cy="12" r="1"/>
  </svg>
);

const DraftingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
    <path d="M3 17l6-6 4 4 8-8"/>
    <path d="M14 7l3-3 3 3-3 3z"/>
    <path d="M5 21h14"/>
    <path d="M9 9l1.5-1.5"/>
    <path d="M14.5 14.5L16 16"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="M13 13l6-6"/>
    <path d="M21 3l-6 6"/>
  </svg>
);

export default function ServicesSection() {
  const services = [
    {
      title: "STEM LABS",
      description: "State-of-the-art STEM labs designed to ignite curiosity and foster innovation.",
      icon: <MicroscopeIcon />,
      link: "/services/stem-labs"
    },
    {
      title: "STEM WORKSHOPS",
      description: "Interactive hands-on sessions to inspire young minds in science, technology, engineering, and math.",
      icon: <FlaskIcon />,
      link: "/services/stem-workshops"
    },
    {
      title: "ADVANCED LABS",
      description: "Tailored laboratory solutions to meet academic and research demands.",
      icon: <TelescopeIcon />,
      link: "/services/advanced-labs"
    },
    {
      title: "WORKSHOPS",
      description: "Specialized workshops to upskill students in advanced technologies and engineering concepts.",
      icon: <CogIcon />,
      link: "/services/workshops"
    },
    {
      title: "3D PRINTING",
      description: "High-quality 3D printing services for prototyping, production, and innovation.",
      icon: <PrinterIcon />,
      link: "/services/3d-printing"
    },
    {
      title: "MECHANICAL CAD",
      description: "Precise mechanical CAD services to bring ideas to life with accuracy and efficiency.",
      icon: <DraftingIcon />,
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
              {/* === MODIFIED BUTTON STRUCTURE: ONLY ONE ARROW === */}
              <a href={service.link} className="service-card__link service-card__link--effect">
                <span className="button-effect__fill"></span> {/* This is the fill background */}
                <span className="button-effect__arrow button-effect__arrow--right">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="button-effect__text">{service.linkText || "Explore"}</span> {/* This is the visible text */}
              </a>
              {/* === END MODIFIED BUTTON STRUCTURE === */}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .service-icon {
          width: 64px;
          height: 64px;
          color: var(--light-purple);
          transition: var(--transition);
        }

        /* MODIFIED: ICON COLOR CHANGES ONLY WHEN BUTTON IS HOVERED */
        .service-card:has(.service-card__link--effect:hover) .service-icon {
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
}