import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { logOut } from '../actions';

describe('Header', () => {

  it('should match snapshot', () => {
    const mockUser = {name: 'Michael Scott'}
    const wrapper = shallow(<Header 
      user={mockUser}
      />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return a props object with a user object', () => {
      const mockState = {
        user: {
          name: 'Michael Scott', 
          id: 4, 
          email: 'michael.scott@dundermifflin.com',
          password: 'password'
        },
        nowPlaying: [{}, {}]
      }
      const expected = {
        user: {
          name: 'Michael Scott',
          id: 4,
          email: 'michael.scott@dundermifflin.com',
          password: 'password'
        }
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch when using a function from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logOut()  
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleLogOut()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})