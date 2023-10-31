import {
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_BY_NAME,
  SET_ACTIVITY_FILTER,
  SET_ALPHABETICAL_ORDER,
  SET_CONTINENT_FILTER,
  SET_POPULATION_ORDER,
} from "./actions-types";

// ESTADOS
const initialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
  countryId: [],
  searchCountry: [],
  // Estados para los filtros
  continentFilter: null,
  activityFilter: null,
  alphabeticalOrder: null,
  populationOrder: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Paises
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
    // Actividades
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: payload,
        filteredCountries: payload,
      };
    // Filtros y ordenamientos
    case SET_CONTINENT_FILTER:
      let filterContinent = [...state.filteredCountries];
      filterContinent = filterContinent.filter(
        (country) => country.continent === payload
      );
      return {
        ...state,
        filteredCountries: filterContinent,
        continentFilter: payload,
      };
    case SET_ACTIVITY_FILTER:
      let filtereActivity = [...state.filteredCountries];

      filtereActivity = filtereActivity.filter(
        (country) => country.Activities[0]?.name === payload
      );
      return {
        ...state,
        filteredCountries: filtereActivity,
        activityFilter: payload,
      };
    case SET_ALPHABETICAL_ORDER:
      let orderAlph = [...state.filteredCountries];
      orderAlph = orderAlph.sort((a, b) => {
        if (payload === "A-Z") {
          return a.name.localeCompare(b.name);
        } else if (payload === "Z-A") {
          return b.name.localeCompare(a.name);
        }
      });
      return {
        ...state,
        filteredCountries: orderAlph,
        alphabeticalOrder: payload,
      };
    case SET_POPULATION_ORDER:
      let orderPopulation = [...state.filteredCountries];
      orderPopulation = orderPopulation.sort((a, b) => {
        if (payload === "Ascendente") {
          return a.population - b.population;
        } else if (payload === "Descendente")
          return b.population - a.population;
      });
      return {
        ...state,
        filteredCountries: orderPopulation,
        populationOrder: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
