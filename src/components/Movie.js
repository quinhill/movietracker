import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { promptCreate, makeFavorites, addNowPlaying } from '../actions';
import { postFavorite, fetchFavorites } from '../ApiCall';
import { removeFavorite } from '../ApiCall';
import { toggleFavorite, updateFavorites } from '../cleaner';

export const Movie = (props) => {
  
  const { 
    title, 
    overview, 
    poster, 
    ratings, 
    id,
    favorite 
  } = props;

  const handleFavorite = async (props) => {

    if(!props.user.name) {
      props.handlePromptCreate()
    } else {
      const updatedNowPlaying = toggleFavorite(props.nowPlaying, id);
      console.log('nowplaying list after favorite toggle', updatedNowPlaying);
      props.handleFavorite(updatedNowPlaying)
      const updatedFavorites = updateFavorites(updatedNowPlaying);
      console.log('result of updateFavorites function', updatedFavorites);
      props.resetFavorites(updatedFavorites);
      favorite ? removeFavorite(props.user.id, id) : 
                 postFavorite(props, props.user.id);
    }
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
        onClick={() => handleFavorite(props)}
        value={id}
      >favorite</button>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
  favorites: state.favorites,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  handlePromptCreate : () => dispatch(promptCreate()),
  handleFavorite: (newFavorites) => dispatch(addNowPlaying(newFavorites)),
  resetFavorites: (favorites) => dispatch(makeFavorites(favorites))
})


export default connect(mapStateToProps, mapDispatchToProps)(Movie);

Movie.Proptypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster: PropTypes.string,
  ratings: PropTypes.string
}