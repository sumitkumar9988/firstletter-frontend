import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  signupReducer,
  loginReducer,
  changePasswordReducer,
  forgetPasswordReducer,
  resetPasswordReducer,
  getUserDetailsReducer,
} from './redux/reducer/authReducers';

const reducer = combineReducers({
  userSignup: signupReducer,
  userLogin: loginReducer,
  userChangePassword:  changePasswordReducer,
  useForgetPassword:  forgetPasswordReducer,
  userResetPassword:  resetPasswordReducer,
  getUserDetails:  getUserDetailsReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
