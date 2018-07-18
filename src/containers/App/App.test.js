import React from 'react';
import App from './App';
import { mapDispatchToProps } from './App';
import { shallow, mount } from 'enzyme';
import { fetchNowPlaying } from '../../ApiCall';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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

