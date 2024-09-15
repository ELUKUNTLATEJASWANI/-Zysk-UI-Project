import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <div className="header-content">
          <p className='header-p'>Our blog</p>
          <h1>Latest blog posts</h1>
          <p className='header'>Tools and strategies modern teams need to help their companies grow.</p>
        </div>
        <button className="view-all-posts">View all posts</button>
      </div>

      <div className="blog-grid">
        <div className="blog-post">
          <img src={require('./Design.png')} alt="Design" className="blog-image" />
          <p className='blog-post-p'>Design</p>
          <h4>UX review presentations</h4>
          <p className='blog-p'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          <div className="author-info">
            <img src={require('./logo1.png')} alt="Olivia Rhye" className="author-logo" />
            <div className="author-details">
              <p>Olivia Rhye</p>
              <span>20 Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="blog-post">
          <img src={require('./Products.png')} alt="Product" className="blog-image" />
          <p className='blog-post-p'>Product</p>
          <h4>Migrating to Linear 101</h4>
          <p className='blog-p'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
          <div className="author-info">
            <img src={require('./logo2.png')} alt="Phoenix Baker" className="author-logo" />
            <div className="author-details">
              <p>Phoenix Baker</p>
              <span>19 Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="blog-post">
          <img src={require('./SE.png')} alt="Software Engineering" className="blog-image" />
          <p className='blog-post-p'>Software Engineering</p>
          <h4>Building your API stack</h4>
          <p className='blog-p'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
          <div className="author-info">
            <img src={require('./logo3.png')} alt="Lana Steiner" className="author-logo" />
            <div className="author-details">
              <p>Lana Steiner</p>
              <span>18 Jan 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
