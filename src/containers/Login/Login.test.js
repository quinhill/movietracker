import React from 'react';
import { Login, mapDispatchToProps } from './Login';
import { shallow, mount } from 'enzyme';
import { logIn, addUserFavorite, toggleFavorite } from '../actions';
import { cleanFavorites } from '../cleaner';
import { NavLink, BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BrowserRouter>
        <Login handleSubmit={jest.fn()} />
      </BrowserRouter>);
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

  it('mapInFavs should call handleToggle if id matched a movie in nowPlaying', () => {
    const mockNowPlaying = {
      nowPlaying: [{id: 5}, {id: 7}]
    };
    const store = configureStore();
    const mockStore = store(mockNowPlaying);
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleToggle = jest.fn();
    wrapper = mount(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login nowPlaying={[{ id: 5}, { id: 7}]}
                 handleToggle={mappedProps.handleToggle}
                 handleLogin={jest.fn()}/>
        </BrowserRouter>
      </Provider>);
    wrapper.find('Login').instance().mapInFavs(5)
    expect(mappedProps.handleToggle).toHaveBeenCalledWith(5)

  })

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
    let mockDispatch;
    let mappedProps;
    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedProps = mapDispatchToProps(mockDispatch);
    })
    it('should call dispatch when using a handleSubmit from MDTP', () => {
      const actionToDispatch = {email: 'michael', password: 'password'};
      mappedProps.handleSubmit(actionToDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(logIn(actionToDispatch));
    });

    it('should call dispatch when using handleLogin from MDTP', () => {
      const mockUser = {email: 'rob@rob.com', password: 'borrob'};
      mappedProps.handleLogin(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(addUserFavorite(mockUser));
    })

    it('should call dispatch when using handleToggle from MDTP', () => {
      const mockId = 5;
      mappedProps.handleToggle(mockId);
      expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(mockId));
    })
  });
});