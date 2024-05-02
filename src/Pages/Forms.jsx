import React, { useState } from 'react';

const Forms = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      if (step < 3) {
        setStep(step + 1);
      } else {
        console.log('Form submitted:', formData);
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    switch (step) {
      case 1:
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
          errors.name = 'Please fill in all fields';
        }
        break;
      case 2:
        if (!formData.email.trim() || !formData.password.trim() || !formData.confirmPassword.trim()) {
          errors.credentials = 'Please fill in all fields.';
        }
        break;
      default:
        break;
    }
    return errors;
  };

  return (
    <div className='flex flex-col space-between'>
      <h2>Multi-Step Form</h2>
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p>{errors.name}</p>}
          <button type="submit">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {errors.credentials && <p>{errors.credentials}</p>}
          <button type="submit">Next</button>
        </form>
      )}
      {step === 3 && (
        <div>
          <h2>Confirmation</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <button onClick={() => setStep(step - 1)}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Forms;
