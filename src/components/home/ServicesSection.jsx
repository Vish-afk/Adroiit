// src/components/home/ServicesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Custom SVG Icons (remain unchanged)
const MicroscopeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h.01" />
        <path d="M15 16a5 0 0 0-6 0" />
        <circle cx="12" cy="10" r="2" />
        <path d="M13 4v6" />
        <path d="M11 4v6" />
    </svg>
);

const FlaskIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
        <path d="M9 3h6v7l5 8H4l5-8V3z" />
        <path d="M9 11h6" />
        <circle cx="12" cy="16" r="1" />
    </svg>
);

const TelescopeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
        <path d="M3 12l9-9 9 9" />
        <path d="M12 3v18" />
        <path d="M8 7l8 8" />
        <path d="M16 7l-8 8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2" />
        <path d="M12 21v2" />
        <path d="M4.22 4.22l1.42 1.42" />
        <path d="M18.36 18.36l1.42 1.42" />
        <path d="M1 12h2" />
        <path d="M21 12h2" />
        <path d="M4.22 19.78l1.42-1.42" />
        <path d="M18.36 5.64l1.42-1.42" />
    </svg>
);

const CogIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6" />
        <path d="M21 12h-6m-6 0H3" />
        <path d="M18.364 5.636l-4.243 4.243m-4.242 0L5.636 5.636" />
        <path d="M18.364 18.364l-4.243-4.243m-4.242 0L5.636 18.364" />
    </svg>
);

const PrinterIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
        <path d="M8 18h8" />
        <path d="M8 22h8" />
        <circle cx="17" cy="12" r="1" />
    </svg>
);

const DraftingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7l3-3 3 3-3 3z" />
        <path d="M5 21h14" />
        <path d="M9 9l1.5-1.5" />
        <path d="M14.5 14.5L16 16" />
        <circle cx="9" cy="9" r="2" />
        <path d="M13 13l6-6" />
        <path d="M21 3l-6 6" />
    </svg>
);

// Checkmark Icon for features list
const CheckmarkIcon = () => (
    <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


export default function ServicesSection() {
    const services = [
        {
            title: "STEM LABS",
            description: "State-of-the-art STEM labs designed to ignite curiosity, foster innovation, and inspire creativity.",
            icon: <MicroscopeIcon />,
            link: "/services/stem-labs",
            linkText: "Explore",
            features: [
                "Interactive experimental setups",
                "Cutting-edge equipment access",
                "Hands-on learning environments"
            ],
            buttonColor: "purple"
        },
        {
            title: "STEM WORKSHOPS",
            description: "Interactive hands-on sessions to inspire young minds in science, technology, engineering, and math.",
            icon: <FlaskIcon />,
            link: "/services/stem-workshops",
            linkText: "Explore",
            features: [
                "Expert-led practical sessions",
                "Problem-solving challenges",
                "Group collaboration activities"
            ],
            buttonColor: "purple"
        },
        {
            title: "ADVANCED LABS",
            description: "Tailored laboratory solutions to meet academic, research, and industry demands.",
            icon: <TelescopeIcon />,
            link: "/services/advanced-labs",
            linkText: "Explore",
            features: [
                "Specialized research facilities",
                "High-precision instrumentation",
                "Customizable experimental setups"
            ],
            buttonColor: "purple"
        },
        {
            title: "WORKSHOPS",
            description: "Specialized workshops to upskill students in advanced technologies and engineering concepts.",
            icon: <CogIcon />,
            link: "/services/technical-workshops",
            linkText: "Explore",
            features: [
                "Skill-building modules",
                "Latest industry techniques",
                "Certification preparation"
            ],
            buttonColor: "purple"
        },
        {
            title: "3D PRINTING",
            description: "High-quality 3D printing services for prototyping, production, and product innovation.",
            icon: <PrinterIcon />,
            link: "/services/3d-printing",
            linkText: "Explore",
            features: [
                "Rapid prototyping services",
                "Variety of materials available",
                "Precision additive manufacturing"
            ],
            buttonColor: "purple"
        },
        {
            title: "MECHANICAL CAD",
            description: "Precise mechanical CAD services to bring ideas to life with unmatched accuracy and efficiency.",
            icon: <DraftingIcon />,
            link: "/services/mechanical-cad",
            linkText: "Explore",
            features: [
                "2D drafting and 3D modeling",
                "Assembly design and simulation",
                "Manufacturing documentation"
            ],
            buttonColor: "purple"
        }
    ];

    return (
        <section className="section services-section-redesigned">
            <div className="section__container">
                {/* NEW: Wrapper for SERVICES heading and description with a background */}
                <div className="services__header-wrapper">
                    {/* Main section heading for Services. No line below it now. */}
                    <h2 className="section__main-heading">SERVICES</h2>

                    {/* Descriptive text. No line below it now. */}
                    <p className="section__title section__title--description">
                        Ignite innovation and empower the next generation with our comprehensive STEM solutions. We provide cutting-edge STEM labs, interactive workshops, and advanced technical services to foster skills in science, technology, engineering, and mathematics.
                    </p>
                </div>

                <div className="services__grid-redesigned">
                    {services.map((service, index) => (
                        <div key={index} className="service-card-redesigned">
                            {/* Header for icon and title in same row */}
                            <div className="service-card-redesigned__header">
                                <div className="service-card-redesigned__icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-card-redesigned__title">{service.title}</h3>
                            </div>
                            <p className="service-card-redesigned__description">{service.description}</p>
                            <ul className="service-card-redesigned__features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <CheckmarkIcon />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="service-card-redesigned__button-wrapper">
                                <Link
                                    to={service.link}
                                    className={`service-card-redesigned__button service-card-redesigned__button--${service.buttonColor}`}
                                >
                                    <span className="button-effect__fill"></span>
                                    <span className="button-effect__arrow button-effect__arrow--right">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="button-effect__text">{service.linkText}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}