import React from 'react';
import { Movie } from '../containers/Movie';
import { connect } from 'react-redux';
import './movie-list.css';
import PropTypes from 'prop-types';

export const MovieList = ({nowPlaying}) => {

  const mappedNowPlaying = () => (
    nowPlaying.map((movie, index) => (
      <Movie {...movie} key={index} />
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
  nowPlaying: state.nowPlaying
})

export default connect(mapStateToProps, null)(MovieList)