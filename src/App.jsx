import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import './App.css';

const App = () => {
  // Widgets state with separate arrays for each dashboard
  const [widgets, setWidgets] = useState({
    'CSPM Executive Dashboard': Array(2).fill(null),
    'CWPP Dashboard': Array(2).fill(null),
    'Registry Scan': Array(2).fill(null),
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddWidget = (dashboard) => {
    setIsSidebarOpen(dashboard);
  };

  const handleConfirmWidgets = (newWidgets) => {
    const updatedWidgets = { ...widgets };

    newWidgets.forEach((newWidget) => {
      const dashboard = newWidget.dashboard;
      updatedWidgets[dashboard] = updatedWidgets[dashboard].map((widget) =>
        widget === null && newWidgets.length > 0 ? newWidgets.shift() : widget
      );
    });

    setWidgets(updatedWidgets);
    setIsSidebarOpen(false);
  };

  const handleRemoveWidget = (dashboard, id) => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      [dashboard]: prevWidgets[dashboard].map((widget) =>
        widget && widget.id === id ? null : widget
      ),
    }));
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredWidgets = Object.keys(widgets).reduce((acc, dashboard) => {
    acc[dashboard] = widgets[dashboard].filter(
      (widget) =>
        widget && widget.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div className="app">
      <Navbar
        onAddWidget={handleAddWidget}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onConfirm={handleConfirmWidgets}
      />
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2>CSPM Executive Dashboard</h2>
          <div className="dashboard-grid">
            {filteredWidgets['CSPM Executive Dashboard'].map((widget, index) => (
              <Card
                key={index}
                widget={widget}
                onAddWidget={() => handleAddWidget('CSPM Executive Dashboard')}
                onRemoveWidget={() =>
                  handleRemoveWidget('CSPM Executive Dashboard', widget.id)
                }
              />
            ))}
            <Card onAddWidget={() => handleAddWidget('CSPM Executive Dashboard')} />
          </div>
        </div>
        <div className="dashboard-section">
          <h2>CWPP Dashboard</h2>
          <div className="dashboard-grid">
            {filteredWidgets['CWPP Dashboard'].map((widget, index) => (
              <Card
                key={index}
                widget={widget}
                onAddWidget={() => handleAddWidget('CWPP Dashboard')}
                onRemoveWidget={() =>
                  handleRemoveWidget('CWPP Dashboard', widget.id)
                }
              />
            ))}
            <Card onAddWidget={() => handleAddWidget('CWPP Dashboard')} />
          </div>
        </div>
        <div className="dashboard-section">
          <h2>Registry Scan</h2>
          <div className="dashboard-grid">
            {filteredWidgets['Registry Scan'].map((widget, index) => (
              <Card
                key={index}
                widget={widget}
                onAddWidget={() => handleAddWidget('Registry Scan')}
                onRemoveWidget={() =>
                  handleRemoveWidget('Registry Scan', widget.id)
                }
              />
            ))}
            <Card onAddWidget={() => handleAddWidget('Registry Scan')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
