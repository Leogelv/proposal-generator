import React from 'react';

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

export default BenefitItem; 