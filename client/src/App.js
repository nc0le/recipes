import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;