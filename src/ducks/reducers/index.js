import { combineReducers } from 'redux';
import auth from './auth.js';
import content from './content.js';
import refs from './refs.js';
import user from './user.js';

const reducers = combineReducers({
  auth,
  content,
  refs,
  user
});

export default reducers;
