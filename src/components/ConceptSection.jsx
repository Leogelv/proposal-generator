import React from 'react';
import SectionHeader from './SectionHeader';
import BenefitItem from './BenefitItem';

const ConceptSection = () => {
  return (
    <section className="slide" id="concept">
      <div className="container">
        <SectionHeader title="🔥 Концепция проекта" />
        
        <div className="glass-card">
          <div className="highlight-box">
            <p>
              <span className="highlight-text">
                Это не просто онлайн-магазин.
              </span> Это новая форма цифровой торговли с душой метавселенной, но без перегруза, красиво, удобно, в браузере, без VR-гарнитур.
            </p>
          </div>
          
          <p>В нашем виртуальном торговом центре:</p>
          <ul>
            <li>Пользователь персонажем входит в 3D-мир</li>
            <li>Прогуливается по этажам виртуального центра</li>
            <li>Общается с другими в реальном времени</li>
            <li>Заходит в магазины, рассматривает товары на стенах</li>
            <li>Взаимодействует с ИИ-консультантами</li>
            <li>Оформляет покупку, как в игре — но с реальными товарами и реальной доставкой</li>
          </ul>
          
          <div className="benefits-box">
            <BenefitItem 
              icon="🎮" 
              title="Интерактивность" 
              description="Полное погружение в процесс покупок через игровые механики и 3D-взаимодействие" 
            />
            <BenefitItem 
              icon="👥" 
              title="Социальный опыт" 
              description="Общение с другими покупателями и продавцами в реальном времени" 
            />
            <BenefitItem 
              icon="🤖" 
              title="ИИ-поддержка" 
              description="Виртуальные консультанты помогают с навигацией и подбором товаров" 
            />
            <BenefitItem 
              icon="💻" 
              title="Кроссплатформенность" 
              description="Доступ через браузер и мобильные приложения без сложных требований" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection; 