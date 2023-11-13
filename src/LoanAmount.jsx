import React, { useState } from 'react';
import './LoanAmount.css';
import { Link } from 'react-router-dom';

const LoanAmount = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const loanAmounts = [
    { amount: 20000, id: 1 },
    { amount: 40000, id: 2 },
    { amount: 60000, id: 3 },
    { amount: 80000, id: 4 },
    { amount: 100000, id: 5 },
  ];

  const handleCheckLimit = () => {
    // Redirect to Congrats page with the selected amount as a query parameter
    console.log('Checking loan limit for:', selectedAmount);
  };

  const handleCheckboxChange = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <div className="loan-amount-container">
      <h2 className="loan-amount-header">Secure Prime Loans</h2>

      <div className="loan-amount-options">
        {loanAmounts.map(({ amount, id }) => (
          <label key={id} className="loan-amount-checkbox">
            <input
              type="checkbox"
              value={amount}
              checked={selectedAmount === amount}
              onChange={() => handleCheckboxChange(amount)}
            />
            <span className="loan-amount-label">{`Ksh ${amount}`}</span>
          </label>
        ))}
      </div>

      <Link to={`/Congrats?loanAmount=${selectedAmount}`}>
        <button className="loan-amount-button" onClick={handleCheckLimit}>
          Click to Apply
        </button>
      </Link>
    </div>
  );
};

export default LoanAmount;
