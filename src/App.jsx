// Import React and useState
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Import our custom Sidebar component
// The './components/Sidebar' path tells React where to find the component
// We can import it with any name we want, but 'Sidebar' is descriptive
import Sidebar from './components/Sidebar';

// Import the CSS file for this component
// This file contains styles that apply to the entire app
import './App.css';

// MainContent component will display the content for the selected tab/subtab
import MainContent from './components/MainContent';
import PayTab from './components/PayTab';

// This is the main App component - it's the root component of our application
// In React, components are functions that return JSX (JavaScript XML)
function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

// Wrapper to extract subtab from URL and pass as prop
function PayTabWrapper() {
  const { subtab } = useParams();
  return <PayTab activePaySubtab={subtab || 'send'} />;
}

// Export the App component so it can be imported and used in other files
// In this case, it's imported by main.jsx to render the entire application
export default App;
