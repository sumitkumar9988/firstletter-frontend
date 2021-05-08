import React, { useState } from 'react';
const Index = ({
  id,
  title,
  userId,
  organization,
  organizationLogo,
  website,
  startDate,
  endDate,
  duration,
  responsibilities,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
          <div>
            <div className="flex justify-between py-4 px-6 md:py-6">
              <div className="sm:flex items-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-100">
                  <img src={organizationLogo} alt="logo" />
                </div>
                <div className="sm:ml-5 ml-3">
                  <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">{organization}</p>
                  <div className="flex items-center mt-1">
                    <svg
                      className="w-3 md:w-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 30"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 9C10.7595 9 9.75 10.0095 9.75 11.25C9.75 12.4905 10.7595 13.5 12 13.5C13.2405 13.5 14.25 12.4905 14.25 11.25C14.25 10.0095 13.2405 9 12 9ZM12 16.5C9.105 16.5 6.75 14.145 6.75 11.25C6.75 8.355 9.105 6 12 6C14.895 6 17.25 8.355 17.25 11.25C17.25 14.145 14.895 16.5 12 16.5ZM12 0C5.3835 0 0 5.331 0 11.8845C0 20.0955 10.5735 29.253 11.0235 29.6385C11.3055 29.88 11.652 30 12 30C12.348 30 12.6945 29.88 12.9765 29.6385C13.4265 29.253 24 20.0955 24 11.8845C24 5.331 18.6165 0 12 0Z"
                        fill="#6B7280"
                      />
                    </svg>
                    <p className="sm:text-base text-sm text-gray-500 dark:text-gray-400 ml-2">location</p>
                  </div>
                </div>
              </div>
              <div onClick={() => setShow(!show)}>
                <svg
                  className="mt-4 cursor-pointer w-4 md:w-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 46 11"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35.5 5.5C35.5 8.26 37.74 10.5 40.5 10.5C43.26 10.5 45.5 8.26 45.5 5.5C45.5 2.74 43.26 0.5 40.5 0.5C37.74 0.5 35.5 2.74 35.5 5.5ZM28 5.5C28 2.74 25.76 0.5 23 0.5C20.24 0.5 18 2.74 18 5.5C18 8.26 20.24 10.5 23 10.5C25.76 10.5 28 8.26 28 5.5ZM5.5 0.5C8.26 0.5 10.5 2.74 10.5 5.5C10.5 8.26 8.26 10.5 5.5 10.5C2.74 10.5 0.5 8.26 0.5 5.5C0.5 2.74 2.74 0.5 5.5 0.5Z"
                    fill="#6B7280"
                  />
                </svg>
                {show && (
                  <ul className="visible transition duration-300 opacity-100 bg-gray-200 dark:bg-gray-800 shadow rounded py-1 w-48 absolute">
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
                      Edit
                    </li>
                    <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
                      Delete
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <p className="text-base md:text-lg px-6 font-bold text-gray-800 dark:text-gray-100 ">{title}</p>
            <p className="text-sm md:text-base px-6 leading-5 text-gray-500 dark:text-gray-400 mt-2 md:mt-3">
              {responsibilities}
            </p>
          </div>
          <div className="p-6 mt-4 border-t-2 border-gray-200 dark:border-gray-800">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 36 36" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.2 19.8H18C17.0064 19.8 16.2 18.9954 16.2 18V10.8C16.2 9.8046 17.0064 9 18 9C18.9936 9 19.8 9.8046 19.8 10.8V16.2H25.2C26.1954 16.2 27 17.0046 27 18C27 18.9954 26.1954 19.8 25.2 19.8ZM18 0C8.0748 0 0 8.0748 0 18C0 27.9252 8.0748 36 18 36C27.9252 36 36 27.9252 36 18C36 8.0748 27.9252 0 18 0Z"
                    fill="#6B7280"
                  />
                </svg>
                <p className="text-base md:text-lg leading-4 text-gray-500 ml-4 dark:text-gray-400">Full Time</p>
              </div>
              <div className="flex items-center mt-4 sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 40 36" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9998 19C18.3458 19 16.9998 20.346 16.9998 22C16.9998 23.654 18.3458 25 19.9998 25C21.6538 25 22.9998 23.654 22.9998 22C22.9998 20.346 21.6538 19 19.9998 19ZM19.9999 29C16.1399 29 12.9999 25.86 12.9999 22C12.9999 18.14 16.1399 15 19.9999 15C23.8599 15 26.9999 18.14 26.9999 22C26.9999 25.86 23.8599 29 19.9999 29ZM15.9996 5.00001C15.9996 4.44801 16.4496 4.00001 16.9996 4.00001H22.9996C23.5496 4.00001 23.9996 4.44801 23.9996 5.00001V8.00001H15.9996V5.00001ZM34 8H28V5C28 2.244 25.758 0 23 0H17C14.242 0 12 2.244 12 5V8H6C2.692 8 0 10.692 0 14V30C0 33.308 2.692 36 6 36H34C37.308 36 40 33.308 40 30V14C40 10.692 37.308 8 34 8Z"
                    fill="#6B7280"
                  />
                </svg>
                <p className="text-base md:text-lg leading-4 text-gray-500 ml-4 dark:text-gray-400">
                  2 years experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
