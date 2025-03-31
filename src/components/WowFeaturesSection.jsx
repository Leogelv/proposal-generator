import React from 'react';
import SectionHeader from './SectionHeader';
import BenefitItem from './BenefitItem';

const WowFeaturesSection = () => {
  return (
    <section className="slide" id="wow-features">
      <div className="container">
        <SectionHeader title="💡 Дополнительные вау-фичи" />
        
        <div className="glass-card">
          <div className="benefits-box">
            <BenefitItem 
              icon="🎭" 
              title="Режим «невидимки»" 
              description="Тайный посетитель (например, для владельцев магазинов)" 
            />
            <BenefitItem 
              icon="🧠" 
              title="ИИ-консультант" 
              description="Внутри магазина (по описанию товара)" 
            />
            <BenefitItem 
              icon="🛍" 
              title="Комнаты интересов" 
              description="Неформальные локации внутри ТЦ" 
            />
            <BenefitItem 
              icon="🖼" 
              title="Живая стена желаний" 
              description="Можно написать, что ищешь" 
            />
            <BenefitItem 
              icon="🎤" 
              title="ИИ-опросы от NPC" 
              description="Сбор данных о поведении и желаниях пользователей" 
            />
            <BenefitItem 
              icon="🧬" 
              title="Кастомизация аватара" 
              description="Позже — примерка одежды" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WowFeaturesSection; 