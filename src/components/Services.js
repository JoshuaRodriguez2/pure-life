import React, { useState } from 'react';
import './Services.css';

const Services = ({ selectedService, setSelectedService }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    {
      id: 'preventive-visits',
      title: 'Preventive Visits',
      shortDescription: 'Stay ahead of illness and invest in your long-term health',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="#14b8a6" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      details: {
        description:
          'Stay ahead of illness and invest in your long-term health. Our preventive visits focus on early detection, assessment, and lifestyle guidance to help you thrive. Each visit includes a personalized wellness plan, routine screenings, and health education tailored to your goals.',
        includes: [
          'Personalized wellness plan',
          'Routine health screenings',
          'Lifestyle and nutrition guidance',
          'Early detection and assessment',
          'Health education and counseling'
        ],
        duration: '1 hour',
        price: 'Starting at $200',
        atHome: true
      }
    },
    {
      id: 'sick-visits',
      title: 'Sick Visits',
      shortDescription: 'Timely evaluation and treatment when you’re not feeling well',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18M4 7h16M6 7l3 6H3l3-6zm12 0l3 6h-6l3-6zM4 19h16" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      details: {
        description:
          'When you’re not feeling well, we come to you. Our mobile sick visits provide timely evaluation and treatment for acute conditions such as sore throat, sinus infections, ear pain, urinary symptoms, fever, cough, rashes, and more. On-site rapid testing for strep, flu, RSV, and COVID-19 is available, along with same-day medication support when needed.',
        includes: [
          'Evaluation for common illnesses',
          'On-site rapid testing (strep, flu, RSV, COVID-19)',
          'Same-day medication support',
          'Mobile visit convenience',
          'Follow-up care guidance'
        ],
        duration: '30–60 minutes',
        price: 'Starting at $250',
        atHome: true
      }
    },
    {
      id: 'well-child-checks',
      title: 'Well Child Checks',
      shortDescription: 'Gentle, thorough care for every stage of childhood',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="6" stroke="#14b8a6" strokeWidth="2" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      details: {
        description:
          'From newborns to teens, we provide gentle and thorough care for every stage of your child’s growth. Our well child visits cover developmental milestones, growth tracking, vaccinations, and guidance on nutrition, sleep, and behavioral health — all delivered in a comfortable, family-friendly environment.',
        includes: [
          'Developmental milestone evaluation',
          'Growth and health tracking',
          'Vaccination review and administration',
          'Nutrition and sleep guidance',
          'Behavioral and family wellness support'
        ],
        duration: '45–60 minutes',
        price: 'Starting at $175',
        atHome: true
      }
    },
    {
      id: 'weight-loss-metabolic-support',
      title: 'Weight Loss & Metabolic Support',
      shortDescription: 'Medically guided, sustainable weight management',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20c8 0 12-8 12-16 0 0-8 0-12 8 4 0 8-2 8-6 0 0-8 2-8 14z" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      details: {
        description:
          'Our medically guided weight loss services are designed to support real, sustainable results. Each plan begins with a metabolic and hormonal assessment to uncover the root cause of weight challenges. We combine nutrition counseling, lifestyle coaching, and evidence-based treatments — including GLP-1 medications when appropriate — to help you look and feel your best.',
        includes: [
          'Metabolic and hormonal assessment',
          'Nutrition and lifestyle coaching',
          'Personalized weight management plan',
          'GLP-1 medication management (when appropriate)',
          'Ongoing progress tracking and support'
        ],
        duration: 'Initial 1 hour; 30 min follow-ups',
        price: 'Starting at $350',
        atHome: true
      }
    },
    {
      id: 'functional-medicine',
      title: 'Functional Medicine Consultations',
      shortDescription: 'Identify and address the root causes of chronic issues',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2v4l-5 9a5 5 0 004.5 7h7a5 5 0 004.5-7l-5-9V2" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 6h6" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 13h4M9 17h6" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      details: {
        description:
          'For those looking beyond symptom management, our functional medicine approach identifies and addresses the root causes of chronic health issues. Using advanced diagnostic testing and personalized protocols, we focus on restoring balance in gut health, hormones, inflammation, detoxification, and metabolism.',
        includes: [
          'Advanced diagnostic testing',
          'Root cause health analysis',
          'Gut and hormone balance protocols',
          'Anti-inflammatory and detox support',
          'Personalized treatment plan'
        ],
        duration: '60–90 minutes initial; follow-ups as needed',
        price: 'Starting at $400',
        atHome: true
      }
    }
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectService = (service) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2 className="heading-2">Our Services</h2>
          <p className="text-lg">
            At PureLife Wellness, we bring compassionate, comprehensive healthcare directly to you.
            Whether you're at home, at work, or on the go, our mobile visits make it easy to stay proactive
            about your health. We care for individuals and families of all ages across Chandler, Gilbert,
            and the East Valley — blending conventional care with a functional, root-cause approach.
          </p>

          {/* ✅ PDF Download Button */}
          <a
            href="/PureLife_Wellness_Pricing_List.pdf"
            download
            className="btn btn-secondary"
            style={{ marginTop: '16px', display: 'inline-block' }}
          >
            Download Our Pricing List
          </a>
        </div>

        {/* Dropdown */}
        <div className="services-dropdown">
          <button className="dropdown-trigger" onClick={toggleDropdown}>
            <span>Select a Service to Learn More</span>
            <svg className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              {services.map((service) => (
                <button key={service.id} className="dropdown-item" onClick={() => selectService(service)}>
                  <span className="service-icon">{service.icon}</span>
                  <div className="service-info">
                    <h4>{service.title}</h4>
                    <p>{service.shortDescription}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Service Detail */}
        {selectedService && (
          <div className="service-detail">
            <div className="service-detail-header">
              <button className="close-btn" onClick={closeServiceDetail}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="service-title">
                <span className="service-icon-large">{selectedService.icon}</span>
                <h3>{selectedService.title}</h3>
              </div>
            </div>

            <div className="service-detail-content">
              <div className="service-description">
                <p className="text-lg">{selectedService.details.description}</p>
              </div>

              <div className="service-info-grid">
                <div className="info-card">
                  <h4>What's Included</h4>
                  <ul>
                    {selectedService.details.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-card">
                  <h4>Duration</h4>
                  <p className="info-value">{selectedService.details.duration}</p>
                </div>

                <div className="info-card">
                  <h4>Investment</h4>
                  <p className="info-value">{selectedService.details.price}</p>
                </div>

                <div className="info-card">
                  <h4>Location</h4>
                  <p className="info-value">{selectedService.details.atHome ? 'At Your Home' : 'Clinic Visit'}</p>
                </div>
              </div>

              <div className="service-actions">
                <a href="#contact" className="btn btn-primary">
                  Get in Touch
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Ask Questions
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <button className="btn btn-secondary service-btn" onClick={() => selectService(service)}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
