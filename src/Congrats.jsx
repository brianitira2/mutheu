import React from 'react';
import { useLocation } from 'react-router-dom';
import './Congrats.css';

const Congrats = ({ name, phoneNumber }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loanAmount = searchParams.get('loanAmount');

  const mpesaMessage = `You have received Ksh ${loanAmount} from Secure Prime Loans. Confirm the transaction on M-Pesa.`;

  return (
    <div className="congrats-container">
      <div className="congrats-message">
        Congratulations, {name}! Your loan application was successful.
      </div>

      <div className="mpesa-container">
        <div className="mpesa-message">M-Pesa Transaction Details:</div>

        <div className="mpesa-amount">{mpesaMessage}</div>
      </div>
    </div>
  );
};

export default Congrats;
