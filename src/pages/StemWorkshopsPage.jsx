// src/pages/StemWorkshopsPage.jsx
import React from 'react';
import PartnershipSection from '../components/layout/PartnershipSection'; // Existing common component

// Import each section component individually from their new files
import StemWorkshopsHero from '../components/stem-workshops/StemWorkshopsHero';
import OurStemWorkshopsSection from '../components/stem-workshops/OurStemWorkshopsSection';
import WhyChooseUsSection from '../components/stem-workshops/WhyChooseUsSection';
import WorkshopsCtaSection from '../components/stem-workshops/WorkshopsCtaSection';

export default function StemWorkshopsPage() {
    return (
        <>
            {/* Hero Section with Image and Description */}
            <StemWorkshopsHero />

            {/* Section: Our STEM Workshops (Grid of workshop types) */}
            <OurStemWorkshopsSection />

            {/* Section: Why Choose Us? (Cards for Hands-On, Industry-Relevant, Affordable) */}
            <WhyChooseUsSection />

            {/* Call to Action Section for Workshops */}
            <WorkshopsCtaSection />

            {/* Re-using the existing Partnership/Reach Out Section */}
            <PartnershipSection />
        </>
    );
}