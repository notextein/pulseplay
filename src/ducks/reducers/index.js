import { combineReducers } from 'redux';
import auth from './auth.js';
import content from './content.js';
import feed from './feed.js';
import refs from './refs.js';
import user from './user.js';

const reducers = combineReducers({
  auth,
  content,
  feed,
  refs,
  user
});

export default reducers;
