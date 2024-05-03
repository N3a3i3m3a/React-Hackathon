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
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.values(validationErrors).some(error => error !== '')) {
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
        if (!formData.firstName.trim()) {
          errors.firstName = 'Please enter your first name';
        }
        if (!formData.lastName.trim()) {
          errors.lastName = 'Please enter your last name';
        }
        break;
      case 2:
        if (!formData.email.trim()) {
          errors.email = 'Please enter your email';
        }
        if (!formData.password.trim()) {
          errors.password = 'Please enter your password';
        }
        if (!formData.confirmPassword.trim()) {
          errors.confirmPassword = 'Please confirm your password';
        }
        break;
      default:
        break;
    }
    return errors;
  };

  return (
    <div className='flex flex-col space-y-7 text-white mt-5 w-[30%]'>
      <h2>Multi-Step Form</h2>
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <div className='mb-5'>
            <input
              className='bg-white opacity-25 w-full px-3 py-3'
              placeholder='First name'
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
          </div>
          <div className='mb-5'>
            <input
              placeholder='Last name'
              className='bg-white opacity-25 w-full px-3 py-3'
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </div>
          <button type="submit" className='my-5 bg-white text-green-600 w-full p-3'>Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <div className='mb-5'>
            <input
              placeholder='Email'
              className='bg-white opacity-25 w-full px-3 py-3'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className='mb-5'>
            <input
              placeholder='Password'
              className='bg-white opacity-25 w-full px-3 py-3'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div className='mb-5'>
            <input
              placeholder='Confirm Password'
              className='bg-white opacity-25 w-full px-3 py-3'
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
          <button onClick={() => setStep(step - 1)} className='my-5 bg-white text-green-600 w-full p-3 mx-5'>Back</button>
          <button type="submit" className='my-5 bg-white text-green-600 w-full p-3'>Next</button>
        </form>
      )}
      
    </div>
  );
};


export default Forms;


