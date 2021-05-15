import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const Index = () => {
  const [institute, setinstitute] = useState('');
  const [image, setImage] = useState(null);
  const [basicinfo, setBasicinfo] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [grade, setGrade] = useState(null);

  const onChangePicture = (e) => {
    console.log('picture: ', image);
    setImage(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      institute: institute,
      image: image,
      basicinfo: basicinfo,
      degree: degree,
      startDate: moment(startDate).format('YYYY'),
      endDate: moment(endDate).format('YYYY'),
      grade: grade,
    };
    console.log('submit data', data);
  };

  return (
    <div>
      <div>
        <form className="container mx-auto bg-black shadow rounded">
          <div>
            <div className="xl:w-full border-b border-white  py-5">
              <div className="flex items-center w-11/12 mx-auto">
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-light-blue-400 to-blue-500 font-bold">
                  Update Your Education Details
                </p>
              </div>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="container mx-auto">
                <div className="my-8 mx-auto xl:w-full xl:mx-0">
                  <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                    <div className="xl:w-full lg:w-full md:w-full flex flex-col mb-6">
                      <label htmlFor="institute" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        *Name of institute
                      </label>
                      <input
                        type="text"
                        value={institute}
                        onChange={(e) => setinstitute(e.target.value)}
                        id="institute"
                        className="  pl-3 py-3 bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        placeholder="Name of your University"
                      />
                    </div>
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        Which Course You Enroll
                      </label>
                      <input
                        type="text"
                        name="degree"
                        required
                        id="degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        className="  pl-3 py-3 bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        placeholder="Like B.E "
                      />
                    </div>

                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        How much Grade you got Course
                      </label>
                      <input
                        type="text"
                        name="grade"
                        required
                        id="grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="  pl-3 py-3 bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        placeholder="Your Grade "
                      />
                    </div>

                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-50 dark:text-gray-100">
                        Course Starting :-
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
                        Course End:-
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
                        What You Learn
                      </label>
                      <textarea
                        type="text"
                        value={basicinfo}
                        onChange={(e) => setBasicinfo(e.target.value)}
                        className="  pl-3 py-12 bg-gray-700 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-50 dark:text-gray-100"
                        placeholder="Some Basic Details about course?"
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
                          Drag and drop here your University Logo
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
              <Link to="/home/education">
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
