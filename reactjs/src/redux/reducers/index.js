import { combineReducers } from 'redux';

import reducerLogin from "../reducers/reducerLogin";

const allReducers = combineReducers({
  reducerLogin,
  // add more reducers here
});

export default allReducers;