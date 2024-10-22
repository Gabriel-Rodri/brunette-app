// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlibiotecaPage from './pages/BlibiotecaPage';
import AboutMe from './pages/AboutMe';
import Formulario from './pages/Formulario';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blibioteca" element={<BlibiotecaPage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
