import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps } from 'redux';
import { mapDispatchToProps } from 'redux';
import { postFavorite } from '../ApiCall';
import { toggleFavorite } from '../actions'

export const Movie = (nowPlaying) => {
  
  const { title, overview, poster, ratings, id } = nowPlaying;

  // const handleFavorite = (e) => {
  //   const id = e.target.value
  //   const foundFavorite = nowPlaying.find(movie => (
  //     movie.id == id
  //   ))
  //   postFavorite(foundFavorite)
  //   nowPlaying.submitFavorite(id)
  // };

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
      <button
        // onClick={handleFavorite}
        value={id}
      >add to favorites</button>
    </div>
  )
}

Movie.Proptypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster: PropTypes.string,
  ratings: PropTypes.string
}

// export const mapDispatchToProps = (dispatch) => {
//   submitFavorite: (id) => dispatch(toggleFavorite(id))
// }

// export default connect(null, mapDispatchToProps)(Movie)