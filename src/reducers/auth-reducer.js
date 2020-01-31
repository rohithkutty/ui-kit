import { SAMPLE_CONSTANT } from "../constants/action-types";

const initialState = {
  initialLoad: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_CONSTANT:
      return {
        ...state,
        initialLoad: action.payload
      };
    default:
      return state;
  }
}
