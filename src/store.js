import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const initialState = {
  // item: false
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    // applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
