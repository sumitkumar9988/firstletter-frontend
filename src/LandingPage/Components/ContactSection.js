import React, { useState } from 'react';
import axios from 'axios';
import { homeURL } from './../../utils/url';

function Index() {
  const [from, setFrom] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  // const [to, setTo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      from,
      name,
      message,
      to: 'sumit.firstletter@gmail.com',
    };
    axios
      .post(`${homeURL}/sendEmail`, data)
      .then((res) => {
        setMessage('');
        setName('');
        setFrom('');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mx-auto pt-16">
      <div className="lg:flex">
        <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
            <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
              Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to
              say Hi? Just contact us. We are here to asset you.
            </p>
            <div className="flex pb-4 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone-call"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </div>
              <p className="pl-4 text-white text-base">+91 8968033002</p>
            </div>
            <div className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <p className="pl-4 text-white text-base">sumit.firstletter@gmail.com</p>
            </div>

            {/* <a href="javascript:void(0)">
              <p className="text-white pt-16 font-bold tracking-wide underline">View Job Openings</p>
            </a> */}
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 bg-black h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form id="contact" className="bg-black py-4 px-8 rounded-tr rounded-br">
            <h1 className="text-4xl text-gray-50 font-extrabold mb-6">Enter Details</h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="text-gray-50 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="focus:outline-none focus:border  focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm  rounded "
                    placeholder
                  />
                </div>
              </div>
              <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-50 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    required
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    type="email"
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-50 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  placeholder
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                  rows={8}
                />
              </div>
              <button
                type="submit"
                onClick={onSubmit}
                className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
