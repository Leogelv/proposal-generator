import React from 'react';

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

export default FeatureBlock; 