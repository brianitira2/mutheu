import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add additional logic for form submission
  };

  const validateForm = () => {
    const isFirstNameValid = formData.firstName.trim() !== '';
    const isLastNameValid = formData.lastName.trim() !== '';
    const isIdNumberValid = formData.idNumber.trim() !== '';
    const isDobValid = formData.dob.trim() !== '';
    const isCurrentCityValid = formData.currentCity.trim() !== '';
    const isMobileNumberValid = formData.mobileNumber.trim() !== '';
    const isCurrentJobValid = formData.currentJob.trim() !== '';
    const isTotalIncomeValid = formData.totalIncome.trim() !== '';
    const isDateToPayLoanValid = formData.dateToPayLoan.trim() !== '';

    const isValid =
      isFirstNameValid &&
      isLastNameValid &&
      isIdNumberValid &&
      isDobValid &&
      isCurrentCityValid &&
      isMobileNumberValid &&
      isCurrentJobValid &&
      isTotalIncomeValid &&
      isDateToPayLoanValid;

    setIsFormValid(isValid);
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

        <Link to="/LoanAmount">
          <button
            style={{
              ...submitButtonStyles,
              ...(isFormValid ? {} : { opacity: 0.5, cursor: 'not-allowed' }),
            }}
            type="submit"
            disabled={!isFormValid}
          >
            Submit
          </button>
        </Link>
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
  width: '100%',
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

export default Details;
