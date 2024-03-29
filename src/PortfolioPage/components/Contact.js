import React, { useState } from 'react';
import { homeURL } from './../../utils/url';
import axios from 'axios';

export const Contact = ({ user }) => {
  const [from, setFrom] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      from,
      name,
      message,
      to: user.email,
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
    <div id="contact">
      <section className="py-12 px-4">
        <h2 className="text-4xl mb-10 text-white text-center font-semibold font-heading">Contact me</h2>
        <div className="w-full max-w-2xl mx-auto mb-8">
          <form onSubmit={onSubmit}>
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div className="w-1/2 px-2">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="email"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                placeholder="Write something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className=" text-center">
          <p className="text-white mb-2">Or just email us on</p>
          <p className="text-indigo-600 text-2xl hover:underline" href="#">
            {user?.email}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
