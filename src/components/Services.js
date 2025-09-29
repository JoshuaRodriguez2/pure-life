import React, { useState } from 'react';
import './Services.css';

const Services = ({ selectedService, setSelectedService }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    {
      id: 'comprehensive-assessment',
      title: 'Comprehensive Health Assessment',
      shortDescription: 'Complete evaluation of your health status',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="#14b8a6" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      details: {
        description: 'A thorough evaluation of your current health status, including detailed medical history, lifestyle factors, and comprehensive lab testing.',
        includes: [
          'Detailed medical history review',
          'Comprehensive lab panel (50+ markers)',
          'Nutritional assessment',
          'Stress and sleep evaluation',
          'Environmental toxin screening',
          'Personalized health report'
        ],
        duration: '2-3 hours',
        price: 'Starting at $450',
        atHome: true
      }
    },
    {
      id: 'hormone-optimization',
      title: 'Hormone Optimization',
      shortDescription: 'Balance and optimize your hormones naturally',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18M4 7h16M6 7l3 6H3l3-6zm12 0l3 6h-6l3-6zM4 19h16" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      details: {
        description: 'Comprehensive hormone testing and optimization using natural approaches to restore hormonal balance and vitality.',
        includes: [
          'Complete hormone panel testing',
          'Thyroid function analysis',
          'Adrenal stress assessment',
          'Sex hormone optimization',
          'Personalized treatment plan',
          'Ongoing monitoring and adjustments'
        ],
        duration: '1-2 hours initial, 30 min follow-ups',
        price: 'Starting at $350',
        atHome: true
      }
    },
    {
      id: 'gut-health-restoration',
      title: 'Gut Health Restoration',
      shortDescription: 'Heal your digestive system for optimal health',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="6" stroke="#14b8a6" strokeWidth="2"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      details: {
        description: 'Advanced gut microbiome analysis and personalized treatment to restore digestive health and overall wellness.',
        includes: [
          'Comprehensive stool analysis',
          'Food sensitivity testing',
          'Microbiome diversity assessment',
          'Personalized nutrition plan',
          'Probiotic and supplement protocol',
          'Lifestyle modification guidance'
        ],
        duration: '1.5-2 hours',
        price: 'Starting at $400',
        atHome: true
      }
    },
    {
      id: 'detoxification-program',
      title: 'Detoxification Program',
      shortDescription: 'Safe and effective toxin elimination',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20c8 0 12-8 12-16 0 0-8 0-12 8 4 0 8-2 8-6 0 0-8 2-8 14z" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      details: {
        description: 'A comprehensive detoxification program designed to eliminate toxins and support your body\'s natural cleansing processes.',
        includes: [
          'Toxin load assessment',
          'Personalized detox protocol',
          'Nutritional support plan',
          'Lifestyle modification guidance',
          'Progress monitoring',
          'Maintenance recommendations'
        ],
        duration: '2-4 weeks program',
        price: 'Starting at $300',
        atHome: true
      }
    },
    {
      id: 'at-home-lab-testing',
      title: 'At-Home Lab Testing & Monitoring',
      shortDescription: 'Convenient sample collection and continuous monitoring at home',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2v4l-5 9a5 5 0 004.5 7h7a5 5 0 004.5-7l-5-9V2" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 6h6" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 13h4M9 17h6" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      details: {
        description: 'Professional at-home collection for blood, saliva, stool, and hormone tests, with remote monitoring and follow-ups through our portal.',
        includes: [
          'At-home sample collection kits',
          'Courier pickup and lab processing',
          'Continuous wearable monitoring (optional)',
          'Results review via telehealth',
          'Personalized action plan',
          'Ongoing progress tracking'
        ],
        duration: '30–60 min collection; 30 min review',
        price: 'Starting at $250 + lab fees',
        atHome: true
      }
    },
    {
      id: 'preventive-care',
      title: 'Preventive Care & Wellness',
      shortDescription: 'Maintain optimal health and prevent disease',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      details: {
        description: 'Proactive health maintenance and disease prevention through regular monitoring, lifestyle optimization, and personalized wellness plans.',
        includes: [
          'Annual comprehensive assessment',
          'Regular health monitoring',
          'Lifestyle optimization guidance',
          'Nutritional counseling',
          'Stress management techniques',
          'Wellness maintenance plan'
        ],
        duration: '1 hour quarterly',
        price: 'Starting at $200',
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
            Comprehensive functional medicine services delivered to your home for your convenience and comfort.
          </p>
        </div>

        <div className="services-dropdown">
          <button 
            className="dropdown-trigger"
            onClick={toggleDropdown}
          >
            <span>Select a Service to Learn More</span>
            <svg 
              className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              {services.map((service) => (
                <button
                  key={service.id}
                  className="dropdown-item"
                  onClick={() => selectService(service)}
                >
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

        {selectedService && (
          <div className="service-detail">
            <div className="service-detail-header">
              <button className="close-btn" onClick={closeServiceDetail}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <p className="info-value">
                    {selectedService.details.atHome ? 'At Your Home' : 'Clinic Visit'}
                  </p>
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

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <button 
                className="btn btn-secondary service-btn"
                onClick={() => selectService(service)}
              >
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
