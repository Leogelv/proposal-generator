import React, { useEffect } from 'react';
import TarotHero from './TarotHero';
import TarotFeatures from './TarotFeatures';
import TarotPricing from './TarotPricing';
import './TarotApp.css';

const TarotApp = () => {
  useEffect(() => {
    // Установка стилей для всей страницы
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#0F172A';
    document.body.style.color = '#F8FAFC';
    document.body.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    document.body.style.overflow = 'auto';
    
    // Установка CSS переменных
    const root = document.documentElement;
    root.style.setProperty('--tarot-primary', '#8B5CF6');
    root.style.setProperty('--tarot-secondary', '#6D28D9');
    root.style.setProperty('--tarot-accent', '#EC4899');
    root.style.setProperty('--tarot-dark', '#0F172A');
    root.style.setProperty('--tarot-light', '#F8FAFC');
    root.style.setProperty('--tarot-gradient', 'linear-gradient(to right, #6D28D9, #8B5CF6, #EC4899)');
    root.style.setProperty('--tarot-shadow', '0 10px 30px rgba(109, 40, 217, 0.2)');
    root.style.setProperty('--text-primary', '#F8FAFC');
    root.style.setProperty('--text-secondary', '#94A3B8');
    
    console.log('TarotApp запущен');
    
    return () => {
      // Возвращаем стили к исходным при размонтировании
      document.body.style = '';
    };
  }, []);

  return (
    <div className="tarot-app">
      <TarotHero />
      <TarotFeatures />
      <TarotPricing />
    </div>
  );
};

export default TarotApp; 