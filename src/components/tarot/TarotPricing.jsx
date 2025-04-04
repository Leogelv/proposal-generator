import React from 'react';

const TarotPricing = () => {
  const packages = [
    {
      title: "Стандартный пакет",
      price: "$8,000",
      description: "Полноценное мобильное приложение для iOS и Android с основными функциями и базой данных карт Таро.",
      savings: "Экономия до 65%",
      features: [
        "Полноценное нативное приложение для iOS и Android",
        "Интеграция с Supabase backend",
        "Полная база данных карт Таро (78 карт) с современными интерпретациями",
        "Функция \"Карта дня\" с push-уведомлениями",
        "3-5 базовых раскладов (Три карты, Простой крест и др.)",
        "Базовая аутентификация и профиль пользователя",
        "Простые анимации и интерактивные элементы",
        "Минималистичный UI с кастомизированной темой",
        "Базовая система аффирмаций",
        "Простая функция ведения журнала/заметок",
        "Разделение на Free/Premium функционал",
        "Настройка подписок внутри приложения"
      ]
    },
    {
      title: "Премиум пакет",
      price: "$13,000",
      description: "Расширенная версия приложения с продвинутым функционалом, AI-интеграцией и анимированными 3D-картами.",
      isPremium: true,
      savings: "Экономия до 70%",
      features: [
        "Все функции Стандартного пакета",
        "Продвинутые 3D-анимации карт с интеграцией Three.js",
        "Аудио-реактивные анимации и звуковые эффекты",
        "8-10 раскладов включая Кельтский Крест",
        "Интерактивный персонаж-талисман (кролик) с анимациями",
        "Расширенная система ведения дневника с отслеживанием настроения",
        "AI-улучшенные интерпретации карт (интеграция с OpenAI)",
        "Функционал социального шеринга",
        "Поддержка нескольких языков (русский + 2 дополнительных)",
        "Улучшенная система аффирмаций с категориями",
        "Элементы геймификации (достижения, отслеживание прогресса)",
        "Подробная аналитика использования",
        "Гибкие опции подписки (дневная/недельная/месячная)"
      ]
    }
  ];

  const deliverables = {
    standard: [
      "Функциональное мобильное приложение для iOS и Android",
      "Репозиторий исходного кода",
      "Базовые ассеты для App Store",
      "Размещение в App Store и Google Play",
      "Базовая пользовательская документация"
    ],
    premium: [
      "Всё из Стандартного пакета",
      "Полный исходный код с документацией",
      "Профессиональные ассеты для App Store (скриншоты, видео, описания)",
      "Оптимизация для поисковых запросов в магазинах приложений",
      "Пользовательская документация и обучающие материалы",
      "1 месяц поддержки после запуска",
      "Базовые маркетинговые материалы для социальных сетей"
    ]
  };

  const timeline = [
    {
      date: "Неделя 1-2",
      title: "Планирование и дизайн",
      description: "Определение требований, разработка пользовательских сценариев, создание wireframes и макетов интерфейса."
    },
    {
      date: "Неделя 3-4",
      title: "Настройка окружения",
      description: "Настройка Supabase, создание базы данных карт Таро, настройка среды разработки и базовой архитектуры приложения."
    },
    {
      date: "Неделя 5-7",
      title: "Базовая функциональность",
      description: "Разработка ядра приложения, включая аутентификацию, профили пользователей, базу данных карт и простые расклады."
    },
    {
      date: "Неделя 8-10",
      title: "Расширенный функционал",
      description: "Добавление дополнительных функций, включая уведомления, дневник, аффирмации и настройки подписки."
    },
    {
      date: "Неделя 11-12",
      title: "Тестирование и оптимизация",
      description: "Комплексное тестирование приложения, исправление багов, оптимизация производительности и пользовательского опыта."
    },
    {
      date: "Неделя 13-14",
      title: "Запуск и поддержка",
      description: "Подготовка к релизу, публикация в App Store и Google Play, начало постпродакшн поддержки."
    }
  ];

  return (
    <>
      <section id="pricing" className="pricing-section">
        <div className="section-content">
          <h2 className="section-title">Варианты разработки</h2>
          <p className="section-description">
            Выберите подходящий вариант разработки для вашего проекта
          </p>
          
          <div className="packages-container">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`package-card ${pkg.isPremium ? 'premium' : 'standard'}`}
              >
                <span className="savings-badge">{pkg.savings}</span>
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
                
                <a 
                  href="https://t.me/sapientweb" 
                  className="cta-button primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Выбрать этот вариант
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="section-content">
          <h2 className="section-title">Процесс разработки</h2>
          <p className="section-description">
            Прозрачный и поэтапный подход к созданию вашего приложения
          </p>
          
          <div className="timeline-section">
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">{item.date}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="deliverables" className="deliverables-section">
        <div className="section-content">
          <h2 className="section-title">Что вы получите</h2>
          <p className="section-description">
            Полный комплект материалов и готовое к использованию приложение
          </p>
          
          <div className="deliverables-container">
            <div className="deliverable-column">
              <h3 className="sub-title">Стандартный пакет</h3>
              <ul className="deliverables-list">
                {deliverables.standard.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="deliverable-column">
              <h3 className="sub-title">Премиум пакет</h3>
              <ul className="deliverables-list">
                {deliverables.premium.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id="cta" className="cta-section">
        <div className="cta-container">
          <span className="savings-badge large">Экономия до 3 млн рублей</span>
          <h2 className="cta-title">Готовы начать разработку вашего приложения Таро?</h2>
          <p className="cta-text">
            Наша команда экспертов готова превратить вашу идею в реальность по цене в 3 раза ниже рыночной. Свяжитесь с нами сегодня, чтобы обсудить детали проекта и начать путь к запуску вашего приложения.
          </p>
          <a 
            href="https://t.me/sapientweb" 
            className="cta-button primary large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Связаться с нами
          </a>
          <p className="promo-text">
            * При заказе до конца месяца — разработка прототипа бесплатно
          </p>
        </div>
      </section>
    </>
  );
};

export default TarotPricing; 