import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import store from "./Redux/Store";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/AppStyle.css";

import setAuthToken from "./Component/SetAuth/setAuthToken";
import { setCurrentUser } from "./Redux/Action/AuthAction";

import HomeRouter from "./Component/HomeRouter/HomeRouter";
import AdminRouter from "./Component/Admin/AdminRouter/AdminRouter";
import { setCurrentAdmin } from "./Redux/Action/Admin/AuthAdminAction";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem("jwtToken");
    window.location = "/sign-in";
  }
} else if (localStorage.jwtAdminToken) {
  setAuthToken(localStorage.jwtAdminToken);
  const decoded = jwt_decode(localStorage.jwtAdminToken);
  store.dispatch(setCurrentAdmin(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem("jwtAdminToken");
    window.location = "/sign-in";
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/admin" component={AdminRouter} />
            <Route path="/" component={HomeRouter} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
