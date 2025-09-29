import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services 
        selectedService={selectedService} 
        setSelectedService={setSelectedService} 
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
