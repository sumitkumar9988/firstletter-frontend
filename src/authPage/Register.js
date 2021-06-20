import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../extraPage/Alert';
import Loader from '../extraPage/Loader';
import Username from './Username';
import { signup } from '../redux/actions/authActions.js';
import logo from './../Asset/logo2.png';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, success } = userSignup;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: user } = userLogin;

  const responseGoogle = (response) => {
    console.log(response);
  };

  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (user) {
      history.push('/home');
    }
    if (success) {
      history.push('/home');
    }
  }, [history, success, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: 'User',
      action: 'Account Created',
    });
    const data = {
      name,
      username,
      email,
      password,
    };
    dispatch(signup(data));
  };

  return (
    <div className="bg-black  pt-9 min-h-screen ">
      {error && <Alert message={error} type="error" />}
      {loading && <Loader />}
      <Username name="sumit" />

      <div className="flex items-center justify-center  sm:px-6">
        <div className="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
          <img src={logo} className="h-24 mt-2 m-auto" alt="logo"></img>
          <div className="flex items-center justify-center">
            <span className="text-xl font-medium text-white">Create Your Account</span>
          </div>

          <div className="flex items-center justify-center">
            <GoogleLogin
              clientId="71989194000-m7ktsm5s0chvj9uguohasu2qufpn36v2.apps.googleusercontent.com"
              render={(renderProps) => (
                // eslint-disable-next-line jsx-a11y/no-redundant-roles
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  aria-label="Continue with google"
                  role="button"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-50 flex items-center w-full mt-10"
                >
                  <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                      fill="#34A853"
                    />
                    <path
                      d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                      fill="#EB4335"
                    />
                  </svg>
                  <p className="text-base font-medium ml-4 text-gray-50">Continue with Google</p>
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div className="flex items-center justify-center pt-8">
            <span className="text-base font-medium text-white">Or</span>
          </div>
          <form className="mt-4">
            <label for="Name" className="block">
              <label for="username" className="block mt-3">
                <span className="text-sm text-white">Username</span>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full px-3 py-2 mt-1 text-black bg-gray-100 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-200"
                  required
                />
              </label>

              <span className="text-sm text-white">Full Name</span>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-3 py-2 mt-1 text-black bg-gray-100 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-200"
                required
              />
            </label>

            <label for="email" className="block mt-3">
              <span className="text-sm text-white">Email</span>
              <input
                type="email"
                id="email"
                value={email}
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
                value={password}
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
              <Link to="/login">
                <div>
                  <p className="block text-sm text-indigo-200 hover:underline focus:outline-none focus:underline">
                    Already Have Account?
                  </p>
                </div>
              </Link>
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
