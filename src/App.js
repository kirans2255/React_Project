import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weddinginvitation from './Wedding';
import DisplayInvitation from './Display';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weddinginvitation />} />
        <Route path="/display" element={<DisplayInvitation />} />
      </Routes>
    </Router>
  );
};

export default App;
