import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1 className='welcome-header-text'>SECURE  PRIME LOANS</h1>
      <h2 className='welcome-header2-text'>where your financial dreams come true</h2>
      <p className='welcome-p-text'>click on the button below to start your loan application with us today</p>
     
      <Link to='/Details'>
      <div className='btn'>

      <button className='welcome-btn'>click to apply</button>

      </div>
      </Link>
      </div>
  )
}

export default Welcome
