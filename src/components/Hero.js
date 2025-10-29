import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="heading-1">
            Mobile Wellness Clinic That <br />
              <span className="highlight"> Comes to You</span>
            </h1>
            <p className="text-lg hero-description">
            Personalized care, delivered to your door. We combine advanced diagnostics with holistic care to address your health needs and help you reach your optimal well-being.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">
                Explore Our Services
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Patients Helped</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">Patient Satisfaction</span>
              </div>
             
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#5D9A9F"/>
                  <path d="M19 15L19.5 18L22 18.5L19.5 19L19 22L18.5 19L16 18.5L18.5 18L19 15Z" fill="#975D8C"/>
                </svg>
              </div>
              <h3>Personalized Care</h3>
              <p>Your health journey is uniqu, your care should be too. At Purelife wellness we take the time to listen,understand and create a plan tailored to your body, lifestyle, and goals.</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#5D9A9F"/>
                </svg>
              </div>
              <h3>At-Home Convenience</h3>
              <p>Care in the comfort of your home. Skip the waiting rooms, we bring high quality and compassionate care directly to you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
