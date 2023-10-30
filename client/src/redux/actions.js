import axios from "axios";
import { GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRY } from "./actions-types";

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
//     let recipeNameInfo = nameData.data;
//     dispatch({ type: SEARCH_BY_NAME, payload: recipeNameInfo });
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

export { getCountries, getCountry, getActivities };
