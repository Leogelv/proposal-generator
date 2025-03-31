import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <div className="section-line"></div>
    </div>
  );
};

export default SectionHeader; 