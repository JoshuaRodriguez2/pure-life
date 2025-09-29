import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="heading-2">About Purelife Wellness</h2>
            <p className="text-lg">
              We believe that true health comes from addressing the root causes of illness, 
              not just treating symptoms. Our functional medicine approach focuses on your 
              unique biochemistry, lifestyle, and environment to create personalized 
              treatment plans that restore optimal wellness.
            </p>
            <p className="text-base">
              With over 10 years of experience in functional medicine, our team of 
              certified practitioners brings cutting-edge science and compassionate 
              care directly to your home. We understand that your time is valuable, 
              which is why we've designed our services to fit seamlessly into your life.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Evidence-Based Approach</h4>
                  <p>All treatments are backed by the latest scientific research and clinical evidence.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Compassionate Care</h4>
                  <p>We treat you as a whole person, not just a collection of symptoms.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Personalized Treatment</h4>
                  <p>Every plan is tailored to your unique needs, goals, and lifestyle.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-card">
              <div className="image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Veronica Acker</h3>
              <p>Lead Functional Medicine Practitioner</p>
              <div className="credentials">
                <span>NP</span>
                <span>10+ Years Experience</span>
              </div>
            </div>
            
            <div className="stats-card">
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
        </div>
      </div>
    </section>
  );
};

export default About;
