import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="heading-2">About Veronica Acker</h2>
            
            <p className="text-lg">
              With over 12 years in oncology and integrative healthcare, I’ve had the privilege of guiding patients and families through both healing and hardship. Those experiences taught me that true care begins with compassion, connection, and listening deeply to each person’s story.
            </p>

            <p className="text-base">
              After earning my Nurse Practitioner degree from Chamberlain University in 2017, I’ve served across diverse settings — from primary care and urgent care to wellness and weight loss clinics. Each experience reinforced how lifestyle, prevention, and whole-body balance form the foundation of lasting wellness.
            </p>

            <p className="text-base">
              My mission is to empower patients through education and evidence-based guidance — helping them create sustainable, healthy lifestyles that prevent disease and promote vitality. As a graduate of Functional Medicine University, I blend conventional medicine with a root-cause approach to restore balance and long-term health.
            </p>

            <p className="text-base">
              At PureLife Wellness, I’m honored to partner with patients on their journey toward optimal health — providing personalized, compassionate care for the mind, body, and spirit.
            </p>

           
          </div>
               
          <div className="about-image">
            <div className="image-card">
              <div className="image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Veronica Acker, FNP-C</h3>
              <p>Functional Medicine Nurse Practitioner</p>
              <div className="credentials">
                <span>12+ Years Experience</span>
                <span>Functional Medicine Certified</span>
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
