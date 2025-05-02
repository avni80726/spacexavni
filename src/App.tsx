import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Array from './Array';
import Create from './components/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CardDetails from './components/CardDetails';
import CardLaunchDetails from './components/CardLaunchDetails';


function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <Router>
    
        <div className="content">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/create" element={<Create />} />
          <Route path="/cardlaunchdetails/:id" element={<CardLaunchDetails />} />
          <Route path="/details/:id" element={<CardDetails />} />
          </Routes>
        </div>
 
    </Router>
  );
}

export default App;
