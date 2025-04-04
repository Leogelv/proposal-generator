import React from 'react';

const TarotTeam = () => {
  const team = [
    {
      name: "Анна Светлова",
      role: "Ведущий таролог",
      description: "15 лет практики, автор методики интуитивного Таро",
      image: "/images/team/anna.jpg"
    },
    {
      name: "Михаил Разумов",
      role: "Ведущий разработчик",
      description: "Full-stack разработчик, эксперт по UI/UX",
      image: "/images/team/mikhail.jpg"
    },
    {
      name: "Елена Мудрая",
      role: "Консультант",
      description: "Психолог, специалист по эзотерическим практикам",
      image: "/images/team/elena.jpg"
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="section-content">
        <h2 className="section-title">Наша команда</h2>
        <p className="section-description">
          Профессионалы, создающие TarotApp с любовью к своему делу
        </p>
        
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-wrapper">
                <div className="team-image-placeholder">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <div className="team-member-role">{member.role}</div>
              <p className="team-member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TarotTeam; 