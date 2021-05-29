import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userProfile } from './../../redux/actions/authActions';
import Loader from './../components/Loader';
import Alert from '../../extraPage/Alert';
import Toggle from './../components/ToggleButton';
import image from './../../Asset/icon.png';

function IndexPage({ history }) {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.getUserDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  if (!user) {
    return null;
  } else {
    if (!user.gitHubAccount) {
      console.log('TTT');
      return (
        <div className="bg-black min-h-screen">
          <div className="bg-black min-h-screen">
            <div className="container relative max-w-2xl px-5 pt-12 mx-auto sm:py-12 lg:px-0">
              <h2 className="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
                Your <span className="inline-block text-pink-400">Project</span>
              </h2>
            </div>
            //
            <div className=" text-center  w-1/3 m-auto">
              <a
                aria-label="Continue with github"
                role="button"
                href="https://github.com/login/oauth/authorize?client_id=111bd0d934cf6a744198"
                className=" bg-white  focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-50 py-3.5 px-4 border rounded-lg border-gray-400 flex items-center w-full mt-4"
              >
                <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z"
                    fill="#333333"
                  />
                </svg>
                <p className="text-base  font-medium ml-4 text-gray-900">Continue with Github</p>
              </a>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="bg-black min-h-screen">
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert message={error} type="error" />
      ) : (
        <div>
          <div className="container relative max-w-2xl px-5 pt-4 mx-auto sm:py-12 lg:px-0">
            <h2 className="mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
              Your <span className="inline-block text-pink-400">Project</span>
            </h2>
          </div>
          <div className="my-6 lg:my-12 container px-6 mx-auto flex  md:flex-row items-start md:items-center justify-between pb-2 border-b border-gray-300">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-gray-50 ">Choose Your Project</h4>
            </div>
            <div className=" md:mt-0">
              {/* <Link to="/home/projects/github"> */}
              <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                Refresh Projects
              </button>
              {/* </Link> */}
            </div>
          </div>
          {/* ending of top bar */}

          <div className="my-12 ">
            <div className="max-w-xl px-4 mb-10 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div className="lg:grid  lg:grid-cols-2 lg:gap-10">
                {/* starting  */}
                {/* {experiences &&
              experiences.map((item) => {
                return ( */}
                {/* <Link to={'experience/edit/' + item._id}> */}
                <div className="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-gradient-to-r from-pink-500 to-red-500   rounded-lg shadow-2xl hover:scale-105">
                  <img className="h-56 rounded-t-lg  object-cover" alt="logo " src={image} />
                  <div className="">
                    <Toggle checked={false} />
                  </div>
                  <div className="px-6 pt-8 mb-2 text-xl text-red-50 font-bold">
                    <span>item.jobTitle</span>
                  </div>
                  <div className="px-6  mb-2 text-lg text-red-50 ">
                    <a target="_blank" rel="noopener noreferrer">
                      item.organization
                    </a>
                  </div>
                  <div className="px-6 pt-2 text-blue-50">
                    {/* <small>
                      From:- {moment(item.startDate).format('DD-MM-YYYY')} | {moment(item.endDate).format('DD-MM-YYYY')}{' '}
                      For:- {item.duration}
                    </small> */}
                    <div className="overflow-hidden h-40 ...">item.responsibilities</div>
                  </div>
                </div>
                {/* </Link> */}
                {/* );
              })} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IndexPage;

// href={'//' + item.website}
