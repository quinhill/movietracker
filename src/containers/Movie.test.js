import React, { Component } from 'react';
import Movie from './Movie';
import { shallow, mount } from 'enzyme';

describe('Movie', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(<Movie />)

    expect(wrapper).toMatchSnapshot()
  })
})