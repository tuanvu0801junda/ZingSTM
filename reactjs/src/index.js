import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "redux/reducers/index";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import MusicToolBar from 'components/MusicToolBar/MusicToolBar'
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

const store = createStore(allReducers);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/zingstm`} component={AdminLayout} />
        <Route path={`/rtl`} component={RTLLayout} />
        <Redirect from={`/`} to="/zingstm/home" />
      </Switch>
      <MusicToolBar />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
