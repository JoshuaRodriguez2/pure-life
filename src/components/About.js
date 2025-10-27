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
            <div className="image-placeholder" 
     style={{
       width: '150px',
       height: '150px',
       borderRadius: '50%',
       overflow: 'hidden',
       margin: '0 auto',
       border: '4px solid #d5e7ea', // optional accent border to match your style
     }}
>
  <img
    src="/profile.png"
    alt="Veronica Acker, FNP-C"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
</div>

              <h3>Veronica Acker, FNP-C</h3>
              <p>Functional Medicine Nurse Practitioner</p>
              <div className="credentials">
                <span>12+ Years Experience</span>
                <span>Functional Medicine Certified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
