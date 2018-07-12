import React from 'react';
import MovieList from './MovieList';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mapStateToProps } from './MovieList';


describe('MovieList', () => {
  let mockStore;
  let wrapper;
  let initialState;

  beforeEach(() => {
    initialState = {
      nowPlaying: [{}]
    }
    mockStore = configureStore(initialState)
    wrapper = shallow(<Provider store={mockStore} >
                        <MovieList />
                      </Provider>)
  })

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return a props object with a nowPlaying array', () => {
      const mockState = {
        nowPlaying: [{username: 'michael', password: 'password'}],
        accounts: [{}, {}]
      }
      const expected = {nowPlaying:[{ username: 'michael', password: 'password' }]}

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected);
    })
  })
})