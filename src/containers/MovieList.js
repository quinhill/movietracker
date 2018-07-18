import React from 'react';
import { Movie } from '../components/Movie';
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
    if (props.user.name) {
      props.handleToggle(id);
      const favoriteMovie = props.nowPlaying.find(movie => (
        parseInt(movie.id) === parseInt(id)
      ));
      if (favoriteMovie.favorite) {
        props.handleRemoveFav(favoriteMovie.id);
        removeFavorite(props.user.id, favoriteMovie.id);
      } else {
        favoriteMovie.favorite = true;
        props.handleAddFav(favoriteMovie);
        postFavorite(favoriteMovie, props.user.id);
      } 
    } else {
      props.promptCreate();
    }
  };

  return (
    <div className="movie-list" >
      { mappedNowPlaying() }
    </div>
  );
};

MovieList.propTypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes),
  user: PropTypes.object,
  handleToggle: PropTypes.func,
  handleAddFav: PropTypes.func,
  handleRemoveFav: PropTypes.func,
  promptCreate: PropTypes.func
};

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  handleToggle: (id) => dispatch(toggleFavorite(id)),
  handleAddFav: (favorite) => dispatch(addUserFavorite(favorite)),
  handleRemoveFav: (id) => dispatch(removeUserFavorite(id)),
  promptCreate: () => dispatch(promptCreate())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);