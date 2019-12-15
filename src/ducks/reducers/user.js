import { SET_USER, ADD_PREFERENCE, REMOVE_PREFERENCE } from '../actions/user';

let initialState = {
  // ...user
  preference: []
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.user
      };
    case ADD_PREFERENCE:
      if (!state.preference.includes(action.tag)) {
        state.preference.push(action.tag);
      }
      return {
        ...state
      };
    case REMOVE_PREFERENCE:
      let idx = state.preference.findIndex(el => el === action.tag);
      state.preference.splice(idx, 1); // removes the element
      return {
        ...state
      };
    default:
      return state;
  }
}
