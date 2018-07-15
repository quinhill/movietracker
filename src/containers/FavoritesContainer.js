import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import './favorites-container.css'

export const FavoritesContainer = (props) => {

  const mappedFavorites = props.favorites.map(favorite => (
    <Movie {...favorite} />
  ))

  return (
    <div className="favorites-container">
      {mappedFavorites}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(FavoritesContainer)