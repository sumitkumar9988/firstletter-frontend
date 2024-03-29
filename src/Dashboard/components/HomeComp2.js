import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function IndexPage() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <div className="mx-auto container mt-0 lg:my-16 my-5 px-4 lg:px-0">
        <div className="lg:flex items-center justify-center mt-4 lg:mt-32">
          {/* <div className="lg:w-1/2 h-1/3">
            <img
              src="https://res.cloudinary.com/sumit9988/image/upload/v1624192057/homes_bdfnam.jpg"
              alt="intro screen"
              className="w-full h-full"
            />
          </div> */}
          <div className="mt-4  lg:mt-0 py-12 px-4 lg:px-8 bg-white lg:w-2/5 lg:-ml-12  f-f-l">
            <div className="md:w-80 rounded  p-2  bg-white">
              <h1 className="text-lg font-bold leading-none  dark:text-gray-100 text-gray-800 ">
                Your website is ready
              </h1>
              <p className="text-sm leading-5 pt-2   dark:text-gray-100 text-gray-600">
                Share the link with people you want to give access to{' '}
              </p>
              <p className=" text-xs font-semibold py-4 leading-4 text-indigo-700 uppercase">Your link</p>
              <div className>
                <div className="flex items-center h-full justify-between text-sm font-semibold leading-6 bg-gray-100  rounded h-12 w-full">
                  <div>
                    <p className="pl-2 text-base font-medium leading-tight  dark:text-gray-100 text-gray-800">
                      {`https://${userInfo.data.user.username}.firstletter.tech/`}
                    </p>
                  </div>
                  <CopyToClipboard text={`https://${userInfo.data.user.username}.firstletter.tech/`}>
                    <div className="bg-indigo-700 p-3.5 rounded-r cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path
                          d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
                          stroke="white"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.16675 12.5H3.33341C2.89139 12.5 2.46746 12.3244 2.1549 12.0119C1.84234 11.6993 1.66675 11.2754 1.66675 10.8334V3.33335C1.66675 2.89133 1.84234 2.4674 2.1549 2.15484C2.46746 1.84228 2.89139 1.66669 3.33341 1.66669H10.8334C11.2754 1.66669 11.6994 1.84228 12.0119 2.15484C12.3245 2.4674 12.5001 2.89133 12.5001 3.33335V4.16669"
                          stroke="white"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
