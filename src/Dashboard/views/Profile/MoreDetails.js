import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile, updateSocialProfileAction } from './../../../redux/actions/authActions';
import { Link } from 'react-router-dom';
import Alert from '../../../extraPage/Alert';
import Loader from './../../components/Loader';

const Index = () => {
  const [twitterAcount, settwitterAcount] = useState('');
  const [facebookAccount, setfacebookAccount] = useState('');
  const [linkedInAccount, setlinkedInAccount] = useState('');
  const [InstaAccount, setInstaAccount] = useState('');
  const [mediumAccount, setmediumAccount] = useState('');
  const [dribbleAccount, setdribbleAccount] = useState('');

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.getUserDetails);
  const { loading, error, user } = userDetails;

  const updateSocialProfile = useSelector((state) => state.updateSocialProfile);
  const { loading: updateLoading, error: updateError, success } = updateSocialProfile;

  useEffect(() => {
    dispatch(userProfile());
    if (user) {
      settwitterAcount(user.twitterAcount);
      setfacebookAccount(user.facebookAccount);
      setlinkedInAccount(user.linkedInAccount);
      setInstaAccount(user.InstaAccount);
      setmediumAccount(user.mediumAccount);
      setdribbleAccount(user.dribbleAccount);
    }
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      twitterAcount: twitterAcount,
      facebookAccount: facebookAccount,
      linkedInAccount: linkedInAccount,
      mediumAccount: mediumAccount,
      dribbleAccount: dribbleAccount,
      InstaAccount: InstaAccount,
    };
    console.log(data);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {loading && <Loader />}
      {updateLoading && <Loader />}
      {error && <Alert message={error} type="error" />}
      {updateError && <Alert message={updateError} type="error" />}
      {success && <Alert message={success} type="success" />}
      <form onSubmit={submitHandler}>
        <div className="container mx-auto shadow bg-white dark:bg-gray-800 rounded">
          <div className="w-11/12 mx-auto">
            <div className="xl:w-9/12 mx-auto xl:mx-0">
              <div className="bg-center bg-cover bg-no-repeat rounded relative mt-2 h-8"></div>
              <div className="mt-8 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Enter your twitter Profile Link
                </label>
                <input
                  type="text"
                  id="twitterAcount"
                  onChange={(e) => settwitterAcount(e.target.value)}
                  value={twitterAcount}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Enter your Facebook Profile Link
                </label>
                <input
                  type="text"
                  id="facebookAccount"
                  onChange={(e) => setfacebookAccount(e.target.value)}
                  value={facebookAccount}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Enter your Linkedin Profile Link
                </label>
                <input
                  type="text"
                  id="linkedInAccount"
                  onChange={(e) => setlinkedInAccount(e.target.value)}
                  value={linkedInAccount}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Enter your Instagram Profile Link
                </label>
                <input
                  type="text"
                  id="InstaAccount"
                  value={InstaAccount}
                  onChange={(e) => setInstaAccount(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Enter your Medium Profile Link
                </label>
                <input
                  type="text"
                  id="mediumAccount"
                  value={mediumAccount}
                  onChange={(e) => setmediumAccount(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>

              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Enter your dribbble Profile Link
                </label>
                <input
                  type="text"
                  id="dribbleAccount"
                  value={dribbleAccount}
                  onChange={(e) => setdribbleAccount(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
            </div>
          </div>

          <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
            <button
              className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
              type="submit"
            >
              Save
            </button>
          </div>
          <Link to="/home/projects/github">
            <p class="inline-block  px-4 py-2 mx-2 text-xs text-left font-semibold text-pink-500 hover:text-indigo-200 ">
              Change Github Username
            </p>
          </Link>
          <Link to="/home/me/link/cp">
            <p class="inline-block  px-4 py-2 mx-2 text-xs text-left font-semibold text-pink-500 hover:text-indigo-200 ">
              Change all Your Compitative Programming Link
            </p>
          </Link>
        </div>
      </form>
      )
    </div>
  );
};
export default Index;
