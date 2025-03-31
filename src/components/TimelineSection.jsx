import React from 'react';
import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';

const TimelineSection = () => {
  const timelineItems = [
    {
      date: "1–2 неделя",
      title: "Старт проекта",
      description: "UI, 3D-сцена, перемещение"
    },
    {
      date: "3–6 неделя",
      title: "Основной функционал",
      description: "Мультиплеер, магазины, товары"
    },
    {
      date: "7–10 неделя",
      title: "Расширенный функционал",
      description: "NPC, загрузка, чат, база"
    },
    {
      date: "11–16 неделя",
      title: "Финальный этап",
      description: "Тесты, адаптация, оптимизация"
    }
  ];

  return (
    <section className="slide" id="timeline">
      <div className="container">
        <SectionHeader title="📅 Сроки" />
        
        <div className="glass-card">
          <p>Полная реализация Альфа-версии: <span className="highlight-text">4 месяца</span></p>
          
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index}
                date={item.date} 
                title={item.title} 
                description={item.description} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection; 