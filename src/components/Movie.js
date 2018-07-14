import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { promptCreate } from '../actions';
import { postFavorite } from '../ApiCall';
import { toggleFavorite } from '../actions';
import { removeFavorite } from '../ApiCall';

export const Movie = (props) => {
  
  const { 
    title, 
    overview, 
    poster, 
    ratings, 
    id, 
    checkUser,
    favorite 
  } = props;

  const handleFavorite = (props) => {

    if(!props.user.name) {
      props.handlePromptCreate()
    } else if(favorite) {
      removeFavorite(id, props.user.id)
    } else {
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

const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  handlePromptCreate : () => dispatch(promptCreate())
})


export default connect(mapStateToProps, mapDispatchToProps)(Movie);

Movie.Proptypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster: PropTypes.string,
  ratings: PropTypes.string
}