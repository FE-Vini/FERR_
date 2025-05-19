import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import { Squares } from './components/ui/squares';
import References from './pages/References';
import Services from './components/Services';
import Contact from './components/Contact';
import { Quote } from './components/ui/quote';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import Jobs from './components/Jobs';
import Datenschutz from './pages/Datenschutz';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/references" element={<References />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/" element={
          <div className={`min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
            <Header />
            <main className="relative z-10">
              <Hero onLoad={() => setIsLoading(false)} />
              <Quote />
              <About />
              <Services />
              <Jobs />
              <Contact />
            </main>
            <div className="relative z-10">
              <Footer />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;