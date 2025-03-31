import React from 'react';
import SectionHeader from './SectionHeader';
import BenefitItem from './BenefitItem';

const WhyUsSection = () => {
  return (
    <section className="slide" id="why-us">
      <div className="container">
        <SectionHeader title="✅ Почему мы" />
        
        <div className="glass-card">
          <div className="benefits-box">
            <BenefitItem 
              icon="🚀" 
              title="Технологическая команда" 
              description="Креативный R&D-отдел с опытом в создании интерактивных 3D-сред" 
            />
            <BenefitItem 
              icon="🎮" 
              title="Игровая экспертиза" 
              description="Специалисты по игровым, мультиплеерным и UX-системам" 
            />
            <BenefitItem 
              icon="🤖" 
              title="ИИ-интеграция" 
              description="Опыт в интеграции ИИ и интерактивных агентов в коммерческие проекты" 
            />
            <BenefitItem 
              icon="🛠" 
              title="Гибкая архитектура" 
              description="Настраиваемый процесс разработки под ваши потребности и vision" 
            />
          </div>
          
          <div className="highlight-box">
            <p className="highlight-text">Мы видим миссию в развитии новых цифровых миров</p>
            <p>Наш подход не ограничивается созданием обычного онлайн-магазина – мы строим полноценную экосистему для виртуальной торговли, сочетающую социальное взаимодействие, геймификацию и коммерцию в едином опыте.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection; 