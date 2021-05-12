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

// all Reducers related to Education

export const getEducationListOfUser = (state = { data: { education: [] } }, action) => {
  switch (action.type) {
    case GET_ALL_EDUCATION_LIST_REQUEST:
      return { loading: true };
    case GET_ALL_EDUCATION_LIST_SUCCESS:
      return { loading: false, educations: action.payload.data.education };
    case GET_ALL_EDUCATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getEducationByid = (state = { data: { education: [] } }, action) => {
  switch (action.type) {
    case GET_EDUCATION_BY_ID_REQUEST:
      return { loading: true };
    case GET_EDUCATION_BY_ID_SUCCESS:
      return { loading: false, education: action.payload.data.education };
    case GET_EDUCATION_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteEducation = (state = {}, action) => {
  switch (action.type) {
    case DELETE_EDUCATION_REQUEST:
      return { loading: true };
    case DELETE_EDUCATION_SUCCESS:
      return { loading: false, success: action.payload.message };
    case DELETE_EDUCATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addNewEducation = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_EDUCATION_REQUEST:
      return { loading: true };
    case ADD_NEW_EDUCATION_SUCCESS:
      return { loading: false, success: action.payload.message };
    case ADD_NEW_EDUCATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateEducationById = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_EDUCATION_DETAILS_REQUEST:
      return { loading: true };
    case UPDATE_EDUCATION_DETAILS_SUCCESS:
      return { loading: false, success: action.payload.message };
    case UPDATE_EDUCATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// All Reducers related to Certificate

export const getAllUserCertificate = (state = { data: { certificate: [] } }, action) => {
  switch (action.type) {
    case GET_ALL_CERTIFICATE_LIST_REQUEST:
      return { loading: true };
    case GET_ALL_CERTIFICATE_LIST_SUCCESS:
      return { loading: false, certificates: action.payload.data.certificate };
    case GET_ALL_CERTIFICATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addNewCertificate = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_CERTIFICATE_REQUEST:
      return { loading: true };
    case ADD_NEW_CERTIFICATE_SUCCESS:
      return { loading: false, success: action.payload.message };
    case ADD_NEW_CERTIFICATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteCertificate = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CERTIFICATE_REQUEST:
      return { loading: true };
    case DELETE_CERTIFICATE_SUCCESS:
      return { loading: false, success: action.payload.message };
    case DELETE_CERTIFICATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// All Reducers Related to Experience

export const getAllUserExperience = (state = { data: { experience: [] } }, action) => {
  switch (action.type) {
    case GET_ALL_EXPERIENCE_LIST_REQUEST:
      return { loading: true };
    case GET_ALL_EXPERIENCE_LIST_SUCCESS:
      return { loading: false, experiences: action.payload.data.experience };
    case GET_ALL_EXPERIENCE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getExperienceById = (state = { data: { experience: [] } }, action) => {
  switch (action.type) {
    case GET_EXPERIENCE_BY_ID_REQUEST:
      return { loading: true };
    case GET_EXPERIENCE_BY_ID_SUCCESS:
      return { loading: false, experiences: action.payload.data.experience };
    case GET_EXPERIENCE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteExperienceByID = (state = {}, action) => {
  switch (action.type) {
    case DELETE_EXPERIENCE_REQUEST:
      return { loading: true };
    case DELETE_EXPERIENCE_SUCCESS:
      return { loading: false, success: action.payload.message };
    case DELETE_EXPERIENCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addNewExperience = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_EXPERIENCE_REQUEST:
      return { loading: true };
    case ADD_NEW_EXPERIENCE_SUCCESS:
      return { loading: false, success: action.payload.message };
    case ADD_NEW_EXPERIENCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateExperienceByID = (state = { data: { experience: [] } }, action) => {
  switch (action.type) {
    case UPDATE_EXPERIENCE_DETAILS_REQUEST:
      return { loading: true };
    case UPDATE_EXPERIENCE_DETAILS_SUCCESS:
      return { loading: false, experiences: action.payload.data.experience };
    case UPDATE_EXPERIENCE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
