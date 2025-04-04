import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TitleSection from './components/TitleSection';
import ConceptSection from './components/ConceptSection';
import FeaturesSection from './components/FeaturesSection';
import WowFeaturesSection from './components/WowFeaturesSection';
import TechStackSection from './components/TechStackSection';
import TimelineSection from './components/TimelineSection';
import BudgetSection from './components/BudgetSection';
import WhyUsSection from './components/WhyUsSection';
import CtaSection from './components/CtaSection';
import TarotApp from './components/tarot/TarotApp';

const MainApp = () => {
  useEffect(() => {
    console.log('Приложение запущено');
    
    // Логгирование загрузки секций
    setTimeout(() => {
      const sections = [
        'title-slide', 'concept', 'features', 'wow-features', 
        'tech-stack', 'timeline', 'budget', 'why-us', 'cta'
      ];
      
      sections.forEach(id => {
        const element = document.getElementById(id);
        console.log(`Секция ${id} загружена: ${!!element}`);
      });
    }, 1000);
  }, []);

  return (
    <div className="vtc-app">
      <TitleSection />
      <ConceptSection />
      <FeaturesSection />
      <WowFeaturesSection />
      <TechStackSection />
      <TimelineSection />
      <BudgetSection />
      <WhyUsSection />
      <CtaSection />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/tarotapp" element={<TarotApp />} />
      </Routes>
    </Router>
  );
};

export default App; 