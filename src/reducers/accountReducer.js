export const accountReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      return [...state, {
        name: action.name, 
        password: action.password,
        email: action.email
      }]
    default:
      return state
  } 
}