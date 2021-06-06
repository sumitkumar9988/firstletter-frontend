import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getAllUserEducation } from '../../redux/actions/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../extraPage/Alert';
// import Loader from './../components/Loader';
import PlusLogo from '../../Asset/plus.png';
import ReactGA from 'react-ga';

function IndexPage() {
  const dispatch = useDispatch();

  const educationList = useSelector((state) => state.userEducationList);
  const { error, educations } = educationList;

  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    dispatch(getAllUserEducation());
  }, [dispatch]);

  return (
    <div className="pb-1 text-center min-h-screen text-gray-700 bg-black bg-cover">
      {error && <Alert className="mt-2" message={error} type="error" />}
      {/* {loading && <Loader />} */}
      <div className="container relative max-w-2xl px-5 pt-12 mx-auto sm:py-12 lg:px-0">
        <h2 className="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
          Your <span className="inline-block text-pink-400">Educations</span>
        </h2>
      </div>
      <div className="my-12 ">
        <div className="max-w-xl px-4 mb-10 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div className="lg:grid  lg:grid-cols-2 lg:gap-10">
            {educations &&
              educations.map((item) => {
                return (
                  <Link to={'education/edit/' + item._id}>
                    <div className="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-gradient-to-r from-light-blue-400 to-cyan-300  rounded-lg shadow-2xl hover:scale-105">
                      <img className="h-56 rounded-t-lg  object-cover" alt="logo " src={item.instituteLogo} />
                      <div className="px-6 pt-8 mb-2 text-xl text-red-50 font-bold">
                        <span>{item.jobTitle}</span>
                      </div>
                      <div className="px-6  text-lg text-red-50 ">
                        <a href={item.website}>{item.institute}</a>
                      </div>
                      <div className="px-6  mb-2 text-lg text-red-50 ">
                        <a href={item.website}>{item.city}</a>
                      </div>
                      <div className="px-2 pt-2 text-blue-50">
                        <small>
                          Degree:- {item.degree} | Grade:- {item.grade}
                        </small>
                      </div>
                      <div className="px-2 pt-2 text-blue-50">
                        <small>
                          From:- {moment(item.startDate).format('DD-MM-YYYY')} |{' '}
                          {moment(item.endDate).format('DD-MM-YYYY')}
                        </small>
                        <div className="overflow-hidden h-20 ...">{item.basicinfo}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            <Link to="/home/education/new">
              <div className="flex mb-8 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-gradient-to-r from-light-blue-400 to-cyan-300  rounded-lg shadow-2xl hover:scale-105">
                <img className="h-96 rounded-t-lg  object-cover" alt="logo " src={PlusLogo} />
                <div className="px-12 mt-6  mb-2 text-xl text-red-50 font-bold">
                  <span>Add Your Education</span>
                </div>
              </div>
            </Link>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
