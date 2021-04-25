import React from 'react';
import Tabs from './../components/Tabs';
import Card from './../components/CertificateCard';
const Certificate = ({ history }) => {
  return (
    <div className="pt-6 bg-gray-100">
      <Tabs item="3" history={history} />
      <div className="container mt-6 px-6 mx-auto flex flex-col md:flex-row items-center justify-between">
        <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">Certificate</h4>
        <div className="mt-6 md:mt-0">
          <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
            Add Certificate
          </button>
        </div>
      </div>
      <div className="mr-4 ml-4 mt-9 md:ml-12">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
          <div className="rounded ">
            <Card />
          </div>

          <div className="rounded ">
            <Card />
          </div>

          <div className="rounded ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
