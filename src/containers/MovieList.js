import React from 'react';
import { Movie } from '../containers/Movie';
import { connect } from 'react-redux';
import './movie-list.css';
import PropTypes from 'prop-types';
import { 
  toggleFavorite, 
  addUserFavorite,
  removeUserFavorite,
  promptCreate
} from '../actions';
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
    if(props.user.name) {
      props.handleToggle(id)
      const favoriteMovie = props.nowPlaying.find(movie => (
        movie.id == id
      ))
      if (favoriteMovie.favorite) {
        props.removeUserFav(favoriteMovie.id);
        removeFavorite(props.user.id, favoriteMovie.id);
      } else {
        props.addUserFav(favoriteMovie);
        postFavorite(favoriteMovie, props.user.id);
      } 
    } else {
      props.promptCreate();
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
  handleToggle: (id) => dispatch(toggleFavorite(id)),
  addUserFav: (favorite) => dispatch(addUserFavorite(favorite)),
  removeUserFav: (id) => dispatch(removeUserFavorite(id)),
  promptCreate: () => dispatch(promptCreate())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);