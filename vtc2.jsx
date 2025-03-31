import React from 'react';
import './vtc2.css';

// Главный компонент App
const App = () => {
  return (
    <div className="vtc-app">
      <TitleSection />
      <ConceptSection />
      <FeaturesSection />
      <WowFeaturesSection />
      <TechStackSection />
      <TimelineSection />
      <BudgetSection />
      <WhyUsSection />
      <CtaSection />
    </div>
  );
};

// Компонент заголовка с анимированными частицами
const TitleSection = () => {
  React.useEffect(() => {
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
        
        <div className="ui-screenshots">
          <img src="public/ui1.png" alt="UI Виртуального торгового центра" className="ui-screenshot" />
          <img src="public/ui2.png" alt="Интерфейс виртуального магазина" className="ui-screenshot" />
        </div>
        
        <a href="https://t.me/sapientweb" className="cta-primary">Начать сотрудничество</a>
      </div>
    </section>
  );
};

// Секция с концепцией проекта
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

// Секция функциональности альфа-версии
const FeaturesSection = () => {
  return (
    <section className="slide" id="features">
      <div className="container">
        <SectionHeader title="⚙️ Что входит в Альфа-версию" />
        
        <div className="glass-card">
          <p className="highlight-text" style={{ marginBottom: '20px' }}>Реализация за 4 месяца:</p>
          
          <FeatureBlock 
            title="🧱 1. Базовая архитектура" 
            items={[
              'Стартовая сцена: «Круг новичков» + террариум',
              '1 этаж торгового центра',
              '4 магазина (2 по 5 товаров, 2 по 10)',
              'Аватары (муж/жен)',
              'Система авторизации и регистрации',
              'Хостинг + CDN + оптимизация загрузки ассетов'
            ]} 
          />
          
          <FeatureBlock 
            title="🕹 2. Навигация и взаимодействие" 
            items={[
              'Перемещение по этажу (WASD / свайпы)',
              'Вход в здание',
              'Заход в магазины',
              'Общий чат',
              'Синхронизация аватаров (WebSocket мультиплеер)'
            ]} 
          />
          
          <FeatureBlock 
            title="📦 3. Магазины и товары" 
            items={[
              'Упрощенная система аренды (выбор свободного магазина)',
              'Загрузка товаров: 250x250 изображение + описание',
              'Отображение на стенах',
              'Ресайз фото, если превышает размер',
              'Ошибка, если меньше допустимого'
            ]} 
          />
          
          <FeatureBlock 
            title="🤖 4. ИИ-агенты (NPC)" 
            items={[
              'NPS на этаже у стойки',
              'Отвечает на вопросы о локации товаров',
              'Может подсказать написать в поиск',
              'Основа — RAG-система без внешней интеграции (своя база данных + диалоговая логика)',
              'Реалистичный внешний вид (если нужно — Audio2Face, TTS, STT)'
            ]} 
          />
          
          <FeatureBlock 
            title="🔎 5. Поиск" 
            items={[
              'Поиск по товарам по ключевому слову',
              'Телепортация к нужному магазину/комнате',
              'Позже можно расширить на голосовой поиск'
            ]} 
          />
          
          <FeatureBlock 
            title="📱 6. Платформы" 
            items={[
              'Web (основа, максимальная совместимость)',
              'Обёртки под Android/iOS (Capacitor или PWA)',
              'Возможность быстро масштабировать под нативные платформы'
            ]} 
          />
          
          <FeatureBlock 
            title="🎨 7. Графика" 
            items={[
              'Ультрасовременный визуал на WebGL (Three.js / Babylon.js)',
              'PBR-материалы, свет, отражения, реалистичные текстуры',
              'Быстрая загрузка через подгрузку зон (lazy loading)',
              'Поддержка слабых устройств через оптимизацию'
            ]} 
          />
        </div>
      </div>
    </section>
  );
};

// Секция дополнительных вау-фичей
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

// Секция технологического стека
const TechStackSection = () => {
  return (
    <section className="slide" id="tech-stack">
      <div className="container">
        <SectionHeader title="👨‍💻 Технологический стек" />
        
        <div className="glass-card">
          <div className="tech-stack-container">
            <div className="tech-stack-item">Three.js / Babylon.js</div>
            <div className="tech-stack-item">React</div>
            <div className="tech-stack-item">Node.js</div>
            <div className="tech-stack-item">Supabase / Firebase</div>
            <div className="tech-stack-item">PostgreSQL / Firestore</div>
            <div className="tech-stack-item">WebSocket</div>
            <div className="tech-stack-item">RAG-подсистема</div>
            <div className="tech-stack-item">TTS/STT</div>
          </div>
          
          <div className="highlight-box">
            <p>Наша архитектура обеспечивает плавное взаимодействие пользователей в 3D-пространстве с минимальной задержкой и максимальной производительностью даже на устройствах среднего класса.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Секция с таймлайном
const TimelineSection = () => {
  return (
    <section className="slide" id="timeline">
      <div className="container">
        <SectionHeader title="📅 Сроки" />
        
        <div className="glass-card">
          <p>Полная реализация Альфа-версии: <span className="highlight-text">4 месяца</span></p>
          
          <div className="timeline">
            <TimelineItem 
              date="1–2 неделя" 
              title="Старт проекта" 
              description="UI, 3D-сцена, перемещение" 
            />
            
            <TimelineItem 
              date="3–6 неделя" 
              title="Основной функционал" 
              description="Мультиплеер, магазины, товары" 
            />
            
            <TimelineItem 
              date="7–10 неделя" 
              title="Расширенный функционал" 
              description="NPC, загрузка, чат, база" 
            />
            
            <TimelineItem 
              date="11–16 неделя" 
              title="Финальный этап" 
              description="Тесты, адаптация, оптимизация" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Секция с бюджетом
const BudgetSection = () => {
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
              <li>Более быстрые сроки реализации</li>
              <li>Применение передовых методов ИИ и веб-графики</li>
              <li>Вовлечение в креативный процесс разработки</li>
              <li>Экономию в размере 2 500 000 ₽</li>
            </ul>
          </div>
          
          <h3 style={{ marginTop: '30px' }}>💸 Условия оплаты</h3>
          <div className="payment-terms">
            <div className="payment-term">
              <h4>40%</h4>
              <p>Старт разработки</p>
            </div>
            
            <div className="payment-term">
              <h4>30%</h4>
              <p>После демо версии</p>
            </div>
            
            <div className="payment-term">
              <h4>30%</h4>
              <p>После сдачи проекта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Секция "Почему мы"
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

// Секция с призывом к действию
const CtaSection = () => {
  return (
    <section className="slide" id="cta">
      <div className="container">
        <div className="glass-card text-center">
          <h2>📞 Готовы обсудить детали?</h2>
          <p className="cta-text">
            Мы можем начать уже на следующей неделе и показать первые результаты через 10 дней.
          </p>
          <a href="https://t.me/sapientweb" className="cta-primary" target="_blank" rel="noopener noreferrer">
            Начать сотрудничество
          </a>
          
          <div className="contact-info">
            <div>
              <p><strong>Контакт:</strong></p>
              <p>👤 Менеджер проекта</p>
              <p>📧 info@example.com</p>
              <p>📞 +7 (XXX) XXX-XX-XX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Вспомогательные компоненты
const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <div className="section-line"></div>
    </div>
  );
};

const BenefitItem = ({ icon, title, description }) => {
  return (
    <div className="benefit-item">
      <div className="benefit-title">
        <span className="benefit-icon">{icon}</span> {title}
      </div>
      <p>{description}</p>
    </div>
  );
};

const FeatureBlock = ({ title, items }) => {
  return (
    <div className="feature-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const TimelineItem = ({ date, title, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-date">{date}</div>
        <h3 className="timeline-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default App; 