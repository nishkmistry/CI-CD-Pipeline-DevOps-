import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages to be created
import Home from './pages/Home';
import Pipeline from './pages/Pipeline';
import Build from './pages/Build';
import Deploy from './pages/Deploy';
import Health from './pages/Health';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/build" element={<Build />} />
            <Route path="/deploy" element={<Deploy />} />
            <Route path="/health" element={<Health />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
