import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('App', () => {
  let store;
  let wrapper;
  let initialState;
  let mockStore;
  beforeEach(() => {
    initialState = {
      nowPlaying: [{}]
    }
    mockStore = configureStore();
    store = mockStore(initialState)
    wrapper = shallow(<Provider store={store}>
                        <App />
                      </Provider>, { disableLifeCycleMethods: true });
  })

  it('should match snapshot upon render', () => {

    expect(wrapper).toMatchSnapshot();
  })
})

