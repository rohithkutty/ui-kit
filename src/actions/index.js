import ActionTypes from "../constants/action-types";

const dispatchAction = (dispatch, type, payload) => {
  dispatch({ type, payload });
};

export default dispatch => {
  return {
    appLoaded: () => {
      dispatchAction(dispatch, ActionTypes.SAMPLE_CONSTANT, true);
    }
  };
};
