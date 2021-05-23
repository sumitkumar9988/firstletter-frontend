import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ALL_USER_DETAILS_REQUEST,
  GET_ALL_USER_DETAILS_SUCCESS,
  GET_ALL_USER_DETAILS_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
  // FILL_BASIC_DETAILS_REQUEST,
  // FILL_BASIC_DETAILS_SUCCESS,
  // FILL_BASIC_DETAILS_FAILURE,
  // UPDATE_PROFILE_IMAGE_REQUEST,
  // UPDATE_PROFILE_IMAGE_SUCESS,
  // UPDATE_PROFILE_IMAGE_FAILURE,
  // UPDATE_USERNAME_REQUEST,
  // UPDATE_USERNAME_SUCCESS,
  // UPDATE_USERNAME_FAIL,
  // UPDATE_SOCIAL_ACCOUNT_REQUEST,
  // UPDATE_SOCIAL_ACCOUNT_SUCCESS,
  // UPDATE_SOCIAL_ACCOUNT_FAIL,
} from './../constant/authConstants';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const signupReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { loading: true };
    case SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SIGNUP_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const changePasswordReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case CHANGE_PASSWORD_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case CHANGE_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const forgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGET_PASSWORD_REQUEST:
      return { loading: true };
    case FORGET_PASSWORD_SUCCESS:
      return { loading: false, success: action.payload };
    case FORGET_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { loading: true };
    case RESET_PASSWORD_SUCCESS:
      return { loading: false, success: action.payload };
    case RESET_PASSWORD_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_ALL_USER_DETAILS_REQUEST:
      return { loading: true };
    case GET_ALL_USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload.user };
    case GET_ALL_USER_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
