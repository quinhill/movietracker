import React from 'react';
import { Movie } from './Movie';
import { shallow, mount } from 'enzyme';

describe('Movie', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(<Movie />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleFavorite with correct param on click', () => {
    const mockMovie = {
      id: '5',
      title: 'A quintillion sorrows',
      overview: 'I cannot summarize the intensity in words'
    }
    const mockHandleFavorite = jest.fn();
    const wrapper = mount(<Movie 
      handleFavorite={mockHandleFavorite}
      {...mockMovie}/>);
    wrapper.find('button').simulate('click');
    expect(mockHandleFavorite).toHaveBeenCalledWith(mockMovie.id);
  })

  it('button should have favorite text if movie is not favorited', () => {
    const mockMovie = {
      id: '5',
      title: 'A quintillion sorrows',
      overview: 'I cannot summarize the intensity in words',
      favorite: false
    };
    const wrapper = shallow(<Movie {...mockMovie} />);
    expect(wrapper.find('button').text()).toEqual('favorite');
  })

  it('button should have unfavorite text if movie is favorited', () => {
    const mockMovie = {
      id: '5',
      title: 'A quintillion sorrows',
      overview: 'I cannot summarize the intensity in words',
      favorite: true
    };
    const wrapper = shallow(<Movie {...mockMovie} />);
    expect(wrapper.find('button').text()).toEqual('unfavorite');
  })


});