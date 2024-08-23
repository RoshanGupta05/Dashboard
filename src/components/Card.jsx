// src/components/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ widget, onAddWidget, onRemoveWidget }) => {
  return (
    <div className="card">
      {widget ? (
        <div className="widget-content">
          <h3>{widget.title}</h3>
          {widget.content ? (
            <p>{widget.content}</p>
          ) : (
            <p>No data available</p>
          )}
          {/* Add a remove button */}
          <button className="remove-widget-btn" onClick={() => onRemoveWidget(widget.id)}>
            Remove Widget
          </button>
        </div>
      ) : (
        <button className="add-widget-btn" onClick={onAddWidget}>
          + Add Widget
        </button>
      )}
    </div>
  );
};

export default Card;
