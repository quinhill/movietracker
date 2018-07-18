import { CreateAccount, mapStateToProps, mapDispatchToProps } from './CreateAccount';
import React from 'react';
import { shallow } from 'enzyme';
import { createAccount } from '../actions';
import * as mocks from '../__mocks__/mockCreateAccount';

describe('CreateAccount', () => {
  let mockUser;
  let wrapper;
  let mockState;
  let mockEvent;
  let mockHandleSubmit;

  beforeEach(() => {
    mockUser = {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      password: 'password',
      id: 4
    }
    mockHandleSubmit = jest.fn()
    mockEvent = {preventDefault: jest.fn()}
    wrapper = shallow(<CreateAccount
      user={mockUser}
      handleSubmit={mockHandleSubmit}
      />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('handleChange', () => {

    it('should update state property of name', () => {
      mockEvent = {
        preventDefault: jest.fn(), 
        target: {
          name: 'name', 
          value: 'Michael Scott'
        }
      }

      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state('name')).toEqual('Michael Scott')
    })

    it('should update state property of email', () => {
      mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'email',
          value: 'michael.scott@dundermifflin.com'
        }
      }

      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state('email')).toEqual('michael.scott@dundermifflin.com')
    })

    it('should update state property of password', () => {
      mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'password',
          value: 'password'
        }
      }

      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state('password')).toEqual('password')
    })

    it('should update state property of repeatPassword', () => {
      mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'repeatPassword',
          value: 'password'
        }
      }

      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state('repeatPassword')).toEqual('password')
    })
  })

  describe('submitAccount', () => {

    let mockEvent;
    let wrapper;
    let mockCreateNewUser;

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() }
      mockHandleSubmit = jest.fn()
      mockCreateNewUser = jest.fn()
      wrapper = shallow(<CreateAccount
        user={mockUser}
        handleSubmit={mockHandleSubmit}
        createNewUser={mockCreateNewUser}
      />)
    })
    
    it('should update errorMessage in state, if the password does not match the repeated password', () => {
      wrapper.setState({
        name: 'Michael Scott',
        email: 'michael.scott@dundermifflin.com',
        password: 'password',
        repeatPassword: 'pasword',
        errorMessage: ''
      })

      wrapper.instance().submitAccount(mockEvent)

      const expected = 'Your password does not match the repeated password';

      expect(wrapper.state('errorMessage')).toEqual(expected)
    })

    it('should update errorMessage in state, if less than on word is submitted as a name', () => {
      wrapper.setState({
        name: 'Michael',
        email: 'michael.scott@dundermifflin.com',
        password: 'password',
        repeatPassword: 'password',
        errorMessage: ''
      })

      wrapper.instance().submitAccount(mockEvent)

      const expected = 'Please make sure you have entered your first and last name';

      expect(wrapper.state('errorMessage')).toEqual(expected)
    })

    it('should update errorMessage in state, if nothing is submitted in the email input', () => {
      wrapper.setState({
        name: 'Michael Scott',
        email: '',
        password: 'password',
        repeatPassword: 'password',
        errorMessage: ''
      })

      wrapper.instance().submitAccount(mockEvent)

      const expected = 'Please make sure you have entered your email address';

      expect(wrapper.state('errorMessage')).toEqual(expected)
    })

    it('should call createNewUser if all the requirements are met', () => {
      const spy = jest.spyOn(wrapper.instance(), 'createNewUser')
      
      wrapper.setState({
        name: 'Michael Scott',
        email: 'michael.scott@dundermifflin.com',
        password: 'password',
        repeatPassword: 'password',
        errorMessage: ''
      })

      wrapper.instance().submitAccount(mockEvent)

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('createNewUser', () => {
    
    let mockHandleSubmit;
    let wrapper;
    let url;
    let optionsObj;

    beforeEach(() => {
      mockHandleSubmit = jest.fn()
      wrapper = shallow(<CreateAccount
        handleSubmit={mockHandleSubmit}
        addNewUser={jest.fn()}
        />)
      url = 'http://localhost:3000/api/users/new';
      wrapper.setState({
        name: 'Michael Scott',
        email: 'michael.scott@dundermifflin.com',
        password: 'password'
      })
      optionsObj = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wrapper.state())
      }
    })
    it('should call addNewUser with the expected params', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mocks.mockUser)
      }))

      const expectedParams = [
        url,
        optionsObj
      ]

      await wrapper.instance().createNewUser(wrapper.state())

      expect(window.fetch).toHaveBeenCalledWith(...expectedParams)
    })

    it('should update errorMessage in state, if an error occurs', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(
      {error: ' =shit is wrong'}));
      const expected = 'shit is wrong';

      await wrapper.instance().createNewUser(wrapper.state())

      expect(wrapper.state('errorMessage')).toEqual(expected)
    })
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
      const mockUser = {
        name: 'Michael Scott',
        id: 4,
        email: 'michael.scott@dundermifflin.com',
        password: 'password'
      }
      const actionToDispatch = createAccount(mockUser)

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleSubmit(mockUser)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})