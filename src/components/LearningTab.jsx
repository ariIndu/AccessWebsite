// LearningTab.jsx
import React from 'react';

const LearningTab = ({ activeLearningSubtab }) => {
  return (
    <div className="tab-content">
      {activeLearningSubtab === 'courses' && (
        <div>
          <h3>Courses</h3>
          <p>Prepare for your future with our courses.</p>
        </div>
      )}
      {activeLearningSubtab === 'certs' && (
        <div>
          <h3>Certifications</h3>
          <p>Get recognized for your skills with our certifications.</p>
        </div>
      )}
      {activeLearningSubtab === 'tests' && (
        <div>
          <h3>Tests</h3>
          <p>Test your skills to get certified.</p>
        </div>
      )}
    </div>
  );
};

export default LearningTab; 