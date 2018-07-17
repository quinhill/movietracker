import React from 'react';
import { Login, mapDispatchToProps } from './Login';
import { shallow, mount } from 'enzyme';
import { logIn } from '../actions';
import { cleanFavorites } from '../cleaner';
import { NavLink, BrowserRouter } from 'react-router-dom';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login handleSubmit={jest.fn()} />);
  });

  it('should match snapshot upon render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange on username input change', () => {
    wrapper = mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>);
    const spy = jest.spyOn(wrapper.find('Login').instance(), 'handleChange');
    const mockEvent = { target: { 
      name: 'username',
      value: 'a'} };
    wrapper.find('Login').instance().handleChange(mockEvent);
    wrapper.find('.username').simulate('change');
    expect(spy).toHaveBeenCalled();
  });

  it('should call handleChange on password input change', () => {
    wrapper = mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>);
    const spy = jest.spyOn(wrapper.find('Login').instance(), 'handleChange');
    const mockEvent = { target: { 
      name: 'password',
      value: 'a'} };
    wrapper.find('Login').instance().handleChange(mockEvent);
    wrapper.find('.password').simulate('change');
    expect(spy).toHaveBeenCalled();
  });

  it.skip('should call submitAccount on submit', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: { id: 6 }})
    }));
    const spy = jest.spyOn(wrapper.instance(), 'submitAccount');
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().submitAccount(mockEvent);
    wrapper.simulate('submit');
    expect(spy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch when using a function from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = {email: 'michael', password: 'password'};
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleSubmit(actionToDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(logIn(actionToDispatch));
    });
  });
});