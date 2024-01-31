// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ showName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can use local storage here)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="my-4">
      <h2>Movie Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Book Tickets for {showName}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
