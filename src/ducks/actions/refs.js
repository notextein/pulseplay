export const ADD_TAG = 'ADD_TAG';
export function addTag(tag) {
  return {
    type: ADD_TAG,
    tag
  };
}
