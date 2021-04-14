import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../extraPage/Alert';
import Loader from '../extraPage/Loader';
import { resetPasswords, signup } from '../redux/actions/authActions.js';

const ResetPassword = ({ history, location }) => {
  
  const [password, setPassword] = useState('');
  const [confimPassword, setConfimPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log('user', userInfo);
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [history, userInfo]);

  const data = {
    password,
    confimPassword,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(data));
  };

  return (
    <div className="bg-gray-800 pt-9 h-screen ">
      {/* {error && <Alert message={error} type="error" color="red" />}
      {loading && <Loader />} */}
      <div className="flex items-center justify-center  sm:px-6">
        <div className="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
          <div className="flex items-center justify-center">
            <span className="text-xl font-medium text-white">Reset Your Account Password</span>
          </div>
          <form className="mt-4">
          
          

            <label for="password" className="block mt-3">
              <span className="text-sm text-white">New Password</span>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-black bg-gray-100 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-200"
                required
              />
            </label>

            <label for="password" className="block mt-3">
              <span className="text-sm text-white">Confirm Password</span>
              <input
                type="password"
                id="confimPassword"
                name="confimPassword"
                onChange={(e) => setConfimPassword(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-black bg-gray-100 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-200"
                required
              />
            </label>

            <div className="mt-6">
              <button
                type="submit"
                onClick={submitHandler}
                className="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 "
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
