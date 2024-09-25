
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home'; // Import the Home component

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} /> {/* Add the Home route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;



