import {
  COMBINED_ORDER,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_BY_NAME,
} from "./actions-types";

// ESTADOS
const initialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
  countryId: [],
  searchCountry: [],
  currentPage: 1,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        filteredCountries: payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        countryId: payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case COMBINED_ORDER:
      let combinedOrdered = [...state.countries];

      combinedOrdered.sort((a, b) => {
        // Aplicar primer ordenamiento (por nombre)
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return payload[0] === "A-Z" ? -1 : 1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return payload[0] === "A-Z" ? 1 : -1;
        }

        // Aplicar segundo ordenamiento (por población)
        if (payload[1] === "Ascendente") {
          return a.population - b.population;
        } else if (payload[1] === "Descendente") {
          return b.population - a.population;
        }

        return 0;
      });

      return {
        ...state,
        filteredCountries: combinedOrdered,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: payload,
        filteredCountries: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
