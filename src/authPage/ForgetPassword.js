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
  const { loading, error, userInfo } = userSignup;
  console.log('user', userInfo);
  useEffect(() => {
    if (userInfo) {
      history.push('/home');
    }
  }, [history, userInfo]);

  const data = {
    name,
    username,
    email,
    password,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(data));
  };

  return (
    <div className="bg-gray-800 pt-9 h-screen ">
      {error && <Alert message={error} type="error" color="red" />}
      {loading && <Loader />}
      <div className="flex items-center justify-center pt-9 pb-9 sm:px-6">
        <div className="w-full max-w-sm p-4 pt-9 bg-gray-900 rounded-md shadow-md sm:p-6">
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
