import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../extraPage/Alert';
import Loader from '../extraPage/Loader';
import { signup } from '../redux/actions/authActions.js';

const Register = ({ history, location }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, user } = userSignup;

//   console.log(loading);
//   console.log(error);
//   console.log(user);

  const data = { name, username, email, password };


  const redirect = location.search ? location.search.split('=')[1] : '/';

        //   useEffect(() => {
        //     if (userInfo) {
        //       history.push(redirect);
        //     }
        //   }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(data, history));
  };

  return (
    <div className="bg-gray-800 h-screen ">
      <Alert message="You Have Wrong Password" type="Fail" color="green" />

      <div className="flex items-center justify-center  sm:px-6">
        <div className="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
          <div className="flex items-center justify-center">
            <span className="text-xl font-medium text-white">Create Your Account</span>
          </div>
          <form className="mt-4">
            <label for="Name" className="block">
              <span className="text-sm text-white">Full Name</span>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-black bg-gray-100 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-200"
                required
              />
            </label>

            <label for="username" className="block mt-3">
              <span className="text-sm text-white">Username</span>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                className="block w-full px-3 py-2 mt-1 text-black bg-gray-100 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-200"
                required
              />
            </label>

            <label for="email" className="block mt-3">
              <span className="text-sm text-white">Email</span>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-black bg-gray-100 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-200"
                required
              />
            </label>

            <label for="password" className="block mt-3">
              <span className="text-sm text-white">Password</span>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-black bg-gray-100 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-200"
                required
              />
            </label>

            <div className="flex items-center justify-between mt-4">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="text-indigo-600 border form-checkbox focus:outline-none focus:shadow-outline"
                  />
                  <span className="mx-2 text-sm text-white">Remember me</span>
                </label>
              </div>
              <div>
                <a
                  className="block text-sm text-indigo-200 hover:underline focus:outline-none focus:underline"
                  href="#"
                >
                  Already Have Account?
                </a>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                onClick={submitHandler}
                className="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
