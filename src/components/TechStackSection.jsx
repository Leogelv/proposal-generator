import React from 'react';
import SectionHeader from './SectionHeader';

const TechStackSection = () => {
  const techItems = [
    "Three.js / Babylon.js",
    "React",
    "Node.js",
    "Supabase / Firebase",
    "PostgreSQL / Firestore",
    "WebSocket",
    "RAG-подсистема",
    "TTS/STT"
  ];

  return (
    <section className="slide" id="tech-stack">
      <div className="container">
        <SectionHeader title="👨‍💻 Технологический стек" />
        
        <div className="glass-card">
          <div className="tech-stack-container">
            {techItems.map((item, index) => (
              <div key={index} className="tech-stack-item">{item}</div>
            ))}
          </div>
          
          <div className="highlight-box">
            <p>Наша архитектура обеспечивает плавное взаимодействие пользователей в 3D-пространстве с минимальной задержкой и максимальной производительностью даже на устройствах среднего класса.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection; 