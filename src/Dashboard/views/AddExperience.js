import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormData from 'form-data';
import Loader from './../components/Loader';
import Alert from '../../extraPage/Alert';
import { addNewExperience } from './../../redux/actions/dashboardActions';
import ReactGA from 'react-ga';
import 'react-datepicker/dist/react-datepicker.css';

const Index = () => {
  const [jobTitle, setJob] = useState('');
  const [image, setImage] = useState(null);
  const [organization, setOrganization] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [duration, setDuration] = useState(0);
  const [website, setWebsite] = useState();

  const dispatch = useDispatch();

  const addExperience = useSelector((state) => state.postExperience);
  const { loading, error, success } = addExperience;

  const onChangePicture = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: 'User',
      action: 'New Experience Add',
    });
    let data = new FormData();
    data.append('jobTitle', jobTitle);
    data.append('responsibilities', responsibilities);
    data.append('organization', organization);
    data.append('startDate', moment(startDate).format('YYYY-MM-DD'));
    data.append('endDate', moment(endDate).format('YYYY-MM-DD'));
    data.append('website', website);

    if (image !== null) {
      data.append('image', image);
    }
    dispatch(addNewExperience(data));
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div>
        {error && <Alert message={error} type="error" />}
        {success && <Alert message={success} type="success" />}
        {loading && <Loader />}

        <form className="container mx-auto bg-black shadow rounded">
          <div>
            <div className="xl:w-full border-b border-white  py-5">
              <div className="flex items-center w-11/12 mx-auto">
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-light-blue-400 to-blue-500 font-bold">
                  Add Your Work Experience
                </p>
              </div>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="container mx-auto">
                <div className="my-8 mx-auto xl:w-full xl:mx-0">
                  <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                    <div className="xl:w-full lg:w-full md:w-full flex flex-col mb-6">
                      <label htmlFor="institute" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        * Your Job Position
                      </label>
                      <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJob(e.target.value)}
                        id="jobTitle"
                        className="  pl-3 py-3 bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        placeholder="Your Job Position"
                      />
                    </div>
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        required
                        id="organization"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="  pl-3 py-3 bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        Website of Your Company
                      </label>
                      <input
                        type="text"
                        name="website"
                        required
                        id="grade"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="  pl-3 py-3 bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        placeholder="Website of Company"
                      />
                    </div>

                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        Starting Date:-
                      </label>
                      <DatePicker
                        className="pl-3 py-3 px-20  bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        selected={startDate}
                        placeholder="Enter date"
                        dateFormat="MM/yyyy"
                        onChange={(date) => setStartDate(date)}
                        showMonthYearPicker
                        withPortal
                      />
                    </div>

                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        till When You continued :-
                      </label>
                      <DatePicker
                        className="pl-3 py-3 px-20  bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        selected={startDate}
                        placeholder="Enter date"
                        dateFormat="MM/yyyy"
                        onChange={(date) => setEndDate(date)}
                        showMonthYearPicker
                        withPortal
                      />
                    </div>
                    <div className="xl:w-full lg:w-full md:w-full flex flex-col mb-6">
                      <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        What are Your Responsibility
                      </label>
                      <textarea
                        type="text"
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                        className="  pl-3 py-12 bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        placeholder="Your Top Responsibility in Your Company"
                      />
                    </div>

                    <div className="xl:w-full  lg:w-full md:w-full flex flex-col mb-6">
                      <div className="flex bg-gray-700 flex-col items-center justify-center w-full mb-8   rounded-lg py-8">
                        <div className="cursor-pointer mb-5 text-indigo-700 dark:text-indigo-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-cloud-upload"
                            width={60}
                            height={60}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                            <polyline points="9 15 12 12 15 15" />
                            <line x1={12} y1={12} x2={12} y2={21} />
                          </svg>
                        </div>
                        <p className="text-base font-normal tracking-normal text-gray-50 dark:text-gray-100 text-center">
                          Drag and drop here Company Logo
                        </p>
                        <p className="text-base font-normal tracking-normal text-gray-50 dark:text-gray-100 text-center my-1">
                          or
                        </p>
                        <label
                          htmlFor="image"
                          className="cursor-pointer text-base font-normal tracking-normal text-indigo-500 dark:text-indigo-600 text-center"
                        >
                          {' '}
                          browse{' '}
                        </label>
                        <input type="file" className="hidden" id="image" onChange={onChangePicture} accept="image/*" />
                        <div className="flex justify-between items-center pt-1 text-green-400">
                          <p className="text-xs">{image && image.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-4 sm:px-12 px-4 bg-gradient-to-l from-gray-700 via-gray-900 to-black mt-6 flex justify-end rounded-bl rounded-br">
              <Link to="/home/experience">
                <button className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded bg-gray-50 hover:bg-gray-200 transition duration-150 ease-in-out">
                  Cancel
                </button>
              </Link>
              <button
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                type="submit"
                onClick={submitHandler}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      ;
    </div>
  );
};
export default Index;
