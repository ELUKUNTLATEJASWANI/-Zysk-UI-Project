import React from 'react';
import './Section.css';

const CTASection = () => {
  return (
    <div className="cta-section">
      <h1>Start your free trial</h1>
      <p>Join over 4,000+ startups already growing with Untitled.</p>
      <div className="cta-buttons">
        <button className="learn-more-btn">Learn more</button>
        <button className="get-started-btn">Get started</button>
      </div>
    </div>
  );
};

export default CTASection;
