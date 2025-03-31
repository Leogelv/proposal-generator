import React from 'react';
import SectionHeader from './SectionHeader';

const BudgetSection = () => {
  const benefits = [
    "Более быстрые сроки реализации",
    "Применение передовых методов ИИ и веб-графики",
    "Вовлечение в креативный процесс разработки",
    "Экономию в размере 2 500 000 ₽"
  ];

  const paymentTerms = [
    {
      percentage: "50%",
      description: "Старт разработки"
    },
    {
      percentage: "30%",
      description: "После демо версии"
    },
    {
      percentage: "20%",
      description: "После сдачи проекта"
    }
  ];

  return (
    <section className="slide" id="budget">
      <div className="container">
        <SectionHeader title="💰 Бюджет" />
        
        <div className="glass-card text-center">
          <div className="pricing-container">
            <div className="pricing-item">
              <h3>Стоимость реализации:</h3>
              <p className="price-old">9 000 000 ₽</p>
            </div>
            
            <div className="pricing-item">
              <h3>С учетом оптимизации:</h3>
              <p className="price-tag">6 500 000 ₽</p>
            </div>
          </div>
          
          <div className="highlight-box">
            <p>При передаче проекта в наш R&D-отдел вы получаете:</p>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <h3 style={{ marginTop: '30px' }}>💸 Условия оплаты</h3>
          <div className="payment-terms">
            {paymentTerms.map((term, index) => (
              <div key={index} className="payment-term">
                <h4>{term.percentage}</h4>
                <p>{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection; 