// src/components/ShowDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BookingForm from './BookingForm';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShow(response.data);
    };

    fetchShow();
  }, [id]);

  const handleBookingButtonClick = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{show.name}</h1>
          <p className="card-text">{show.summary}</p>
          <Link to="/" className="btn btn-outline-primary mb-3">
            Back to Show List
          </Link>
          <button className="btn btn-success ms-2" onClick={handleBookingButtonClick}>
            Book Tickets
          </button>
          {showBookingForm && <BookingForm showName={show.name} />}
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
