import * as ApiCall from './ApiCall';
import { apiKey } from './apiKey';

describe('fetchNowPlaying', () => {

  it('should call fetch with correct params', async () => {
    const mockArray = {results: [{}, {}]}
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      { json: () => Promise.resolve(mockArray)
  }))

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    await ApiCall.fetchNowPlaying(url)

    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return an array of movie Objects', async () => {
    const mockArray = {results: [{}, {}]}
    const expectedOutput = [{}, {}];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      { json: () => Promise.resolve(mockArray)
      })
    );
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
    const result = await ApiCall.fetchNowPlaying(url);
    expect(result).toEqual(expectedOutput);
  })
})

describe('addNewUser', () => {

  it('should call fetch with correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({})
    }));
    const mockNewUserInfo = { name: 'asdfas', password: 'asdfasdf', email: 'asdfasdf'}
    const fetchArgs = ["http://localhost:3000/api/users/new", 
    {"body": "{\"name\":\"asdfas\",\"password\":\"asdfasdf\",\"email\":\"asdfasdf\"}", 
    "headers": {"Content-Type": "application/json"}, 
    "method": "POST"}]
;
    await ApiCall.addNewUser(mockNewUserInfo);
    expect(window.fetch).toHaveBeenCalledWith(...fetchArgs);
  })

  it('should return new user message', async () => {
    const expectedOutput = {status: "success", message: "New user created", id: 4};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(expectedOutput)
    }));
    const mockNewUserInfo = { name: 'asdfas', password: 'asdfasdf', email: 'asdfasdf'}
    const fetchArgs = ["http://localhost:3000/api/users/new", 
    {"body": "{\"name\":\"asdfas\",\"password\":\"asdfasdf\",\"email\":\"asdfasdf\"}", 
    "headers": {"Content-Type": "application/json"}, 
    "method": "POST"}];
    const result = await ApiCall.addNewUser(fetchArgs)
    expect(result.message).toEqual(expectedOutput.message)

  })
})