import { VIEW_ARTICLE } from '../actions/content';

let initialState = {};

export default function content(state = initialState, action) {
  switch (action.type) {
    case VIEW_ARTICLE:
      return {
        ...state,
        currentArticle: {
          ...action.content
        }
      };
    default:
      return state;
  }
}
