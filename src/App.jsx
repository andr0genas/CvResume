import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'; // Import NavBar component
import HomePage from './Components/HomePage'; // Import HomePage component
import Footer from './Components/Footer'; // Import Footer component
import CarouselAboutMe from './Components/CarouselAboutMe'; // Import CarouselAboutMe component
import Rating from './Components/Rating'; // Import Rating component
import List from './Components/List'; // Import List component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS

function App() {
  return (
    <Router>
      {/* NavBar component */}
      <NavBar />
      <Routes>
        {/* Route for HomePage */}
        <Route path="/" element={<HomePage />} />
        {/* Route for About page */}
        <Route path="/about" element={<CarouselAboutMe />} />
        {/* Route for Rating page */}
        <Route path="/rating" element={<Rating />} />
        {/* Route for List page */}
        <Route path="/list" element={<List />} /> 
      </Routes>
      {/* Footer component */}
      <Footer />
    </Router>
  );
}



export default App