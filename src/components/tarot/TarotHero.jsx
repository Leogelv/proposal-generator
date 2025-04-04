import React from 'react';

const TarotHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">TarotApp</h1>
        <p className="hero-subtitle">Коммерческое предложение</p>
        <div className="hero-description">
          <p>Профессиональное приложение для тарологов и их клиентов</p>
          <p>Автоматизация работы • Онлайн-консультации • Безопасность данных</p>
        </div>
        <div className="hero-cta">
          <a href="#pricing" className="cta-button primary">Выбрать тариф</a>
          <a 
            href="https://tarot-app-delta.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button demo"
          >
            Демо версия
            <span className="demo-badge">Создано за 24 часа!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TarotHero; 