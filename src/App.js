import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import About from './pages/About';
import DigitalTwin from './pages/DigitalTwin'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Prediction />} />
        <Route path="/digital-twin" element={<DigitalTwin />} /> {/* Ensure this is correct */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
