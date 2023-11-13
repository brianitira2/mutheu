import React, { useState } from 'react';

const Details = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    dob: '',
    currentCity: '',
    mobileNumber: '',
    currentJob: '',
    educationLevel: 'primary',
    totalIncome: '',
    dateToPayLoan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to a server)
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={formContainer}>
      <h2 style={formHeader}>Loan Application Form</h2>
      <form style={formStyles} onSubmit={handleSubmit}>
        <label style={labelStyles}>
          First Name:
          <input
            style={inputStyles}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label style={labelStyles}>
          Last Name:
          <input
            style={inputStyles}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label style={labelStyles}>
          ID Number:
          <input
            style={inputStyles}
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label style={labelStyles}>
          Date of Birth:
          <input
            style={inputStyles}
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>

        <label style={labelStyles}>
          Current City:
          <input
            style={inputStyles}
            type="text"
            name="currentCity"
            value={formData.currentCity}
            onChange={handleChange}
            required
          />
        </label>

        <label style={labelStyles}>
          Mobile Number:
          <input
            style={inputStyles}
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label style={labelStyles}>
          Current Job:
          <input
            style={inputStyles}
            type="text"
            name="currentJob"
            value={formData.currentJob}
            onChange={handleChange}
            required
          />
        </label>

        <label style={labelStyles}>
          Level of Education:
          <select
            style={inputStyles}
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
          >
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="college">College/University</option>
          </select>
        </label>

        <label style={labelStyles}>
          Total Income:
          <input
            style={inputStyles}
            type="number"
            name="totalIncome"
            value={formData.totalIncome}
            onChange={handleChange}
            required
          />
        </label>

        <label style={labelStyles}>
          Date to Pay Loan:
          <select
            style={inputStyles}
            name="dateToPayLoan"
            value={formData.dateToPayLoan}
            onChange={handleChange}
          >
            <option value="15days">15 days</option>
            <option value="30days">30 days</option>
            <option value="60days">60 days</option>
          </select>
        </label>

        <button style={submitButtonStyles} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const formContainer = {
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  background: 'linear-gradient(to right, #4CAF50, #45a049)',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  width: '100%', // Take the entire width on mobile screens
  boxSizing: 'border-box',
};

const formHeader = {
  color: 'white',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyles = {
  marginBottom: '10px',
  color: 'white',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: 'none',
  borderRadius: '5px',
};

const submitButtonStyles = {
  background: 'linear-gradient(to right, #4CAF50, #45a049)',
  color: 'white',
  padding: '12px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background 0.3s ease-in-out',
};

const submitButtonHoverStyles = {
  background: 'linear-gradient(to right, #45a049, #4CAF50)',
};

export default Details;
