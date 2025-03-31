import React, { useEffect } from 'react';

const TitleSection = () => {
  useEffect(() => {
    // Создание и анимация частиц при монтировании компонента
    const createParticles = () => {
      const container = document.querySelector('.particles-container');
      if (!container) return;
      
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      const particleColors = [
        'rgba(59, 130, 246, 0.6)', // Синий
        'rgba(16, 185, 129, 0.6)', // Зеленый
        'rgba(99, 102, 241, 0.6)', // Индиго
        'rgba(14, 165, 233, 0.6)'  // Голубой
      ];
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 15 + 5;
        const colorIndex = Math.floor(Math.random() * particleColors.length);
        
        particle.className = 'ai-particle';
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '30%';
        particle.style.backgroundColor = particleColors[colorIndex];
        particle.style.boxShadow = `0 0 ${size/2}px ${particleColors[colorIndex]}`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.7 + 0.3;
        
        const animationDuration = Math.random() * 30 + 20;
        const animationDelay = Math.random() * 10;
        particle.style.animation = `floatParticle ${animationDuration}s linear infinite`;
        particle.style.animationDelay = `-${animationDelay}s`;
        
        container.appendChild(particle);
      }
    };

    // Эффект 3D при движении мыши
    const handleMouseMove = (e) => {
      const titleSlide = document.getElementById('title-slide');
      const particlesContainer = document.querySelector('.particles-container');
      if (!titleSlide || !particlesContainer) return;
      
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      
      particlesContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      
      const particles = document.querySelectorAll('.ai-particle');
      particles.forEach(particle => {
        const speed = parseFloat(particle.style.width) / 10;
        const xMove = xAxis * speed;
        const yMove = yAxis * speed;
        particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    };

    // Сброс эффекта при уходе мыши
    const handleMouseLeave = () => {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) return;
      
      particlesContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
      
      const particles = document.querySelectorAll('.ai-particle');
      particles.forEach(particle => {
        particle.style.transform = 'translate(0px, 0px)';
      });
    };

    // Инициализация эффектов
    createParticles();
    
    const titleSlide = document.getElementById('title-slide');
    if (titleSlide) {
      titleSlide.addEventListener('mousemove', handleMouseMove);
      titleSlide.addEventListener('mouseleave', handleMouseLeave);
    }

    // Очистка при размонтировании
    return () => {
      if (titleSlide) {
        titleSlide.removeEventListener('mousemove', handleMouseMove);
        titleSlide.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="title-slide" className="title-slide">
      <div className="particles-container"></div>
      <div className="title-content">
        <h1 className="hero-title">Виртуальный Торговый Центр <span className="vtc-emoji">🛒</span></h1>
        <p className="hero-subtitle">
          Создание 3D-платформы для аренды виртуальных магазинов, навигации, общения и покупок товаров в интерактивном пространстве
        </p>
        
        <div className="main-screenshots">
          <div className="main-screenshot-wrapper">
            <img 
              src="/images/vtc-ui-2.png" 
              alt="UI Виртуального торгового центра" 
              className="main-screenshot"
              loading="eager"
              width="auto"
              height="300"
            />
          </div>
          <div className="main-screenshot-wrapper">
            <img 
              src="/images/ui2.png" 
              alt="Интерфейс виртуального магазина" 
              className="main-screenshot"
              loading="eager"
              width="auto"
              height="300"
            />
          </div>
        </div>
        
        <a href="https://t.me/sapientweb" className="cta-primary">Начать сотрудничество</a>
      </div>
    </section>
  );
};

export default TitleSection; 