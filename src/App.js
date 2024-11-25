import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import HappyPage from './components/Happy';
import DateTime from './components/Selections/DateTime';
import FoodSelection from './components/Selections/Foods';
import DateTypeSelection from './components/Selections/DateType';
import RateExcitement from './components/Selections/RateExcitement';
import PostMessage from './components/PostMessage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/happy-page" element={<HappyPage />} />
      <Route path="/select-date" element={<DateTime />} />
      <Route path="/select-food" element={<FoodSelection />} />
      <Route path="/select-date-type" element={<DateTypeSelection />} />
      <Route path="/rate-excitement" element={<RateExcitement />} />
      <Route path="/post-message" element={<PostMessage />} />
      
    </Routes>
  );
}

export default App;