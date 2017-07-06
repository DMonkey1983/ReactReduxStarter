// State argumetn is no application state, only the state
// this reducer si responsive for
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
