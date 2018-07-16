import React from 'react';
import { connect } from 'react-redux';
import { Movie } from './Movie';
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

  let mappedFavorites;
  if (props.user.favorites) {
    mappedFavorites = props.user.favorites.map((favorite, index) => (
      <Movie {...favorite} key={index} handleFavorite={handleFavorite} />
    ));
  } else {
    console.log('hello')
    return <Redirect to='/' />
  }

  const handleFavorite = (id) => {
    props.handleToggle(id)
    const favoriteMovie = props.nowPlaying.find(movie => (
      movie.id == id
    ))
    if (favoriteMovie.favorite) {
      props.addUserFav(favoriteMovie);
      postFavorite(favoriteMovie, props.user.id);
    } else {
      removeFavorite(props.user.id, favoriteMovie.id);
      props.removeUserFav(favoriteMovie.id);
    }
  }

  return (
    <div className="favorites-container">
      {mappedFavorites}
    </div>
  );
};

FavoritesContainer.Proptypes = {
  favorites: PropTypes.array
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  handleToggle: (id) => dispatch(toggleFavorite(id)),
  addUserFav: (favorite) => dispatch(addUserFavorite(favorite)),
  removeUserFav: (favorite) => dispatch(removeUserFavorite(favorite))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);