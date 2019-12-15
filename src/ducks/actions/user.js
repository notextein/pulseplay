export const SET_USER = 'SET_USER';
export function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

export const ADD_PREFERENCE = 'ADD_PREFERENCE';
export function addPreference(tag) {
  return {
    type: ADD_PREFERENCE,
    tag
  };
}

export const REMOVE_PREFERENCE = 'REMOVE_PREFERENCE';
export function removePreference(tag) {
  return {
    type: REMOVE_PREFERENCE,
    tag
  };
}
