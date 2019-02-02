import { FETCH_PACKAGES_FULFILLED, INITIALIZE_TECHNOLOGIES_FULFILLED } from "../actions/types";

export default function packageReducer(state = {
  packages: [],
  config: {
    fetching: false,
    fetched: false
  }
}, action) {

  const PENDING = { ...state, config: { fetching: true, fetched: false } };

  const REJECTED = { ...state, config: { fetching: false, fetched: false } };

  const FULFILLED = { ...state, config: { fetching: false, fecthed: true } };

  switch (action.type) {
    case FETCH_PACKAGES_FULFILLED: return {
      ...FULFILLED,
      packages: action.payload.data
    };

    case INITIALIZE_TECHNOLOGIES_FULFILLED: return {
      ...FULFILLED,
      packages: action.payload.data
    };

    default: {
      switch (action.type.split("_").reverse()[0]) {
        case "PENDING": return PENDING;
        case "REJECTED": return { ...REJECTED, error: action.payload };
        case "FULFILLED": return FULFILLED;
        default: return state;
      }
    }
  }
}
