import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import MenuPage from './components/MenuPage.jsx'; 
import React from 'react';
import Gallery from './components/Gallery.jsx'

const App = () => {
  return (
    <Router>
      <div className="app-container">
      <Navbar />
      <div className='none'>
      <Routes>
      <Route path="/" element={<MenuPage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes></div>
      
      </div>
    </Router>
  );
};

export default App;
