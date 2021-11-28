import { combineReducers } from 'redux';

import reducerLogin from "../reducers/reducerLogin";
import reducerMusicToolBar from "../reducers/reducerMusicToolBar";

const allReducers = combineReducers({
  reducerLogin,
  reducerMusicToolBar,
  // add more reducers here
});

export default allReducers;