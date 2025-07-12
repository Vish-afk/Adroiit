// components/home/TestimonialsSection.jsx

import React from 'react';

// TestimonialCard component for individual testimonials in the grid
// Now accepts reviewText and reviewerName separately
const TestimonialCard = ({ avatar, reviewText, reviewerName }) => {
  return (
    <div className="testimonial-card">
      <img src={avatar} alt="" className="testimonial-card__avatar" />
      {/* IMPROVEMENT: Combined review text and reviewer name in one paragraph */}
      <p className="testimonial-card__text">
        {reviewText} <span className="testimonial-card__reviewer-name">- {reviewerName}</span>
      </p>
    </div>
  );
};

// Main TestimonialsSection component
export default function TestimonialsSection() {
  const testimonials = [
    {
      avatar: "https://placehold.co/60x60/6A1B9A/FFFFFF?text=V",
      reviewText: "Seamless integration and powerful tools! Our team saw an immediate boost in productivity. The support is exceptional – truly a game-changer for our workflow.",
      reviewerName: "Vishnu",
    },
    {
      avatar: "https://placehold.co/60x60/6A1B9A/FFFFFF?text=S",
      reviewText: "The intuitive interface made onboarding a breeze, even for non-technical staff. This platform has simplified complex tasks and allowed us to focus on innovation.",
      reviewerName: "Sai",
    },
    {
      avatar: "https://placehold.co/60x60/6A1B9A/FFFFFF?text=F",
      reviewText: "An indispensable tool for our research. The data visualization capabilities are outstanding, and it integrates perfectly with our existing scientific instruments.",
      reviewerName: "Fadil",
    },
    {
      avatar: "https://placehold.co/60x60/6A1B9A/FFFFFF?text=Fh",
      reviewText: "From concept to deployment, this system has provided unmatched reliability. It’s robust, scalable, and genuinely future-proof. Highly recommended for any STEM enterprise.",
      reviewerName: "Faheem",
    },
    {
      avatar: "https://placehold.co/60x60/6A1B9A/FFFFFF?text=V",
      reviewText: "The hands-on experience students gain from your workshops gives them an edge in college applications, especially for engineering and technology programs. Highly recommend!",
      reviewerName: "Vishnu",
    },
    {
      avatar: "https://placehold.co/60x60/6A1B9A/FFFFFF?text=S",
      reviewText: "Your custom workshop modules perfectly complement our existing curriculum. The focus on interdisciplinary learning has significantly improved our students' critical thinking skills.",
      reviewerName: "Sai",
    },
  ];

  return (
    <section id="testimonials-section">
      <div className="section__container testimonials-section__container">
        <p className="testimonials-section__pre-title">12K+ HAPPY CUSTOMERS</p>
        <h2 className="testimonials-section__main-title">Users love Our Platform</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatar={testimonial.avatar}
              reviewText={testimonial.reviewText}
              reviewerName={testimonial.reviewerName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}