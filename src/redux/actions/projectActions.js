import axios from 'axios';
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

import { baseURL } from './../../utils/url';

export const saveGithubUsername = (input) => async (dispatch, getState) => {
  dispatch({ type: SAVE_GITHUB_USERNAME_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${baseURL}/github/callback`, input, config);
    console.log(data);
    dispatch({
      type: SAVE_GITHUB_USERNAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SAVE_GITHUB_USERNAME_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const projectList = (input) => async (dispatch, getState) => {
  dispatch({ type: ALL_USER_PROJECTS_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${baseURL}/github/callback`, input, config);
    console.log(data);
    dispatch({
      type: ALL_USER_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_USER_PROJECTS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const projectDetails = (input) => async (dispatch, getState) => {
  dispatch({ type: ALL_USER_PROJECTS_BY_ID_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${baseURL}/github/callback`, input, config);
    console.log(data);
    dispatch({
      type: ALL_USER_PROJECTS_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_USER_PROJECTS_BY_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateProjectDetails = (input) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_PROJECT_DETAILS_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${baseURL}/github/callback`, input, config);
    console.log(data);
    dispatch({
      type: UPDATE_PROJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_PROJECT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// compitative programming realted actions
export const setCodechefUsername = (input) => async (dispatch, getState) => {
  dispatch({ type: SET_CODECHEF_USERNAME_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${baseURL}/codechef`, input, config);
    dispatch({
      type: SET_CODECHEF_USERNAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SET_CODECHEF_USERNAME_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getCodechefData = () => async (dispatch, getState) => {
  dispatch({ type: GET_CODECHEF_DATA_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${baseURL}/codechef`, config);
    dispatch({
      type: GET_CODECHEF_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_CODECHEF_DATA_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const setSPOJUsername = (input) => async (dispatch, getState) => {
  dispatch({ type: SET_SPOJ_USERNAME_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${baseURL}/spok`, input, config);
    dispatch({
      type: SET_SPOJ_USERNAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SET_SPOJ_USERNAME_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getSPOJData = () => async (dispatch, getState) => {
  dispatch({ type: GET_SPOJ_DATA_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${baseURL}/spoj`, config);
    dispatch({
      type: GET_SPOJ_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_SPOJ_DATA_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const setCodeforcesUsername = (input) => async (dispatch, getState) => {
  dispatch({ type: SET_CODEFORCES_USERNAME_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${baseURL}/codeforces`, input, config);
    dispatch({
      type: SET_CODEFORCES_USERNAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SET_CODEFORCES_USERNAME_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getCodeforcesData = () => async (dispatch, getState) => {
  dispatch({ type: GET_CODEFORCES_DATA_REQUEST });
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${baseURL}/codeforces`, config);
    dispatch({
      type: GET_CODEFORCES_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_CODEFORCES_DATA_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
