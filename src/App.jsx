import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import VisaNZ from './pages/VisaNZ';
import VisaUK from './pages/VisaUK'
import VisaAustralia from './pages/VisaAustralia';
import VisaGermany from './pages/VisaGermany';
import VisaCanada from './pages/VisaCanada';
import Bali from './pages/Bali';
import Thailand from './pages/Thailand';

const App = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen text-brand-dark">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/visa-new-zealand" element={<VisaNZ />} />
            <Route path="/visa-united-kingdom" element={<VisaUK />} />
            <Route path="/visa-australia" element={<VisaAustralia />} />
            <Route path="/visa-germany" element={<VisaGermany />} />
            <Route path="/visa-canada" element={<VisaCanada />} />
            <Route path="/bali" element={<Bali />} />
            <Route path="/thailand" element={<Thailand />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
