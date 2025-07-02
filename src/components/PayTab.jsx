// PayTab.jsx
import React from 'react';

const PayTab = ({ activePaySubtab }) => {
  return (
    <div className="tab-content">
      {activePaySubtab === 'send' && (
        <div>
          <h3>Send Money</h3>
          <p>Transfer money to friends, family, or businesses instantly.</p>
          <button className="payment-option">Send Now</button>
        </div>
      )}
      {activePaySubtab === 'request' && (
        <div>
          <h3>Request Money</h3>
          <p>Ask someone to send you money easily.</p>
          <button className="payment-option">Request Now</button>
        </div>
      )}
      {activePaySubtab === 'bills' && (
        <div>
          <h3>Pay Bills</h3>
          <p>Pay your utility, phone, or other bills online.</p>
          <button className="payment-option">Pay a Bill</button>
        </div>
      )}
    </div>
  );
};

export default PayTab; 