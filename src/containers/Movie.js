import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';

export const Movie = (props) => {
  
  const { 
    title, 
    overview, 
    poster, 
    ratings, 
    id, 
    checkUser 
  } = props;

  const handleFavorite = (e) => {
    const id = e.target.value;
    checkUser(id);
  }

  return (
    <div className='movie'>
      <div className='title-ratings-div'>
        <h1>{title}</h1>
        <h4>{ratings}</h4>
      </div>
      <div className="poster-div" >
        <img className='poster' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`} />
      </div>
      <div className="overview">
        <p>{overview}</p>
      </div>
      <div className="add-favorite-div">
      <button
        className="add-favorite-button"
        onClick={handleFavorite}
        value={id}
      >add to favorites</button>
      </div>
    </div>
  )
}

Movie.Proptypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster: PropTypes.string,
  ratings: PropTypes.string
}