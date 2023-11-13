
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Welcome';
import Details from './Details'
import Contact from './Contact';
import LoanAmount from './LoanAmount';
import Congrats from './Congrats';

const App = () => {
  return (
    <Router>
      <div>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Congrats" element={<Congrats />} />
          <Route path="/LoanAmount" element={<LoanAmount />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
