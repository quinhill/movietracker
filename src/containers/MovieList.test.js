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
    it('should return a props object with a user object', () => {
      const mockState = {
        user: {
          name: 'Michael Scott',
          id: 4,
          email: 'michael.scott@dundermifflin.com',
          password: 'password'
        },
        nowPlaying: [{}, {}]
      }
      const expected = {
        user: {
          name: 'Michael Scott',
          id: 4,
          email: 'michael.scott@dundermifflin.com',
          password: 'password'
        },
        nowPlaying: [{}, {}]
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch when using handleToggle from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleFavorite(4);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleToggle(4);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should call dispatch when using addUserFav from MDTP', () => {
      const mockDispatch = jest.fn();
      const mockFavorite = { title: 'Teeth', id: 4}
      const actionToDispatch = addUserFavorite(mockFavorite);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addUserFav(mockFavorite);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch when using removeUserFav from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = removeUserFavorite(4)

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.removeUserFav(4)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch when using promptCreate from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = promptCreate()

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.promptCreate()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
});