import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'

import Footer from './Footer'
const Welcome = () => {
  return (
    <>
    <div>
      <h1 className='welcome-header-text'>SECURE  PRIME LOANS</h1>
      <h2 className='welcome-header2-text'>where your financial dreams come true</h2>

      <img className='image-settings' src="https://i.ibb.co/VWq350H/generate-a-cool-3d-rainbow-colours-splash-text-s-4.jpg" alt="generate-a-cool-3d-rainbow-colours-splash-text-s-4" border="0"/>

      <p className='welcome-p-text'>click on the button below to start your loan application with us today</p>
     
      <Link to='/Details'>
      <div className='btn'>

      <button className='welcome-btn'>click to apply</button>

      </div>
      </Link>

       

   
      </div>

      <div className='footer'>
  <p>Secure Prime Loans was built by Brian Itira</p>
  <p>&copy; 2023</p>

  </div>
    </>
  )
}

export default Welcome
