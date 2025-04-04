import React from 'react';
import TarotHero from './TarotHero';
import TarotFeatures from './TarotFeatures';
import TarotPricing from './TarotPricing';
import './TarotApp.css';

const TarotApp = () => {
  return (
    <div className="tarot-app">
      <TarotHero />
      <TarotFeatures />
      <TarotPricing />
    </div>
  );
};

export default TarotApp; 