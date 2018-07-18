import React from 'react';
import App from './App';
import { mapDispatchToProps, mapStateToProps } from './App';
import { shallow, mount } from 'enzyme';
import { fetchNowPlaying } from '../../ApiCall';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { addNowPlaying } from '../../actions';
describe('App', () => {
  let store;
  let wrapper;
  let initialState;
  let mockStore;
  let handleFetch
  beforeEach(() => {
    initialState = {
      user: {
        name: 'Charles'
      },
      nowPlaying: [{}]
    }
    handleFetch = jest.fn();
    mockStore = configureStore();
    store = mockStore(initialState)
    wrapper = shallow(<Provider store={store}>
                        <App handleFetch={handleFetch}/>
                      </Provider>, { disableLifeCycleMethods: true });
  })

  it('should match snapshot upon render', () => {

    expect(wrapper).toMatchSnapshot();
  })

  it('componentDidMount should call handleFetch', async () => {
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <App handleFetch={jest.fn()}/>
        </BrowserRouter>
      </Provider>, { disableLifeCycleMethods: false });
    await wrapper.find('App').instance().componentDidMount();
    expect(handleFetch).toHaveBeenCalled();
  });

  it('mapStateToProps should return a props object', () => {
    const expected = {
      nowPlaying: [{}]
    };
    const result = mapStateToProps(initialState);
    expect(result).toEqual(expected);
  });

  it('handleFetch should call dispatch with correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const expected = [{}, {}];
    mappedProps.handleFetch(expected);
    expect(mockDispatch).toHaveBeenCalledWith(addNowPlaying(expected));
  });
});

