import {SAVE_AUTH} from '../actions/auth';

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SAVE_AUTH:
      return {
          ...state,
          action.auth
      };
    default:
      return state;
  }
}
