// src/pages/StemLabsPage.jsx
import React from 'react';
import PartnershipSection from '../components/layout/PartnershipSection'; // Existing component

// Import the newly created component sections
import StemLabsHero from '../components/stem-labs/StemLabsHero';
import WhatIsStemLabSection from '../components/stem-labs/WhatIsStemLabSection';
import WhySetupStemLabSection from '../components/stem-labs/WhySetupStemLabSection';
import WhyPartnerSection from '../components/stem-labs/WhyPartnerSection';
import CtaSection from '../components/stem-labs/CtaSection';

export default function StemLabsPage() {
    return (
        <>
            {/* Hero Section */}
            <StemLabsHero />

            {/* Section 1: What is a STEM Lab? */}
            <WhatIsStemLabSection />

            {/* Section 2: Why set up a STEM Lab? */}
            <WhySetupStemLabSection />

            {/* Section 3: Why Partner with us to setup STEM lab? */}
            <WhyPartnerSection />

            {/* Call to Action Section */}
            <CtaSection />

            {/* Your existing Partnership/Reach Out Section */}
            <PartnershipSection />
        </>
    );
}
