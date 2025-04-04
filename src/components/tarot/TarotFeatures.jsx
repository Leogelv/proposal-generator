import React from 'react';

const TarotFeatures = () => {
  const features = [
    {
      icon: "🎴",
      title: "Интерактивные расклады",
      description: "Более 50 классических и современных раскладов с подробными описаниями и интерпретациями"
    },
    {
      icon: "📱",
      title: "Удобный интерфейс",
      description: "Интуитивно понятное управление и красивая анимация карт"
    },
    {
      icon: "📊",
      title: "Аналитика",
      description: "Статистика раскладов, отслеживание прогресса и история консультаций"
    },
    {
      icon: "🔒",
      title: "Безопасность",
      description: "Надежное хранение данных и конфиденциальность информации клиентов"
    },
    {
      icon: "🎨",
      title: "Персонализация",
      description: "Возможность настройки интерфейса и создания собственных раскладов"
    },
    {
      icon: "💫",
      title: "Мистический опыт",
      description: "Атмосферный дизайн и звуковое сопровождение для погружения в процесс"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="section-content">
        <h2 className="section-title">Возможности</h2>
        <p className="section-description">
          Откройте для себя мощные инструменты для работы с Таро
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TarotFeatures; 