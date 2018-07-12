import React from 'react';
import { MovieList } from './MovieList';
import { shallow } from 'enzyme';
import { mapStateToProps } from './MovieList';


describe('MovieList', () => {
  let wrapper;
  let mockNowPlaying

  beforeEach(() => {
    mockNowPlaying = [{}, {}]
    wrapper = shallow(<MovieList nowPlaying={mockNowPlaying}/>)
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