import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <h1>Test</h1>
        </Provider>
      </div>
    );
  }
}

export default App;
