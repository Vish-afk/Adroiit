// src/pages/TechnicalWorkshopsPage.jsx
import React from 'react';
import PartnershipSection from '../components/layout/PartnershipSection'; // Re-use existing common component
import WhyChooseUsSection from '../components/stem-workshops/WhyChooseUsSection'; // Re-use Why Choose Us from STEM Workshops

// Import specific sections for Technical Workshops
import TechnicalWorkshopsHero from '../components/technical-workshops/TechnicalWorkshopsHero';
import TechnicalWorkshopsCtaSection from '../components/technical-workshops/TechnicalWorkshopsCtaSection';

export default function TechnicalWorkshopsPage() {
    return (
        <>
            <TechnicalWorkshopsHero />
            {/* Reusing the Why Choose Us section from STEM Workshops as the content is the same */}
            <WhyChooseUsSection />
            <TechnicalWorkshopsCtaSection />
            <PartnershipSection /> {/* Re-using the common partnership section */}
        </>
    );
}