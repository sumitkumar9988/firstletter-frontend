import axios from 'axios';
import {
  // GITHUB_O_AUTH,
  // GITHUB_CALLBACK,
  // SAVE_GITHUB_USERNAME_REQUEST,
  // SAVE_GITHUB_USERNAME_SUCCESS,
  // SAVE_GITHUB_USERNAME_FAIL,
  // ALL_USER_PROJECTS_REQUEST,
  // ALL_USER_PROJECTS_SUCCESS,
  // ALL_USER_PROJECTS_FAIL,
  // ALL_USER_PROJECTS_BY_ID_REQUEST,
  // ALL_USER_PROJECTS_BY_ID_SUCCESS,
  // ALL_USER_PROJECTS_BY_ID_FAIL,
  // UPDATE_PROJECT_DETAILS_REQUEST,
  // UPDATE_PROJECT_DETAILS_SUCCESS,
  // UPDATE_PROJECT_DETAILS_FAIL,
  GET_ALL_EDUCATION_LIST_REQUEST,
  GET_ALL_EDUCATION_LIST_SUCCESS,
  GET_ALL_EDUCATION_LIST_FAIL,
  GET_EDUCATION_BY_ID_REQUEST,
  GET_EDUCATION_BY_ID_SUCCESS,
  GET_EDUCATION_BY_ID_FAIL,
  ADD_NEW_EDUCATION_REQUEST,
  ADD_NEW_EDUCATION_SUCCESS,
  ADD_NEW_EDUCATION_FAIL,
  UPDATE_EDUCATION_DETAILS_REQUEST,
  UPDATE_EDUCATION_DETAILS_SUCCESS,
  UPDATE_EDUCATION_DETAILS_FAIL,
  DELETE_EDUCATION_REQUEST,
  DELETE_EDUCATION_SUCCESS,
  DELETE_EDUCATION_FAIL,
  GET_ALL_EXPERIENCE_LIST_REQUEST,
  GET_ALL_EXPERIENCE_LIST_SUCCESS,
  GET_ALL_EXPERIENCE_LIST_FAIL,
  GET_EXPERIENCE_BY_ID_REQUEST,
  GET_EXPERIENCE_BY_ID_SUCCESS,
  GET_EXPERIENCE_BY_ID_FAIL,
  ADD_NEW_EXPERIENCE_REQUEST,
  ADD_NEW_EXPERIENCE_SUCCESS,
  ADD_NEW_EXPERIENCE_FAIL,
  UPDATE_EXPERIENCE_DETAILS_REQUEST,
  UPDATE_EXPERIENCE_DETAILS_SUCCESS,
  UPDATE_EXPERIENCE_DETAILS_FAIL,
  DELETE_EXPERIENCE_REQUEST,
  DELETE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_FAIL,
  GET_ALL_CERTIFICATE_LIST_REQUEST,
  GET_ALL_CERTIFICATE_LIST_SUCCESS,
  GET_ALL_CERTIFICATE_LIST_FAIL,
  ADD_NEW_CERTIFICATE_REQUEST,
  ADD_NEW_CERTIFICATE_SUCCESS,
  ADD_NEW_CERTIFICATE_FAIL,
  DELETE_CERTIFICATE_REQUEST,
  DELETE_CERTIFICATE_SUCCESS,
  DELETE_CERTIFICATE_FAIL,
} from './../constant/dashBoardConstants';

import { baseURL } from './../../utils/url';

export const getAllUserEducation = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_EDUCATION_LIST_REQUEST });
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
    console.log('Request');
    const { data } = await axios.get(`${baseURL}/education`, config);
    console.log(data);
    dispatch({
      type: GET_ALL_EDUCATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ALL_EDUCATION_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getEducatinDetailById = (id) => async (dispatch, getState) => {
  dispatch({ type: GET_EDUCATION_BY_ID_REQUEST });
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
    const { data } = await axios.get(`${baseURL}/education/${id}`, config);
    dispatch({
      type: GET_EDUCATION_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EDUCATION_BY_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const addNewEducation = (input) => async (dispatch, getState) => {
  dispatch({ type: ADD_NEW_EDUCATION_REQUEST });
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
    console.log(input);
    const { data } = await axios.post(`${baseURL}/education`, input, config);

    dispatch({
      type: ADD_NEW_EDUCATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_NEW_EDUCATION_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateEductionDetails = (id, input) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_EDUCATION_DETAILS_REQUEST });
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

    const { data } = await axios.patch(`${baseURL}/education/${id}`, input, config);

    dispatch({
      type: UPDATE_EDUCATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_EDUCATION_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const deleteEducationDetail = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_EDUCATION_REQUEST });
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

    const { data } = await axios.delete(`${baseURL}/education/${id}`, config);

    dispatch({
      type: DELETE_EDUCATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_EDUCATION_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

//All action of certificates related API

export const getAllUserCertificate = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_CERTIFICATE_LIST_REQUEST });
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

    const { data } = await axios.get(`${baseURL}/certificate`, config);

    dispatch({
      type: GET_ALL_CERTIFICATE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CERTIFICATE_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const addCertificate = (input) => async (dispatch, getState) => {
  dispatch({ type: ADD_NEW_CERTIFICATE_REQUEST });
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

    const { data } = await axios.post(`${baseURL}/certificate`, config, input);

    dispatch({
      type: ADD_NEW_CERTIFICATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_NEW_CERTIFICATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const deleteCertificate = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_CERTIFICATE_REQUEST });
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

    const { data } = await axios.delete(`${baseURL}/certificate/:${id}`, config);

    dispatch({
      type: DELETE_CERTIFICATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CERTIFICATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

//all experience related to experience

export const getAllUserExperience = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_EXPERIENCE_LIST_REQUEST });
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

    const { data } = await axios.get(`${baseURL}/experience`, config);

    dispatch({
      type: GET_ALL_EXPERIENCE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_EXPERIENCE_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getExperienceById = (id) => async (dispatch, getState) => {
  dispatch({ type: GET_EXPERIENCE_BY_ID_REQUEST });
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

    const { data } = await axios.get(`${baseURL}/experience/${id}`, config);

    dispatch({
      type: GET_EXPERIENCE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EXPERIENCE_BY_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const deleteExperirence = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_EXPERIENCE_REQUEST });
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

    const { data } = await axios.delete(`${baseURL}/experience/${id}`, config);

    dispatch({
      type: DELETE_EXPERIENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_EXPERIENCE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const addNewExperience = (input) => async (dispatch, getState) => {
  dispatch({ type: ADD_NEW_EXPERIENCE_REQUEST });
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

    const { data } = await axios.post(`${baseURL}/experience`, input, config);

    dispatch({
      type: ADD_NEW_EXPERIENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_NEW_EXPERIENCE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateExperience = (id, input) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_EXPERIENCE_DETAILS_REQUEST });
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

    const { data } = await axios.patch(`${baseURL}/experience/${id}`, input, config);

    dispatch({
      type: UPDATE_EXPERIENCE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EXPERIENCE_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
