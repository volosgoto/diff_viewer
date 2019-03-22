import React, { Component } from "react";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div className="container-fluid">
            <div className="row">
              <LeftColumn />
              <RightColumn />
            </div>
            <br />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
