// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ onAddWidget, searchTerm, onSearchChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>Dashboard</h1>
      </div>
      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Search widget..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-bar"
        />
        <button className="add-widget-btn" onClick={onAddWidget}>
          + Add Widget
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
