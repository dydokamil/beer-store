import axios from "axios";

import * as types from "../constants/ActionTypes";

export const ROOT_URL = `http://demo8465751.mockable.io/products`;

export const fetchBeersRequest = () => ({
  type: types.FETCH_BEERS_REQUEST,
});

export const fetchBeersSuccess = payload => ({
  type: types.FETCH_BEERS_SUCCESS,
  payload,
});

export const fetchBeersFailure = error => ({
  type: types.FETCH_BEERS_FAILURE,
  error,
});

export const fetchBeers = () => dispatch => {
  dispatch(fetchBeersRequest());
  return axios
    .get(ROOT_URL)
    .then(body => dispatch(fetchBeersSuccess(body.data)))
    .catch(error => dispatch(fetchBeersFailure(error.response.data.error)));
};

export const changeMinMl = minMl => ({
  type: types.CHANGE_MIN_ML,
  payload: { minMl },
});

export const changeMaxMl = maxMl => ({
  type: types.CHANGE_MAX_ML,
  payload: { maxMl },
});

export const changeMinPrice = minPrice => ({
  type: types.CHANGE_MIN_PRICE,
  payload: { minPrice },
});

export const changeMaxPrice = maxPrice => ({
  type: types.CHANGE_MAX_PRICE,
  payload: { maxPrice },
});
