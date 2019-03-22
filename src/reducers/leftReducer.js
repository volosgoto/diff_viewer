// import { GET_LEFT_LIST } from "../actions/types";

// each reducer must hava own initial state

const initialState = {
  item: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SHOW_INFO":
      return {
        ...state,
        item: !state.item
      };

    default:
      return state;
  }
}
