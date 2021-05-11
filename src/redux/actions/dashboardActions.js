import axios from 'axios';
import {
  GITHUB_O_AUTH,
  GITHUB_CALLBACK,
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
  GET_CERTIFICATE_BY_ID_REQUEST,
  GET_CERTIFICATE_BY_ID_SUCCESS,
  GET_CERTIFICATE_BY_ID_FAIL,
  ADD_NEW_CERTIFICATE_REQUEST,
  ADD_NEW_CERTIFICATE_SUCCESS,
  ADD_NEW_CERTIFICATE_FAIL,
  UPDATE_CERTIFICATE_DETAILS_REQUEST,
  UPDATE_CERTIFICATE_DETAILS_SUCCESS,
  UPDATE_CERTIFICATE_DETAILS_FAIL,
  DELETE_CERTIFICATE_REQUEST,
  DELETE_CERTIFICATE_SUCCESS,
  DELETE_CERTIFICATE_FAIL,
} from './../constant/dashBoardConstants';

import { baseURL } from './../../utils/url';

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

    const { data } = await axios.get(`${baseURL}/education`, config);

    dispatch({
      type: GET_ALL_EDUCATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_EDUCATION_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};