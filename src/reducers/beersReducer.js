import * as types from "../constants/ActionTypes";

let beersFiltered;
const INITIAL_STATE = { loading: false };

const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_BEERS_REQUEST:
      return { loading: true, ...state };
    case types.FETCH_BEERS_FAILURE:
      return { loading: false, error: action.error };

    case types.FETCH_BEERS_SUCCESS:
      // get the price as a number for filtering
      const beersParsed = action.payload.map(beer => ({
        ...beer,
        priceParsed: parseFloat(beer.price.slice(1)),
        sizeParsed: parseInt(beer.size.slice(0, 3), 10),
      }));
      return { loading: false, beers: beersParsed, beersFiltered: beersParsed };

    case types.CHANGE_MIN_ML:
    case types.CHANGE_MAX_ML:
      let minMl = action.payload.minMl || state.minMl || 0;
      let maxMl = action.payload.maxMl || state.maxMl || 99999999;

      minMl = parseInt(minMl, 10);
      maxMl = parseInt(maxMl, 10);

      beersFiltered = state.beers.filter(
        beer => beer.sizeParsed >= minMl && beer.sizeParsed <= maxMl,
      );

      return { ...state, beersFiltered };

    case types.CHANGE_MIN_PRICE:
    case types.CHANGE_MAX_PRICE:
      let minPrice = action.payload.minPrice || state.minPrice || 0;
      let maxPrice = action.payload.maxPrice || state.maxPrice || 99999999;

      minPrice = parseFloat(minPrice);
      maxPrice = parseFloat(maxPrice);

      beersFiltered = state.beers.filter(
        beer => beer.priceParsed >= minPrice && beer.priceParsed <= maxPrice,
      );

      return { ...state, beersFiltered };
    default:
      return state;
  }
};

export default beersReducer;
