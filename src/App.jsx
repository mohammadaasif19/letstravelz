import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NZ from './pages/visa/NZ';
import UK from './pages/visa/UK';
import Australia from './pages/visa/Australia';
import Germany from './pages/visa/Germany';
import Canada from './pages/visa/Canada';
import Bali from './pages/international/Bali';
import Thailand from './pages/international/Thailand';
import Dubai from './pages/international/Dubai';
import Malaysia from './pages/international/Malaysia';
import Vietnam from './pages/international/Vietnam';
import Cambodia from './pages/international/Cambodia';
import Maldives from './pages/international/Maldives';
import Switzerland from './pages/international/Switzerland';
import Singapore from './pages/international/Singapore';
import SriLanka from './pages/international/SriLanka';
import Rajasthan from './pages/domestic/Rajasthan';
import Kerala from './pages/domestic/Kerala';
import JammuKashmir from './pages/domestic/JammuKashmir';
import Uttarakhand from './pages/domestic/Uttarakhand';
import HimachalPradesh from './pages/domestic/HimachalPradesh';
import Goa from './pages/domestic/Goa';
import Lakshadweep from './pages/domestic/Lakshadweep';
import AndamanNicobar from './pages/domestic/AndamanNicobar';
import Ladakh from './pages/domestic/Ladakh';
import NorthEast from './pages/domestic/NorthEast';

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
            <Route path="/visa/new-zealand" element={<NZ />} />
            <Route path="/visa/united-kingdom" element={<UK />} />
            <Route path="/visa/australia" element={<Australia />} />
            <Route path="/visa/germany" element={<Germany />} />
            <Route path="/visa/canada" element={<Canada />} />
            <Route path="/international/bali" element={<Bali />} />
            <Route path="/international/thailand" element={<Thailand />} />
            <Route path="/international/dubai" element={<Dubai />} />
            <Route path="/international/malaysia" element={<Malaysia />} />
            <Route path="/international/vietnam" element={<Vietnam />} />
            <Route path="/international/cambodia" element={<Cambodia />} />
            <Route path="/international/maldives" element={<Maldives />} />
            <Route path="/international/switzerland" element={<Switzerland />} />
            <Route path="/international/singapore" element={<Singapore />} />
            <Route path="/international/sri-lanka" element={<SriLanka />} />
            <Route path="/domestic/rajasthan" element={<Rajasthan />} />
            <Route path="/domestic/kerala" element={<Kerala />} />
            <Route path="/domestic/jammu-and-kashmir" element={<JammuKashmir />} />
            <Route path="/domestic/uttarakhand" element={<Uttarakhand />} />
            <Route path="/domestic/himachal-pradesh" element={<HimachalPradesh />} />
            <Route path="/domestic/goa" element={<Goa />} />
            <Route path="/domestic/lakshadweep" element={<Lakshadweep />} />
            <Route path="/domestic/andaman-and-nicobar-islands" element={<AndamanNicobar />} />
            <Route path="/domestic/leh-ladakh" element={<Ladakh />} />
            <Route path="/domestic/north-east" element={<NorthEast />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
