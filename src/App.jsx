import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TarotApp from './components/tarot/TarotApp';
import Dex from './components/dex/Dex';
import DexApp from './components/dex/App';

const App = () => {
  console.log('Приложение инициализировано');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TarotApp />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/tariff" element={<DexApp />} />
      </Routes>
    </Router>
  );
};

export default App; 