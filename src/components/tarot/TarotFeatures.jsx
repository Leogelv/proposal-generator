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

  const benefitItems = [
    {
      icon: "🧙‍♂️",
      title: "Профессиональных тарологов",
      description: "Расширьте спектр ваших услуг и привлекайте новых клиентов через цифровую платформу"
    },
    {
      icon: "🌱",
      title: "Начинающих практиков",
      description: "Изучайте значения карт и раскладов в интерактивном формате с подробными объяснениями"
    },
    {
      icon: "✨",
      title: "Энтузиастов Таро",
      description: "Получайте ежедневные инсайты и возможности для личностного роста с помощью карты дня"
    },
    {
      icon: "🔍",
      title: "Искателей мистики",
      description: "Погрузитесь в мир эзотерических практик с красивым и удобным цифровым проводником"
    }
  ];

  const techBenefits = [
    {
      icon: "⚡",
      title: "Скорость разработки",
      description: "Запуск MVP через 4-6 недель и полноценный продукт в 2-3 раза быстрее рынка"
    },
    {
      icon: "💰",
      title: "Оптимальная стоимость",
      description: "Экономия до 70% благодаря отлаженным процессам и использованию ИИ-инструментов"
    },
    {
      icon: "🔄",
      title: "Гибкость и итерации",
      description: "Еженедельные демонстрации прогресса и возможность вносить изменения в процессе работы"
    },
    {
      icon: "🔧",
      title: "Проверенный стек",
      description: "React Native/Flutter + Supabase — современное, масштабируемое и надежное решение"
    }
  ];

  return (
    <>
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

      <section id="about" className="about-section">
        <div className="section-content">
          <h2 className="section-title">О проекте</h2>
          <p className="section-description">
            TarotApp — уникальное мобильное приложение, сочетающее традиционную мудрость Таро с инновациями
          </p>
          
          <div className="highlight-box">
            <p><span className="highlight-text">Раньше</span> разработка подобных приложений обходилась в 3-5 млн рублей и занимала более года. <span className="highlight-text">Сегодня</span>, благодаря оптимизации рабочих процессов и интеграции ИИ-технологий, мы создаем качественный продукт за <span className="highlight-text">fraction стоимости и в 2-3 раза быстрее</span>.</p>
          </div>
          
          <div className="text-columns">
            <p>Мы разрабатываем приложение, которое станет незаменимым инструментом для профессиональных тарологов, начинающих практиков, энтузиастов и любителей мистики.</p>
            <p>Благодаря передовым технологиям и опыту нашей команды, мы создаем интуитивно понятные интерфейсы, которые делают взаимодействие с древней системой Таро простым и увлекательным для пользователей любого уровня.</p>
          </div>
          
          <h3 className="sub-title">Для кого мы создаем TarotApp:</h3>
          <div className="benefits-box">
            {benefitItems.map((item, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-title">
                  <span className="benefit-icon">{item.icon}</span> {item.title}
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="why-us" className="why-us-section">
        <div className="section-content">
          <h2 className="section-title">Почему выбирают нас</h2>
          <p className="section-description">
            Создаем приложения нового поколения с использованием ИИ и передовых технологий
          </p>
          
          <div className="benefits-box">
            {techBenefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-title">
                  <span className="benefit-icon">{benefit.icon}</span> {benefit.title}
                </div>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="highlight-box">
            <h3 className="sub-title">Преимущества работы с нами:</h3>
            <ul className="advantages-list">
              <li><strong>Экспертиза в эзотерической нише</strong> — мы понимаем специфику мистических приложений и особенности целевой аудитории</li>
              <li><strong>Опыт с интеграцией ИИ</strong> — используем нейросети для создания уникальных интерпретаций карт и персонализированного опыта</li>
              <li><strong>Дополнительная маркетинговая поддержка</strong> — помогаем с продвижением приложения после запуска</li>
              <li><strong>Поэтапная оплата</strong> — оплачивайте работу по мере достижения согласованных результатов</li>
              <li><strong>Прозрачность процесса</strong> — полный доступ к проектной документации, макетам и коду на всех этапах</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TarotFeatures; 