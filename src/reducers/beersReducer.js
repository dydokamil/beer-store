import * as types from "../constants/ActionTypes";

const INITIAL_STATE = { loading: false };

const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_BEERS_REQUEST:
      return { loading: true, ...state };
    case types.FETCH_BEERS_SUCCESS:
      return { loading: false, beers: action.payload };
    default:
      return state;
  }
};

export default beersReducer;
