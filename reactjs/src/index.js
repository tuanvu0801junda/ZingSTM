/*!

=========================================================
* Purity UI Dashboard - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
