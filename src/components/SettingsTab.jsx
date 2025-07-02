// SettingsTab.jsx
import React from 'react';

const SettingsTab = () => (
  <div className="tab-content">
    <h3>Settings</h3>
    <p>Customize your account preferences.</p>
    <div className="settings-options">
      <div className="setting">
        <label>Notifications</label>
        <input type="checkbox" defaultChecked />
      </div>
      <div className="setting">
        <label>Dark Mode</label>
        <input type="checkbox" />
      </div>
      <div className="setting">
        <label>Language</label>
        <select>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
    </div>
  </div>
);

export default SettingsTab; 