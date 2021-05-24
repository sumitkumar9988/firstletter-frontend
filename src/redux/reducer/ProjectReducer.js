import { act } from 'react-dom/test-utils';
import {
  SAVE_GITHUB_USERNAME_REQUEST,
  SAVE_GITHUB_USERNAME_SUCCESS,
  SAVE_GITHUB_USERNAME_FAIL,
  ALL_USER_PROJECTS_REQUEST,
  ALL_USER_PROJECTS_SUCCESS,
  ALL_USER_PROJECTS_FAIL,
  ALL_USER_PROJECTS_BY_ID_REQUEST,
  ALL_USER_PROJECTS_BY_ID_SUCCESS,
  ALL_USER_PROJECTS_BY_ID_FAIL,
  UPDATE_PROJECT_DETAILS_REQUEST,
  UPDATE_PROJECT_DETAILS_SUCCESS,
  UPDATE_PROJECT_DETAILS_FAIL,
  SET_CODECHEF_USERNAME_REQUEST,
  SET_CODECHEF_USERNAME_SUCCESS,
  SET_CODECHEF_USERNAME_FAIL,
  GET_CODECHEF_DATA_REQUEST,
  GET_CODECHEF_DATA_SUCCESS,
  GET_CODECHEF_DATA_FAIL,
  SET_SPOJ_USERNAME_REQUEST,
  SET_SPOJ_USERNAME_SUCCESS,
  SET_SPOJ_USERNAME_FAIL,
  GET_SPOJ_DATA_REQUEST,
  GET_SPOJ_DATA_SUCCESS,
  GET_SPOJ_DATA_FAIL,
  SET_CODEFORCES_USERNAME_REQUEST,
  SET_CODEFORCES_USERNAME_SUCCESS,
  SET_CODEFORCES_USERNAME_FAIL,
  GET_CODEFORCES_DATA_REQUEST,
  GET_CODEFORCES_DATA_SUCCESS,
  GET_CODEFORCES_DATA_FAIL,
} from './../constant/dashBoardConstants';

export const githubOAuth = (state = {}, action) => {
  switch (action.type) {
    case SAVE_GITHUB_USERNAME_REQUEST:
      return { loading: true };
    case SAVE_GITHUB_USERNAME_SUCCESS:
      return { loading: false, success: action.payload };
    case SAVE_GITHUB_USERNAME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Reducers related to cp

export const setCodchefUsername = (state = {}, action) => {
  switch (action.type) {
    case SET_CODECHEF_USERNAME_REQUEST:
      return { loading: true };
    case SET_CODECHEF_USERNAME_SUCCESS:
      return { loading: false, success: action.payload.message };
    case SET_CODECHEF_USERNAME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getCodechefData = (state = { data: { codeChef: {} } }, action) => {
  switch (action.type) {
    case GET_CODECHEF_DATA_REQUEST:
      return { loading: true };
    case GET_CODECHEF_DATA_SUCCESS:
      console.log('red', action.payload);
      return { loading: false, codechef: action.payload.data.codeChef };
    case GET_CODECHEF_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const setSPOJUsername = (state = {}, action) => {
  switch (action.type) {
    case SET_CODEFORCES_USERNAME_REQUEST:
      return { loading: true };
    case SET_CODEFORCES_USERNAME_SUCCESS:
      return { loading: false, success: action.payload };
    case SET_CODEFORCES_USERNAME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSPOJData = (state = {}, action) => {
  switch (action.type) {
    case GET_SPOJ_DATA_REQUEST:
      return { loading: true };
    case GET_SPOJ_DATA_SUCCESS:
      return { loading: false, success: action.payload };
    case GET_SPOJ_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const setCodeforcesUsername = (state = {}, action) => {
  switch (action.type) {
    case SET_SPOJ_USERNAME_REQUEST:
      return { loading: true };
    case SET_SPOJ_USERNAME_SUCCESS:
      return { loading: false, success: action.payload };
    case SET_SPOJ_USERNAME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getCodeforcesData = (state = {}, action) => {
  switch (action.type) {
    case GET_CODEFORCES_DATA_REQUEST:
      return { loading: true };
    case GET_CODEFORCES_DATA_SUCCESS:
      return { loading: false, success: action.payload };
    case GET_CODEFORCES_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
