import React from 'react';
import Movie from '../components/Movie';
import { connect } from 'react-redux';
import './movie-list.css';
import PropTypes from 'prop-types';
import { postFavorite } from '../ApiCall';

export const MovieList = (props) => {

  const mappedNowPlaying = () => (
    props.nowPlaying.map((movie, index) => (
      <Movie {...movie} key={index}/>
    ))
  );

  return (
    <div className="movie-list" >
      { mappedNowPlaying() }
    </div>
  )
}

MovieList.Proptypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes)
}

export const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying,
  user: state.user
})

export default connect(mapStateToProps)(MovieList)