// PartnershipSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button'; 
import sideImage from '../../assets/reach-C6YMuyIS.png'; 

export default function PartnershipSection() {
  // State for the custom dropdown
  const serviceOptions = [
    { value: "", label: "Select a service" }, // Placeholder option
    { value: "stem-labs", label: "STEM LABS" },
    { value: "stem-workshops", label: "STEM WORKSHOPS" },
    { value: "advanced-labs", label: "ADVANCED LABS" },
    { value: "technical-workshops", label: "TECHNICAL WORKSHOPS" },
    { value: "3d-printing", label: "3D PRINTING" },
    { value: "mechanical-cad", label: "MECHANICAL CAD" },
  ];

  const [selectedService, setSelectedService] = useState(serviceOptions[0].value); // Default to placeholder value
  const [selectedServiceLabel, setSelectedServiceLabel] = useState(serviceOptions[0].label); // Default to placeholder label
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect clicks outside

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Selected Service:', selectedService); // Access the selected value
    // Add form submission logic here (e.g., send data to an API)
    // You would send `selectedService` to your backend
  };

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
  };

  // Handle option selection
  const handleOptionClick = (value, label) => {
    setSelectedService(value);
    setSelectedServiceLabel(label);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <section 
      id="partnership-section" 
      className="section section--secondary partnership-section--gradient-bg-inverse" 
    >
      <div className="section__container">
        <div className="partnership"> 
          
          {/* LEFT COLUMN: Heading/Text and Image */}
          <div className="partnership__left-column">
            <div className="partnership__text-content"> 
              <h2 className="section__title">Reach Out</h2> 
              <p className="section__text">
                Together, let's shape the future by combining our strengths, fostering innovation, and creating solutions that will leave a lasting impact for generations to come. Fill out the form below to connect with us!
              </p>
            </div>

            <div className="partnership__icon-container">
              <div className="partnership__icon">
                <img src={sideImage} alt="Reach Out Illustration" /> 
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="partnership__form-column"> 
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name<span className="required">*</span></label>
                <input type="text" id="fullName" name="fullName" required placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact<span className="required">*</span></label>
                <input type="text" id="contact" name="contact" required placeholder="Your phone or WhatsApp number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email<span className="required">*</span></label>
                <input type="email" id="email" name="email" required placeholder="Your email address" />
              </div>
              
              {/* CUSTOM DROPDOWN IMPLEMENTATION */}
              <div className="form-group">
                <label htmlFor="interestedService">Interested Service<span className="required">*</span></label>
                <div className="custom-select-container" ref={dropdownRef}>
                  <div 
                    className={`select-selected ${selectedService === "" ? 'placeholder' : ''}`}
                    onClick={handleDropdownToggle}
                    tabIndex="0" // Make it focusable
                    onKeyDown={(e) => { // Keyboard accessibility
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleDropdownToggle();
                      }
                    }}
                  >
                    {selectedServiceLabel}
                    <span className={`select-arrow ${isDropdownOpen ? 'open' : ''}`}></span>
                  </div>

                  {isDropdownOpen && (
                    <ul className="select-items">
                      {serviceOptions.map((option) => (
                        <li
                          key={option.value}
                          onClick={() => handleOptionClick(option.value, option.label)}
                          className={option.value === selectedService ? 'same-as-selected' : ''}
                          tabIndex="0" // Make items focusable
                          onKeyDown={(e) => { // Keyboard accessibility
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleOptionClick(option.value, option.label);
                            }
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Hidden input to send the actual value with the form */}
                  <input type="hidden" name="interestedService" value={selectedService} />
                </div>
              </div>
              {/* END CUSTOM DROPDOWN */}

              <div className="form-group">
                <label htmlFor="message">Message/Requirement<span className="required">*</span></label>
                <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project or query"></textarea>
              </div>
              <Button type="submit" className="submit-btn">
                Submit
              </Button>
            </form>
          </div>

        </div> 
      </div> 
    </section>
  );
}