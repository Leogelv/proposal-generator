import React from 'react';

const TarotPricing = () => {
  const packages = [
    {
      title: "Базовый",
      price: "1 490 ₽",
      description: "Идеально для начинающих тарологов",
      features: [
        "Основные расклады",
        "Библиотека значений карт",
        "Заметки по раскладам",
        "Базовая статистика",
        "Экспорт в PDF"
      ]
    },
    {
      title: "Профессиональный",
      price: "2 990 ₽",
      description: "Для практикующих тарологов",
      isPremium: true,
      features: [
        "Все функции базового тарифа",
        "Расширенная библиотека раскладов",
        "Клиентская база",
        "Календарь консультаций",
        "Продвинутая аналитика",
        "Интеграция с календарем",
        "Экспорт в любом формате"
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-content">
        <h2 className="section-title">Тарифы</h2>
        <p className="section-description">
          Выберите подходящий тариф для вашей практики
        </p>
        
        <div className="packages-container">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`package-card ${pkg.isPremium ? 'premium' : ''}`}
            >
              <h3 className="package-title">{pkg.title}</h3>
              <div className="package-price">{pkg.price}</div>
              <p className="package-description">{pkg.description}</p>
              
              <ul className="feature-list">
                {pkg.features.map((feature, i) => (
                  <li key={i} className={pkg.isPremium ? 'premium-feature' : ''}>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="cta-button primary">
                {pkg.isPremium ? 'Получить PRO' : 'Начать сейчас'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TarotPricing; 