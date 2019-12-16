import { SAVE_FEEDS } from '../actions/feed';

let initialState = {
  foo: 'weee'
};

export default function feed(state = initialState, action) {
  switch (action.type) {
    case SAVE_FEEDS:
      return { ...action.feeds };

    default:
      return state;
  }
}
