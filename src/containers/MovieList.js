import React from 'react';
import { Movie } from '../containers/Movie';
import { connect } from 'react-redux';
import './movie-list.css';
import PropTypes from 'prop-types';
import { toggleFavorite } from '../actions';
import { postFavorite, removeFavorite } from '../ApiCall';

export const MovieList = (props) => {

  const mappedNowPlaying = () => (
    props.nowPlaying.map((movie, index) => (
      <Movie 
        {...movie} 
        key={index} 
        handleFavorite={handleFavorite} 
      />
    ))
  );

  const handleFavorite = (id) => {
    props.handleToggle(id)
    const favoriteMovie = props.nowPlaying.find(movie => (
      movie.id == id
    ))
    if (favoriteMovie.favorite) {
      postFavorite(favoriteMovie, props.user.id)
    } else {
      removeFavorite(props.user.id, favoriteMovie.id)
    }
  }

  return (
    <div className="movie-list" >
      { mappedNowPlaying() }
    </div>
  );
};

MovieList.Proptypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes)
};

export const mapStateToProps = (state) => ({
  favorites: state.favorites,
  nowPlaying: state.nowPlaying,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  handleToggle: (id) => dispatch(toggleFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);