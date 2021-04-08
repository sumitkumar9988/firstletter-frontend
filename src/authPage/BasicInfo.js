import React from 'react';
import { Link } from 'react-router-dom';

const BasicInfo = () => {
  return (
    <div className="bg-black">
      <div className="border-gray-00 min-h-screen pt-2 bg-black">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <form className="mt-6   pt-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="personal w-full  border-gray-400 pt-4">
                  <h2 className="text-2xl text-gray-50">Personal info:</h2>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                        first name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        type="text"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                        last name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                      user name
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                      Bio
                    </label>
                    <textarea
                      className="bg-white rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium  focus:outline-none "
                      required
                    ></textarea>
                  </div>

                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                      Choose Your Profession
                    </label>
                    <div className="flex-shrink w-full inline-block relative">
                      <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>Other</option>
                      </select>
                      <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center  w-full mx-auto sm:max-w-lg">
                    <div className="flex flex-col items-center justify-center  w-full h-auto  bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
                      <div className="mt-10 mb-10 text-center">
                        <h2 className="text-2xl font-semibold mb-2">
                          Upload your Resume from LinkedIn
                        </h2>
                        <p className="text-xs text-gray-500">
                          File should be of format .mp4, .avi, .mov or .mkv
                        </p>
                      </div>
                      <form
                        action="#"
                        className="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner"
                      >
                        <input type="file" id="file-upload" className="hidden" />
                        <label
                          for="file-upload"
                          className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                        >
                          <p className="z-10 text-xs font-light text-center text-gray-500">
                            Drag & Drop your files here
                          </p>
                          <svg
                            className="z-10 w-8 h-8 text-indigo-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                          </svg>
                        </label>
                      </form>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 "
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
