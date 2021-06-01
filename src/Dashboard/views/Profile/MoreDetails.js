import React, { useRef } from 'react';
const Index = () => {
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="container mx-auto shadow bg-white dark:bg-gray-800 rounded">
          <div className="w-11/12 mx-auto">
            <div className="xl:w-9/12 mx-auto xl:mx-0">
              <div className="bg-center bg-cover bg-no-repeat rounded relative mt-8 h-48">
                <div className="w-40 h-40 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow">
                  <img
                    src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                    alt
                    className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow"
                  />
                  <div className="bg-red-400 dark:bg-gray-800 h-6 w-6 rounded-full flex items-center justify-center right-0 absolute cursor-pointer text-gray-600 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Mobile number
                </label>
                <input
                  type="text"
                  id="email"
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Location
                </label>
                <input
                  type="text"
                  id="email"
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent dark:text-gray-100"
                />
              </div>
              <div className="mt-4 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  Gender
                </label>
                <select
                  type="text"
                  name="city"
                  required
                  id="City"
                  className="bg-white  border border-gray-300 z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded"
                >
                  <option value="Switzerland">Switzerland</option>
                  <option value="America">America</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>

              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-3/5 w-full">
                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  About
                </label>
                <textarea
                  id="about"
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent resize-none text-gray-800 dark:text-gray-100"
                  rows={5}
                />
                <p className="w-full text-right text-xs text-gray-500 pt-1">Character Limit: 200</p>
              </div>
            </div>

            {/* add new item */}
          </div>

          <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
            <button
              className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      ;
    </div>
  );
};
export default Index;
