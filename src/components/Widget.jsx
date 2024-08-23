// src/components/Widget.jsx
import React from 'react';

const Widget = ({ name }) => {
  return (
    <div className="widget-card">
      <h3>{name}</h3>
      {/* Render specific content based on widget name */}
    </div>
  );
};

export default Widget;
