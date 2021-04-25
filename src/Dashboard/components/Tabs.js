import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
const Index = ({ history, item = 1 }) => {
  const [activeStatus, setActiveStatus] = useState(item);
  const [dropItem, setDropItem] = useState('');
  //   useEffect(() => {
  //     console.log(`/ach/${dropItem}`);
  //     history.push(`/home/ach/${dropItem}`);
  //   }, [dropItem]);
  return (
    <div>
      <div className="sm:hidden relative w-11/12 mx-auto rounded">
        <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-selector"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#A0AEC0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="8 9 12 5 16 9" />
            <polyline points="16 15 12 19 8 15" />
          </svg>
        </div>
        <select
          aria-label="Selected tab"
          onChange={(e) => history.push(e.target.value)}
          className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
        >
          <option selected value="education" className="text-sm text-gray-600">
            Education{' '}
          </option>
          <option value="experience" className="text-sm text-gray-600">
            Experience{' '}
          </option>
          <option value="certificate" className="text-sm text-gray-600">
            Certificate
          </option>
        </select>
      </div>
      <div className="justify-between flex-wrap hidden sm:block">
        <div className="xl:w-full xl:mx-0 border-b border-gray-300 rounded pl-5 pr-5 h-12">
          <ul className="flex xl:w-8/12 mx-auto items-center xl:justify-between">
            <Link to="/home/ach/education">
              <li
                onClick={() => setActiveStatus(1)}
                className={
                  activeStatus == 1
                    ? 'text-sm py-2 px-4 bg-indigo-100 text-indigo-700 mr-8 font-normal rounded'
                    : 'text-sm text-gray-600 py-3 mr-8 font-normal cursor-pointer hover:text-gray-700'
                }
              >
                Education
              </li>
            </Link>
            <Link to="/home/ach/experience">
              <li
                onClick={() => setActiveStatus(2)}
                className={
                  activeStatus == 2
                    ? 'text-sm py-2 px-4 bg-indigo-100 text-indigo-700 mr-8 font-normal rounded'
                    : 'text-sm text-gray-600 py-3 mr-8 font-normal cursor-pointer hover:text-gray-700'
                }
              >
                Work Experience
              </li>
            </Link>
            <Link to="/home/ach/certificate">
              <li
                onClick={() => setActiveStatus(3)}
                className={
                  activeStatus == 3
                    ? 'text-sm py-2 px-4 bg-indigo-100 text-indigo-700 mr-8 font-normal rounded'
                    : 'text-sm text-gray-600 py-3 mr-8 font-normal cursor-pointer hover:text-gray-700'
                }
              >
                Certificate
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Index;
