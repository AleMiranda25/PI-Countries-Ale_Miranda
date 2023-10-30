import axios from "axios";
import {
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRY,
  ORDER_ALPH,
  ORDER_BY_POPULATION,
  SEARCH_BY_NAME,
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

// const searchByName = (name) => {
//   return async function (dispatch) {
//     let nameData = await axios.get(`/recipes/?name=${name}`);
//     let countryNameInfo = nameData.data;
//     dispatch({ type: SEARCH_BY_NAME, payload: countryNameInfo });
//   };
// };

// ACTIVIDADES

const getActivities = () => {
  return async function (dispatch) {
    const dbData = await axios.get(`/activities`);
    const activities = dbData.data;
    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};

// FILTROS Y ORDENAMIENTOS

// const filterByContinent = (continent) => {
//   return {
//     type: FILTER_BY_CONTINENT,
//     payload: gender,
//   };
// };

// const filterByActivity = (activity) => {
//   return {
//     type: FILTER_BY_ACTIVITY,
//     payload: gender,
//   };
// };

// const orderAlph = (option) => {
//   return {
//     type: ORDER_ALPH,
//     payload: orden,
//   };
// };

// const orderPopulation = (option) => {
//   return {
//     type: ORDER_BY_POPULATION,
//     payload: orden,
//   };
// };

export { getCountries, getCountry, getActivities };
