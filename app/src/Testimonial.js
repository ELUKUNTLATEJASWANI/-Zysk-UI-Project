import React from 'react';
import './Testimonial.css'; // Import the CSS file for styling

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <img src={require('./Fictional company logo (3).png')} alt="Testimonial" className="testimonial-image" />
        <p className="testimonial-text">
          We’ve been using Untitled to kick start every new project and can’t imagine working without it.
        </p>
        <img src={require('./Avatar.png')} alt="Logo" className="author-logo" />
        <div className="testimonial-author">
          <div className="author-details">
            <p className="author-name">Candice Wu</p>
            <p className="author-position">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
