import { combineReducers } from 'redux';

import reducerLogin from "../reducers/reducerLogin";
import reducerMusicToolBar from "../reducers/reducerMusicToolBar";
import reducerUpdateSidebar from './reducerUpdateSidebar';

const allReducers = combineReducers({
  reducerLogin,
  reducerMusicToolBar,
  reducerUpdateSidebar,
  // add more reducers here
});

export default allReducers;