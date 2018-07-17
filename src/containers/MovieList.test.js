import React from 'react';
import { MovieList, mapStateToProps, mapDispatchToProps } from './MovieList';
import { shallow } from 'enzyme';
import { toggleFavorite,
 addUserFavorite, 
 removeUserFavorite,
 promptCreate } from '../actions';

describe('MovieList', () => {
  let wrapper;
  let mockNowPlaying;

  beforeEach(() => {
    mockNowPlaying = [{}, {}];
    wrapper = shallow(<MovieList nowPlaying={mockNowPlaying}/>);
  });

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with a nowPlaying array', () => {
      const mockState = {
        nowPlaying: [{username: 'Michael Scott', password: 'password'}],
        accounts: [{}, {}]
      };
      const expected = { nowPlaying:[{ 
        username: 'Michael Scott', 
        password: 'password' 
      }]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let mappedProps;
    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedProps = mapDispatchToProps(mockDispatch);
    })
    it('should call dispatch with correct params when handle toggle is called', () => {
      const movieId = 564;
      const actionToDispatch = toggleFavorite(movieId)
      mappedProps.handleToggle(movieId);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should call dispatch with correct params when handleAddFav is called', () => {
      const mockFavoriteMovie = { 
        title: 'favorites',
        overview: 'everyone has them'
      }
      const actionToDispatch = addUserFavorite(mockFavoriteMovie);
      mappedProps.handleAddFav(mockFavoriteMovie);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should call dispatch with correct params when removeUserFavs is called', () => {
      const mockMovieId = 453;
      const actionToDispatch = removeUserFavorite(mockMovieId);
      mappedProps.handleRemoveFav(mockMovieId);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should call dispatch with correct params when promptCreate is called', () => {
      const actionToDispatch = promptCreate();
      mappedProps.promptCreate();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
});