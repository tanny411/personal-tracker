import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import AppNavbar from "./components/layout/AppNavbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

import TodoList from "./components/TodoList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

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
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/dashboard"
              component={() =>
                <Container>
                  <ItemModal />
                  <TodoList />
                </Container>
              }
            />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
