import React from 'react';
import { Movie } from '../containers/Movie';
import { connect } from 'react-redux';
import './movie-list.css';
import PropTypes from 'prop-types';
import { toggleFavorite } from '../actions';

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