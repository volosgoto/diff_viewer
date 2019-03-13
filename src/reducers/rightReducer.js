import { GET_RIGHT_LIST } from "../actions/types";

const initialState = {
  rightList: [],
  rightList: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RIGHT_LIST:
      return {
        ...state
      };

    default:
      return state;
  }
}
