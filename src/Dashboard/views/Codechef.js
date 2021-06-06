import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from './../../redux/actions/authActions';
import { setCodechefUsername, getCodechefData } from './../../redux/actions/projectActions';
import ReactGA from 'react-ga';
import Alert from '../../extraPage/Alert';
import Loader from './../components/Loader';

function Index() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.getUserDetails);
  const { loading, error, user } = userDetails;

  const codchefUsername = useSelector((state) => state.codchefUsername);
  const { loading: codechefUsernameLoading, error: codechefUsernameError, success } = codchefUsername;

  const codechefData = useSelector((state) => state.codechefData);
  const { loading: codechefLoading, error: codechefError, codechef } = codechefData;

  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    dispatch(userProfile());
    dispatch(getCodechefData());
  }, [dispatch]);

  const handler = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: 'User',
      action: 'Codechef Account Added',
    });
    const input = {
      codeChefUsername: username,
    };
    dispatch(setCodechefUsername(input));
  };

  if (!user) {
    return null;
  } else {
    if (!user.codeChefAccount) {
      return (
        <div className="bg-black min-h-screen">
          {codechefUsernameError && <Alert message={codechefUsernameError} type="error" />}
          {success && <Alert message={success} type="success" />}
          <div className="mt-28 w-11/12 mx-auto mb-4 my-6 md:w-2/3 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 rounded-md">
            <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold mb-3">Add Your Codechef Account</p>
            <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              Enter Your Codechef username
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
      {codechefLoading ? (
        <Loader />
      ) : error ? (
        <Alert message={codechefError} type="error" />
      ) : (
        <div className="w-full bg-black min-h-screen  py-10">
          <div className="my-6 lg:my-12 container px-6 mx-auto flex  md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-gray-50 ">CodeChef</h4>
            </div>
            <div className=" md:mt-0"></div>
          </div>
          <div className="container mx-auto px-6 flex items-start justify-center">
            <div className="w-full">
              {/* Card is full width. Use in 12 col grid for best view. */}
              {/* Card code block start */}
              <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
                <div className="w-full lg:w-1/2 px-12 flex flex-col items-center py-10">
                  <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    {/* <img
                      className="w-full h-full overflow-hidden object-cover rounded-full"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png"
                      alt="avatar"
                    /> */}
                  </div>
                  <h2 className="text-gray-800  text-xl tracking-normal font-medium mb-1">
                    {codechef?.user_details.name}
                  </h2>
                  <p className="flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                    {codechef?.user_details.username}
                  </p>
                  <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                    {codechef?.user_details.institution}
                  </p>
                  <div className="flex items-start">
                    <div className>
                      <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                        {codechef?.highest_rating}
                      </h2>
                      <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Highest Rank</p>
                    </div>
                    <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                      <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                        {codechef?.global_rank}
                      </h2>
                      <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Global Rank</p>
                    </div>
                    <div className>
                      <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                        {codechef?.country_rank}
                      </h2>
                      <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Country Rank</p>
                    </div>
                  </div>
                </div>

                {codechef?.contests.map((item) => {
                  return (
                    <div className="w-full lg:w-1/2 flex-col flex justify-center items-center px-12 py-8">
                      <h2 className="text-center text-1xl text-red-500 dark:text-gray-100 font-medium mt-2 mb-4 tracking-normal">
                        {item.name}
                      </h2>
                      <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                        {item.rating}
                      </h2>
                      <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                        Rating
                      </h2>
                      <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                        {item.global_rank}
                      </h2>
                      <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                        Global Rank
                      </h2>
                      <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                        {item.country_rank}
                      </h2>
                      <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                        Country rank
                      </h2>
                    </div>
                  );
                })}
              </div>
              {/* Card code block end */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Index;
