// src/pages/AdvancedLabsPage.jsx
import React from 'react';
import PartnershipSection from '../components/layout/PartnershipSection'; // Re-use existing component

// Import all necessary sections for the Advanced Labs page
import AdvancedLabsHero from '../components/advanced-labs/AdvancedLabsHero';
import OurOfferingsSection from '../components/advanced-labs/OurOfferingsSection';
import WhyChooseUsAdvancedLabsSection from '../components/advanced-labs/WhyChooseUsAdvancedLabsSection';
import AdvancedLabsCtaSection from '../components/advanced-labs/AdvancedLabsCtaSection';

export default function AdvancedLabsPage() {
    return (
        <>
            <AdvancedLabsHero />
            <OurOfferingsSection />
            <WhyChooseUsAdvancedLabsSection />
            <AdvancedLabsCtaSection />
            <PartnershipSection /> {/* Re-using the common partnership section */}
        </>
    );
}