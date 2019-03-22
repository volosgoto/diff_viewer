// import { GET_RIGHT_LIST } from "../actions/types";
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
