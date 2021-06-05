import React, { useEffect } from 'react';
import { getAllUserExperience } from '../../redux/actions/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';
import PlusLogo from '../../Asset/plus.png';
import { Link } from 'react-router-dom';
import openInNewTab from './../utils/OpenInNewTab';
import moment from 'moment';
// import Loader from '../components/Loader'
import Alert from './../components/Error';
function IndexPage() {
  const dispatch = useDispatch();

  const experienceList = useSelector((state) => state.userAllExplist);
  const {
    // loading,
    error,
    experiences,
  } = experienceList;

  useEffect(() => {
    dispatch(getAllUserExperience());
  }, [dispatch]);

  return (
    <div className="pb-1 text-center text-gray-700 min-h-screen bg-black bg-cover">
      {error && <Alert className="mt-2" message={error} type="error" />}
      {/* {loading && <Loader/>} */}
      <div className="container relative max-w-2xl px-5 pt-12 mx-auto sm:py-12 lg:px-0">
        <h2 className="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
          Work <span className="inline-block text-pink-400">Experience</span>
        </h2>
      </div>
      <div className="my-12 ">
        <div className="max-w-xl px-4 mb-10 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div className="lg:grid  lg:grid-cols-2 lg:gap-10">
            {/* starting  */}
            {experiences &&
              experiences.map((item) => {
                return (
                  <Link to={'experience/edit/' + item._id}>
                    <div className="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-gradient-to-r from-blue-500 to-blue-600  rounded-lg shadow-2xl hover:scale-105">
                      <img className="h-56 rounded-t-lg  object-cover" alt="logo " src={item.organizationLogo} />
                      <div className="px-6 pt-8 mb-2 text-xl text-red-50 font-bold">
                        <span>{item.jobTitle}</span>
                      </div>
                      <div className="px-6  mb-2 text-lg text-red-50 ">
                        <a target="_blank" href={'//' + item.website} rel="noopener noreferrer">
                          {item.organization}
                        </a>
                      </div>
                      <div className="px-6 pt-2 text-blue-50">
                        <small>
                          From:- {moment(item.startDate).format('DD-MM-YYYY')} |{' '}
                          {moment(item.endDate).format('DD-MM-YYYY')} For:- {item.duration}
                        </small>
                        <div className="overflow-hidden h-40 ...">{item.responsibilities}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            <Link to="/home/experience/new">
              <div className="flex mb-16 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-gradient-to-r from-blue-500 to-blue-600  rounded-lg shadow-2xl hover:scale-105">
                <img className="h-5/6 rounded-t-lg  object-cover" alt="logo " src={PlusLogo} />
                <div className="px-6  pb-8 text-xl text-red-50 font-bold">
                  <span>Add Your Recents Experience</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
