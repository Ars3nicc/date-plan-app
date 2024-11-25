import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import HappyPage from './components/Happy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/happy-page" element={<HappyPage />} />
    </Routes>
  );
}

export default App;