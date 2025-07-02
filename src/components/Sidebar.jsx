// Import React and useState hook from React
// useState is a "hook" that lets you add state to functional components
// State is data that can change over time and causes the component to re-render
import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink, useLocation } from 'react-router-dom';

// This is a functional component called Sidebar
// In React, components are functions that return JSX (JavaScript XML)
// JSX looks like HTML but is actually JavaScript
const Sidebar = () => {
  const location = useLocation();
  const isPayActive = location.pathname.startsWith('/pay');
  const isLearningActive = location.pathname.startsWith('/learning');

  return (
    <div className="sidebar">
      {/* Profile section at the top of the sidebar */}
      <NavLink to="/profile" className="profile-section">
        <div className="profile-button">
          {/* This is an emoji used as a profile icon */}
          <span className="profile-icon">👤</span>
          <span className="profile-name">John Doe</span>
        </div>
      </NavLink>

      {/* Navigation tabs section */}
      <div className="nav-tabs">
        {/* Each tab is a button that can be clicked */}
        {/* The className changes based on whether the tab is active or not */}
        {/* onClick is an event handler - it calls our function when the button is clicked */}
        
        {/* Dashboard Tab */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
        >
          <span className="tab-icon">📊</span>
          <span className="tab-label">Dashboard</span>
        </NavLink>

        {/* Pay Tab (with subtabs) */}
        <NavLink
          to="/pay/send"
          className={({ isActive }) => `nav-tab${isPayActive ? ' active' : ''}`}
        >
          <span className="tab-icon">💰</span>
          <span className="tab-label">Pay</span>
        </NavLink>
        {/* Show Pay subtabs if Pay tab is active */}
        {isPayActive && (
          <div className="subtabs">
            <NavLink
              to="/pay/send"
              className={({ isActive }) => `subtab${isActive ? ' active' : ''}`}
            >
              Send Money
            </NavLink>
            <NavLink
              to="/pay/request"
              className={({ isActive }) => `subtab${isActive ? ' active' : ''}`}
            >
              Request Money
            </NavLink>
            <NavLink
              to="/pay/bills"
              className={({ isActive }) => `subtab${isActive ? ' active' : ''}`}
            >
              Pay Bills
            </NavLink>
          </div>
        )}

        {/* Learning Tab (with subtabs) */}
        <NavLink
          to="/learning/courses"
          className={({ isActive }) => `nav-tab${isLearningActive ? ' active' : ''}`}
        >
          <span className="tab-icon">📚</span>
          <span className="tab-label">Learning</span>
        </NavLink>
        {/* Show Learning subtabs if Learning tab is active */}
        {isLearningActive && (
          <div className="subtabs">
            <NavLink
              to="/learning/courses"
              className={({ isActive }) => `subtab${isActive ? ' active' : ''}`}
            >
              Courses
            </NavLink>
            <NavLink
              to="/learning/certs"
              className={({ isActive }) => `subtab${isActive ? ' active' : ''}`}
            >
              Certifications
            </NavLink>
            <NavLink
              to="/learning/tests"
              className={({ isActive }) => `subtab${isActive ? ' active' : ''}`}
            >
              Tests
            </NavLink>
          </div>
        )}

        {/* Settings Tab */}
        <NavLink
          to="/settings"
          className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
        >
          <span className="tab-icon">⚙️</span>
          <span className="tab-label">Settings</span>
        </NavLink>


        

      </div>
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Sidebar; 