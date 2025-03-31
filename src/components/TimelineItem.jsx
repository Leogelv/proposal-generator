import React from 'react';

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

export default TimelineItem; 