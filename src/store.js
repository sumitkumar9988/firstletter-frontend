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

import {
  getEducationListOfUser,
  getEducationByid,
  deleteEducation,
  addNewEducation,
  updateEducationById,
  getAllUserCertificate,
  addNewCertificate,
  deleteCertificate,
  getAllUserExperience,
  getExperienceById,
  deleteExperienceByID,
  addNewExperience,
  updateExperienceByID,
} from './redux/reducer/dashboardReducer';

import {
  githubOAuth,
  setCodchefUsername,
  getCodechefData,
  setSPOJUsername,
  getSPOJData,
  setCodeforcesUsername,
  getCodeforcesData,
  projectListReducer,
  projectDetailsReducer,
  updateProjectReducer,
} from './redux/reducer/ProjectReducer';

const reducer = combineReducers({
  userSignup: signupReducer,
  userLogin: loginReducer,
  userChangePassword: changePasswordReducer,
  useForgetPassword: forgetPasswordReducer,
  userResetPassword: resetPasswordReducer,
  getUserDetails: getUserDetailsReducer,
  userAllExplist: getAllUserExperience,
  userAllCertificateList: getAllUserCertificate,
  userEducationList: getEducationListOfUser,
  userEducation: getEducationByid,
  deleteEducation: deleteEducation,
  postEducation: addNewEducation,
  patchEduction: updateEducationById,
  postCertficate: addNewCertificate,
  deleteCertificate: deleteCertificate,
  userExperienceID: getExperienceById,
  deleteExperience: deleteExperienceByID,
  postExperience: addNewExperience,
  patchExperience: updateExperienceByID,
  githubOAuth: githubOAuth,
  codchefUsername: setCodchefUsername,
  codechefData: getCodechefData,
  SPOJUsername: setSPOJUsername,
  SPOJData: getSPOJData,
  codeforcesUsername: setCodeforcesUsername,
  codeforcesData: getCodeforcesData,
  projectList: projectListReducer,
  projectDetails: projectDetailsReducer,
  updateProject: updateProjectReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
