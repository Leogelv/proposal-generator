import React from 'react';

const TarotHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="savings-badge">Экономия до 70%</span>
        <h1 className="hero-title">TarotApp <span className="tarot-emoji">🔮</span> Мистика в твоём смартфоне</h1>
        <p className="hero-subtitle">Создаём инновационное мобильное приложение для тарологов и энтузиастов с современным дизайном и интуитивным интерфейсом</p>
        <div className="hero-cta">
          <a 
            href="https://t.me/sapientweb" 
            className="cta-button primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Начать сотрудничество
          </a>
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