import { ADD_TAG } from '../actions/refs';

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
    'studies'
  ]
};

export default function refs(state = initialState, action) {
  switch (action.type) {
    case ADD_TAG:
      if (!state.tags.includes(action.tag)) state.tags.push(action.tag);
      return {
        ...state
      };
    default:
      return state;
  }
}