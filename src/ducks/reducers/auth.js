import { SAVE_AUTH } from '../actions/auth';

let initialState = {
  user: {
    test: true
  }
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SAVE_AUTH:
      return {
        ...action.auth
      };
    default:
      return state;
  }
}
