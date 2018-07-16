export const messageReducer = (state = '', action) => {
  switch (action.type) {
    case 'DISPLAY_ERROR':
      return action.message
    default:
      return state
  }
};