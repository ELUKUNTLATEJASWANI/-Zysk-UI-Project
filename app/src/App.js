import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Testimonial from './Testimonial'; 
import FeaturesSection from './FeaturesSection';
import FAQSection from './FAQSection';
import BlogSection from './BlogSection';
import CTASection from './Section';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* New Feature Section */}
      <section className="feature-section">
        {/* Badge and Checkout Text */}
        <div className="feature-heading">
          <span className="badge">New Feature</span>
          <span className="checkout-text">Checkout the team dashboard →</span>
        </div>

        <h1 className="main-title">Beautiful analytics to grow smarter</h1>

       
        <p className="subtext">
          Powerful, self-serve product and growth analytics to help you convert, engage,<br></br> and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Buttons */}
        <div className="button-group">
          <button className="demo-btn">
            <img src={require('./Icon.png')} alt="play" className="icon" /> Demo
          </button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </section>
      {/* Image Section */}
      <section className="image-section">
        <img src={require('./3X2 screen.png')} alt="banner" className="banner-image" />
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="social-proof-container">
          <h2 className="social-proof-title">Join 4,000+ companies already growing</h2>
  {/* Company Logos */}
  <div className="logos-container">
            <img src={require('./boltshift-logo.png')} alt="Boltshift" className="company-logo" />
            <img src={require('./lightbox-logo.png')} alt="LightBox" className="company-logo" />
            <img src={require('./featerdev-logo.png')} alt="Featerdev" className="company-logo" />
            <img src={require('./spherule-logo.png')} alt="Spherule" className="company-logo" />
            <img src={require('./globalbank-logo.png')} alt="GlobalBank" className="company-logo" />
            <img src={require('./nietzsche-logo.png')} alt="Nietzsche" className="company-logo" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-intro">
          <h2 className="features-title">Features</h2>
          <h3 className="features-subtitle">Analytics that feels like it’s from the future</h3>
          <p className="features-description">
            Powerful, self-serve product and growth analytics to help you convert, engage, 
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        {/* Second Container */}
        <div className="features-grid">
          <div className="feature-item">
            <img src={require('./Featured icon.png')} alt="Feature 1" className="feature-icon" />
            <h4 className="feature-title">Share team inboxes</h4>
            <p className="feature-description">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
            </p>
          </div>
          <div className="feature-item">
            <img src={require('./Featured icon (1).png')} alt="Feature 2" className="feature-icon" />
            <h4 className="feature-title">Deliver instant answers</h4>
            <p className="feature-description">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
          </div>
          <div className="feature-item">
            <img src={require('./Featured icon (2).png')} alt="Feature 3" className="feature-icon" />
            <h4 className="feature-title">Manage your team with reports</h4>
            <p className="feature-description">
              Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
          <div className="feature-item">
            <img src={require('./Featured icon (3).png')} alt="Feature 4" className="feature-icon" />
            <h4 className="feature-title">Connect with customers</h4>
            <p className="feature-description">
              Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
            </p>
          </div>
          <div className="feature-item">
            <img src={require('./Featured icon (4).png')} alt="Feature 5" className="feature-icon" />
            <h4 className="feature-title">Connect the tools you already use</h4>
            <p className="feature-description">
              Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="feature-item">
            <img src={require('./Featured icon (5).png')} alt="Feature 6" className="feature-icon" />
            <h4 className="feature-title">Our people make the difference</h4>
            <p className="feature-description">
              We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
            </p>
          </div>
        </div>
      </section>
      <Testimonial />
      <FeaturesSection />
      <FAQSection />
      <BlogSection />
      <CTASection/>
      <Footer/>
    </div>
  );
}

export default App;
