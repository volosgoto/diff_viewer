import { GET_LEFT_LIST } from "../actions/types";

// each reducer must hava own initial state

const initialState = {
  leftList: [],
  leftList: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEFT_LIST:
      return {
        ...state
      };

    default:
      return state;
  }
}
