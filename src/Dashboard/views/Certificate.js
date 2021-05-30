import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllUserCertificate, deleteCertificate } from '../../redux/actions/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../components/Error';
import Loader from './../components/Loader';

function IndexPage() {
  const dispatch = useDispatch();

  const certificateList = useSelector((state) => state.userAllCertificateList);
  const {
    // loading,
    error,
    certificates,
  } = certificateList;

  const delCertificate = useSelector((state) => state.delCertificate);
  const { loading: deleteCertificateLoading, error: certificateDeleteError, success } = delCertificate;

  console.log(deleteCertificateLoading);
  console.log(certificateDeleteError);
  console.log(success);

  console.log(certificates);
  useEffect(() => {
    dispatch(getAllUserCertificate());
    if (success) {
      dispatch(getAllUserCertificate());
    }
  }, [dispatch, success]);

  const deleteThis = (parameter) => (event) => {
    event.preventDefault();
    dispatch(deleteCertificate(parameter));
  };

  return (
    <div className="mx-auto container relative min-h-screen bg-black">
      {error && <Alert message={error} type="error" />}
      {certificateDeleteError && <Alert message={certificateDeleteError} type="error" />}
      {deleteCertificateLoading && <Loader />}
      <div className="my-6 lg:my-12 container px-6 mx-auto flex  md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight text-gray-50 ">certificate</h4>
        </div>
        <div className=" md:mt-0">
          <Link to="/home/certificate/new">
            <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Add New
            </button>
          </Link>
        </div>
      </div>

      {certificates &&
        certificates.map((item) => {
          return (
            <div className="min-h-screen bg-black">
              <div className="flex items-center mt-32 justify-center relative">
                <img loading="lazy" src={item.image} alt="cert" className="relative" />
              </div>
              <h2 className="text-green-400 font-semibold text-center mt-4 tracking-wide uppercase text-2xl ">
                {item.name}
              </h2>
              <h2 className="text-red-300 text-center mt-2  text-xs font-thin"> {item.Organization}</h2>

              <div className="pt-6 ">
                <div className="flex justify-between w-full items-center text-gray-600 text-sm">
                  <div className="flex items-center">
                    <button className="w-12 h-12 bg-indigo-700 rounded-full   flex items-center justify-center  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-center justify-center">
                      <a href={item.url}>
                        <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.4375 5L16.5833 12L9.4375 19"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </button>
                    <a
                      aria-hidden="true"
                      href={item.url}
                      className="text-base ml-4 font-semibold leading-none text-gray-50"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="flex items-center pl-2 ">
                    <button
                      onClick={deleteThis(item._id)}
                      class="text-white focus:outline-none bg-gradient-to-r from-red-500 to-pink-500 rounded-md py-2 px-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default IndexPage;
