export const ADD_TAG = 'ADD_TAG';
export function addTag(tag) {
  return {
    type: ADD_TAG,
    tag
  };
}

export const FETCH_TAGS = 'FETCH_TAGS';
export function fetchTags(tags) {
  return {
    type: FETCH_TAGS,
    tags
  };
}
