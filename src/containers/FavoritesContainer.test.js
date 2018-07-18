import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesContainer, mapStateToProps, mapDispatchToProps } from './FavoritesContainer';
import { toggleFavorite } from '../actions';


describe('FavoritesContainer', () => {

  let wrapper;
  let mockUser;

  beforeEach(() => {
    mockUser = {id: 4, favorites: [{id: 1}, {id: 3}]}

    wrapper = shallow(<FavoritesContainer 
      user={mockUser}
      />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

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

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch when using a function from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleFavorite()

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleToggle()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})