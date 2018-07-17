import React from 'react';
import { MovieList, mapStateToProps } from './MovieList';
import { shallow } from 'enzyme';

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
});