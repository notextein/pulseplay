import { ADD_TAG, FETCH_TAGS } from '../actions/refs';

let initialState = {
  tags: [
    'fitness',
    'healthy',
    'healthyliving',
    'lifestyle',
    'weightloss',
    'diet',
    'eatclean',
    'gym',
    'crossfit',
    'motivation',
    'sports',
    'basketball',
    'football',
    'running',
    'yoga',
    'training',
    'workout',
    'travel',
    'outdoor',
    'healthadvocate',
    'advocacy',
    'studies',
    'beauty',
    'selfcare'
  ]
};

export default function refs(state = initialState, action) {
  switch (action.type) {
    case ADD_TAG:
      if (!state.tags.includes(action.tag)) state.tags.push(action.tag);
      return {
        ...state
      };
    case FETCH_TAGS:
      return {
        ...state
      };

    default:
      return state;
  }
}
