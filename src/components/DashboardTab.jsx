// DashboardTab.jsx
import React from 'react';

const DashboardTab = () => (
  <div className="tab-content">
    <h3>Dashboard</h3>
    <p>Welcome to your dashboard! Here you can see an overview of your account.</p>
    <div className="dashboard-stats">
      <div className="stat">
        <span className="stat-number">1,234</span>
        <span className="stat-label">Total Transactions</span>
      </div>
      <div className="stat">
        <span className="stat-number">$5,678</span>
        <span className="stat-label">Balance</span>
      </div>
    </div>
  </div>
);

export default DashboardTab; 