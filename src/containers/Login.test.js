import React from 'react';
import { Login, mapDispatchToProps } from './Login';
import { shallow, mount } from 'enzyme';
import { createAccount } from '../actions';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login handleSubmit={jest.fn()} />);
  });

  it('should match snapshot upon render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange on username input change', () => {
    wrapper = mount(<Login />);
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    const mockEvent = { target: { 
      name: 'username',
      value: 'a'} };
    wrapper.instance().handleChange(mockEvent);
    wrapper.find('.username').simulate('change');
    expect(spy).toHaveBeenCalled();
  });

  it('should call handleChange on password input change', () => {
    wrapper = mount(<Login />);
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    const mockEvent = { target: { 
      name: 'password',
      value: 'a'} };
    wrapper.instance().handleChange(mockEvent);
    wrapper.find('.password').simulate('change');
    expect(spy).toHaveBeenCalled();
  });

  it('should call submitAccount on submit', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({})
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
      const actionToDispatch = createAccount('michael', 'password');

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.handleSubmit('michael', 'password');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});