export const accountReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      return { ...action.newUser }
    case 'LOG_IN':
      return action.id
    default:
      return state
  } 
}