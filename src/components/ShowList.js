// src/components/ShowList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setShows(response.data);
    };

    fetchShows();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Explore Shows</h1>
      <div className="card p-3 bg-light">
        <div className="card-body">
          {shows.map((show, index) => (
            <div
              key={show.show.id}
              className={`card my-3 p-3 bg-${index % 6 === 0 ? 'primary' : index % 6 === 1 ? 'success' : index % 6 === 2 ? 'info' : index % 6 === 3 ? 'warning' : index % 6 === 4 ? 'danger' : 'secondary'}`}
              style={{ transition: 'background-color 0.3s' }}
            >
              <h3 className="card-title">{show.show.name}</h3>
              <p className="card-text">{show.show.summary}</p>
              <Link to={`/show/${show.show.id}`} className="btn btn-light">
                Show Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowList;
