import { GET_COUNTRIES, GET_COUNTRY } from "./actions-types";

// ESTADOS
const initialState = {
  countries: [],
  activities: [],
  countryId: [],
  currentPage: 1,
  filteredCountry: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case GET_COUNTRY:
      return {
        ...state,
        countryId: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
