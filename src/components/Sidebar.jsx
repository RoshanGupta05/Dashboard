import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, onConfirm }) => {
  const [widgetTitle, setWidgetTitle] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const [selectedDashboard, setSelectedDashboard] = useState('CSPM Executive Dashboard'); // Default to the first dashboard

  const handleConfirm = () => {
    if (widgetTitle) {
      onConfirm([{ title: widgetTitle, content: widgetContent, dashboard: selectedDashboard }]);
      setWidgetTitle('');
      setWidgetContent('');
      onClose();
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="flex">
        <h2>Add Widget</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      
      <div className="form-group">
        <label>Widget Title</label>
        <input
          type="text"
          value={widgetTitle}
          onChange={(e) => setWidgetTitle(e.target.value)}
          placeholder="Enter widget title"
        />
      </div>
      
      <div className="form-group">
        <label>Widget Content</label>
        <textarea
          value={widgetContent}
          onChange={(e) => setWidgetContent(e.target.value)}
          placeholder="Enter widget content (optional)"
        />
      </div>

      <div className="form-group">
        <label>Select Dashboard</label>
        <select
          value={selectedDashboard}
          onChange={(e) => setSelectedDashboard(e.target.value)}
        >
          <option value="CSPM Executive Dashboard">CSPM Executive Dashboard</option>
          <option value="CWPP Dashboard">CWPP Dashboard</option>
          <option value="Registry Scan">Registry Scan</option>
        </select>
      </div>
      
      <button className="confirm-btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Sidebar;
