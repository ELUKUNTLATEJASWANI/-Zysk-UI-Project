import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">  
      <div className="features-intro">
        <span className="badge">Features</span>
        <h2 className="features-subtitle">Cutting-edge features for advanced analytics</h2>
        <p className="features-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="images-container">
        <div className="desktop-image-container">
          <img src={require('./assets/images/Desktop.png')} alt="Desktop" className="desktop-image" />
          <img src={require('./assets/images/Phone.png')} alt="Phone" className="phone-image" />
        </div>
      </div>

    
      <div className="features-grid">
        <div className="feature-item">
          <img src={require('./assets/images/Featured icon.png')} alt="Feature 1" className="feature-icon" />
          <h3 className="feature-title">Share team inboxes</h3>
          <p className="feature-description">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
          <a href="#" className="learn-more">Learn more &rarr;</a>
        </div>

        <div className="feature-item">
          <img src={require('./assets/images/Featured icon (1).png')} alt="Feature 2" className="feature-icon" />
          <h3 className="feature-title">Deliver instant answers</h3>
          <p className="feature-description">
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </p>
          <a href="#" className="learn-more">Learn more &rarr;</a>
        </div>

        <div className="feature-item">
          <img src={require('./assets/images/Featured icon (2).png')} alt="Feature 3" className="feature-icon" />
          <h3 className="feature-title">Manage your team with reports</h3>
          <p className="feature-description">
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.
          </p>
          <a href="#" className="learn-more">Learn more &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
