import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    
    console.log('TarotApp запущен');
    
    return () => {
      // Возвращаем стили к исходным при размонтировании
      document.body.style = '';
    };
  }, []);

  return (
    <div className="tarot-app">
      <div className="nav-button">
        <Link to="/" className="home-link">← Назад к ВТЦ</Link>
      </div>
      <TarotHero />
      <TarotFeatures />
      <TarotPricing />
    </div>
  );
};

export default TarotApp; 