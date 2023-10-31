import axios from "axios";
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

// COUNTRIES

const getCountries = () => {
  return async function (dispatch) {
    const dbData = await axios.get(`/countries`);
    const countries = dbData.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

const getCountry = (id) => {
  return async function (dispatch) {
    let country = await axios.get(`/countries/${id}`);
    let countryID = country.data;
    dispatch({
      type: GET_COUNTRY,
      payload: countryID,
    });
  };
};

const searchByName = (name) => {
  return async function (dispatch) {
    let nameData = await axios.get(`/countries/?name=${name}`);
    let countryNameInfo = nameData.data;
    dispatch({ type: SEARCH_BY_NAME, payload: countryNameInfo });
  };
};

// ACTIVIDADES

const getActivities = () => {
  return async function (dispatch) {
    const dbData = await axios.get(`/activities`);
    const activities = dbData.data;
    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};

// FILTROS Y ORDENAMIENTOS

const setContinentFilter = (continent) => ({
  type: SET_CONTINENT_FILTER,
  payload: continent,
});

const setActivityFilter = (activity) => ({
  type: SET_ACTIVITY_FILTER,
  payload: activity,
});

const setAlphabeticalOrder = (order) => ({
  type: SET_ALPHABETICAL_ORDER,
  payload: order,
});

const setPopulationOrder = (order) => ({
  type: SET_POPULATION_ORDER,
  payload: order,
});

export {
  getCountries,
  getCountry,
  getActivities,
  searchByName,
  setContinentFilter,
  setActivityFilter,
  setAlphabeticalOrder,
  setPopulationOrder,
};
