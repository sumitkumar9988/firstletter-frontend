import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from './../../redux/actions/authActions';
import { setSPOJUsername, getSPOJData } from './../../redux/actions/projectActions';
import Alert from '../../extraPage/Alert';
import Loader from './../components/Loader';

function Index() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.getUserDetails);
  const { loading, error, user } = userDetails;

  const SPOJUsername = useSelector((state) => state.SPOJUsername);
  const { loading: SPOJUsernameLoading, error: spojUsernameError, success } = SPOJUsername;

  const SPOJData = useSelector((state) => state.SPOJData);
  const { loading: SPOJDataLoading, error: SPOJDataError, spoj } = SPOJData;

  useEffect(() => {
    dispatch(userProfile());
    dispatch(getSPOJData());
  }, [dispatch]);

  const handler = () => {
    const input = {
      spojAccount: username,
    };
    console.log('Hii', input);
    dispatch(setSPOJUsername(input));
  };

  if (!user) {
    return null;
  } else {
    if (!user.spojAccount) {
      return (
        <div className="bg-black min-h-screen">
          {spojUsernameError && <Alert message={spojUsernameError} type="error" />}
          {success && <Alert message={success} type="success" />}
          <div className="mt-28 w-11/12 mx-auto mb-4 my-6 md:w-2/3 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 rounded-md">
            <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold mb-3">Add Your SPOJ Account</p>
            <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              Enter Your SPOJ username
            </label>
            <div className="flex flex-col items-start sm:items-center sm:flex-row mt-4">
              <div className="relative w-full sm:w-2/3">
                <input
                  type="text"
                  value={username}
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="py-3 text-gray-600 dark:text-gray-400 bg-transparent focus:outline-none focus:border focus:border-indigo-700 font-normal w-full pl-16 text-sm border-gray-300 dark:border-gray-700 rounded border shadow"
                  placeholder="username"
                />
              </div>
              <button
                onClick={handler}
                className="mt-4 sm:mt-0 sm:ml-4 focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      {SPOJUsernameLoading && <Loader />}
      {SPOJDataLoading ? (
        <Loader />
      ) : error ? (
        <Alert message={SPOJDataError} type="error" />
      ) : (
        <div className="min-h-screen">
          <div className="my-6 lg:my-12 container px-6 mx-auto flex  md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-gray-50 ">SPOJ</h4>
            </div>
            <div className=" md:mt-0">
              <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                Update
              </button>
            </div>
          </div>
          <div className="w-full mt-20  flex  justify-center">
            <div className=" sm:w-1/2 w-full  flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
              <div className="w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <img src="https://cdn.tuk.dev/assets/templates/olympus/profile.png" alt="profile" />
                  <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">
                    {spoj?.username}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-7">
                <div className>
                  <p className="text-1xs text-gray-300">Rank</p>
                  <p className="mt-2 text-base sm:text-lg md:text-xl  text-gray-50">{spoj?.rank}</p>
                </div>
                <div className="ml-12">
                  <p className="text-1xs text-gray-300">points</p>
                  <p className="mt-2 text-base sm:text-lg md:text-xl  text-gray-50">{spoj?.rank}</p>
                </div>
                <div className="ml-12">
                  <p className="text-1xs text-gray-300">Total Problem Solved</p>
                  <p className="mt-2 text-base text-center sm:text-lg md:text-xl text-gray-50">{spoj?.solved.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
