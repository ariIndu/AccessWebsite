// MainContent.jsx
// This component displays the main content area based on the selected tab and subtab
import React from 'react';
import './Sidebar.css'; // Reuse sidebar styles for content area
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardTab from "./DashboardTab";
import PayTab from "./PayTab";
import LearningTab from "./LearningTab";
import SettingsTab from './SettingsTab';
import ProfileTab from './ProfileTab';
import { useParams } from 'react-router-dom';

function MainContent() {
  return (
    <div className="content-area">
      <Routes>
        <Route path="/profile" element={<ProfileTab />} />
        <Route path="/dashboard" element={<DashboardTab />} />
        <Route path="/pay" element={<Navigate to="/pay/send" />} />
        <Route path="/pay/:subtab" element={<PayTabWrapper />} />
        <Route path="/learning" element={<Navigate to="/learning/courses" />} />
        <Route path="/learning/:subtab" element={<LearningTabWrapper />} />
        <Route path="/settings" element={<SettingsTab />} />
        <Route path="*" element={<DashboardTab />} /> {/* fallback */}
      </Routes>
    </div>
  );
}

// Wrapper components to extract subtab from URL
function PayTabWrapper() {
  const { subtab } = useParams();
  return <PayTab activePaySubtab={subtab || 'send'} />;
}

function LearningTabWrapper() {
  const { subtab } = useParams();
  return <LearningTab activeLearningSubtab={subtab || 'courses'} />;
}

export default MainContent; 