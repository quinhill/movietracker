import React from 'react';
import { connect } from 'react-redux';
import { Movie } from '../components/Movie';
import './favorites-container.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { postFavorite, removeFavorite } from '../ApiCall';
import { 
  toggleFavorite, 
  addUserFavorite, 
  removeUserFavorite 
} from '../actions';

export const FavoritesContainer = (props) => {

  const handleFavorite = (id) => {
    props.handleToggle(id);
    const favoriteMovie = props.nowPlaying.find(movie => (
      parseInt(movie.id) === parseInt(id)
    ));
    if (favoriteMovie.favorite) {
      props.removeUserFav(favoriteMovie.id);
      removeFavorite(props.user.id, favoriteMovie.id);
    } else {
      props.addUserFav(favoriteMovie);
      postFavorite(favoriteMovie, props.user.id);
    }
  };
  
  let mappedFavorites;
  if (props.user.favorites) {
    mappedFavorites = props.user.favorites.map((favorite, index) => (
      <Movie {...favorite} key={index} handleFavorite={handleFavorite} />
    ));
  } else {
    return <Redirect to='/' />;
  }

  return (
    <div className="favorites-container">
      {mappedFavorites.length ? '' : 
        <p className="no-favorites">
          You currently have no favorites
        </p>
      } 
      {mappedFavorites}
    </div>
  );
};

FavoritesContainer.propTypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  handleToggle: PropTypes.func,
  addUserFav: PropTypes.func,
  removeUserFav: PropTypes.func
};

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  handleToggle: (id) => dispatch(toggleFavorite(id)),
  addUserFav: (favorite) => dispatch(addUserFavorite(favorite)),
  removeUserFav: (favorite) => dispatch(removeUserFavorite(favorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);