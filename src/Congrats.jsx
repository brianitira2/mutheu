import React from 'react';
import { useLocation } from 'react-router-dom';
import './Congrats.css';


import Footer from './Footer';

const Congrats = ({ name, phoneNumber }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loanAmount = searchParams.get('loanAmount');

  const mpesaMessage = `You have received Ksh ${loanAmount} from Secure Prime Loans. Confirm the transaction on M-Pesa.`;

  return (
    <div className="congrats-container">
      <div className="congrats-message">
        Congratulations, {name}! Your loan application was successful.

        <img className='image-settings-1' src="https://i.ibb.co/ZxFJdHM/generate-a-cool-3d-rainbow-colours-splash-text-s-5.jpg" alt="generate-a-cool-3d-rainbow-colours-splash-text-s-5" border="0"/>
      </div>

      <div className="mpesa-container">
        <div className="mpesa-message">M-Pesa Transaction Details:</div>

        <div className="mpesa-amount">{mpesaMessage}</div>
        
      </div>

      <Footer/>

  
    </div>
  );
};

export default Congrats;
