import { accountReducer } from './accountReducer';
import * as actions from '../actions';

describe('accountReducer', () => {

  it('should return an initial state', () => {
    const expected = {};

    const result = accountReducer(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return the state with a new user', () => {
    const user = {
        name: 'Michael Scott', 
        email: 'michael.scott@dundermifflin.com',
        password: 'worldsbestboss'
      }
    
    const expected = {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      password: 'worldsbestboss'
    }

    const result = accountReducer(undefined, actions.createAccount(user));

    expect(result).toEqual(expected);
  })

  it('should return the state with a new user', () => {
    const user = {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      password: 'worldsbestboss'
    }

    const expected = {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      password: 'worldsbestboss'
    }

    const result = accountReducer(undefined, actions.logIn(user));

    expect(result).toEqual(expected);
  })

  it('should return the state with a message', () => {

    const expected = {
      message: 'You have been logged out'
    }

    const result = accountReducer(undefined, actions.logOut());

    expect(result).toEqual(expected);
  })

  it('should return the state with a message', () => {

    const expected = {
      message: 'You must create an account to add favorites'
    }

    const result = accountReducer(undefined, actions.promptCreate());

    expect(result).toEqual(expected);
  })

  it('should return the state and add a new favorite to the users favorites array', () => {
    const favorite = {}

    const expected = {
      favorites: [favorite]
    }

    const result = accountReducer(undefined, actions.addUserFavorite(favorite));

    expect(result).toEqual(expected);
  })

  it.skip('should return the state and remove a favorite from the users favorites array', () => {
    const favorite1 = { id: 4 }
    const favorite2 = { id: 5 }

    accountReducer(undefined, actions.addUserFavorite(favorite1))
    accountReducer(undefined, actions.addUserFavorite(favorite2))

    const expected = {favorites: [favorite2]}

    const result = accountReducer(undefined, actions.removeUserFavorite(4));

    expect(result).toEqual(expected);
  })
})