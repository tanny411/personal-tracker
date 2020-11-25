import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import AppNavbar from "./components/layout/AppNavbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import UserLanding from "./components/user-layout/landing/UserLanding";
import Settings from "./components/user-layout/Settings";
import Todo from "./components/user-layout/trackers/todo/Todo";
import Expenses from "./components/user-layout/trackers/expenses/Expenses";

import PrivateRoute from "./components/common/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App flex-wrapper">
            <AppNavbar />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={UserLanding} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/settings" component={Settings} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/todo" component={Todo} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/expenses" component={Expenses} />
            </Switch>
            <Route exact path="/" component={Landing} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
