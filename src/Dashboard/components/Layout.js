import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from './../../Asset/Image/blue_logo.svg';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import userPng from '../../Asset/user.png'
export default function IndexPage({ children }) {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      dispatch(logout());
    }
  }, [dispatch,userInfo]);

  const logoutHandler = () => {
    console.log('logout');
    dispatch(logout());
  };

  return (
    <>
      {' '}
      <div className="">
        <div className="w-full h-full bg-black ">
          <div className="flex   flex-no-wrap ">
            <div className="  w-64 absolute lg:relative bg-gray-900 shadow min-h-screen flex-col justify-between hidden lg:flex pb-12">
              <div className="px-8">
                <div className="h-20 w-full flex items-center ">
                  <Logo />
                </div>
                <ul className="mt-12 fixed">
                  <Link to="/home">
                    <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="text-base">Dashboard</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/home/education">
                    <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="text-base">Education</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/home/experience">
                    <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="text-base">Experience</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/home/certificate">
                    <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="text-base">Certificate</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/home/projects">
                    <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="text-base">Projects</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/home/programming">
                    <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="text-base">Compitative Programming</span>
                      </div>
                    </li>
                  </Link>
                  <Link to="/home/jobs">
                    <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                      <div className="flex items-center">
                        <span className="text-base">Jobs</span>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            {/*Mobile responsive sidebar*/}
            <div
              className={
                show
                  ? 'w-full h-full fixed z-40 transform translate-x-0 '
                  : ' w-full h-full fixed z-40 transform -translate-x-full '
              }
            >
              <div className=" w-full h-full  absolute" onClick={() => setShow(!show)}></div>
              <div className="w-64 md:w-96  absolute z-40 bg-gray-900 shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
                <div className="flex flex-col justify-between h-full ">
                  <div className="">
                    <div className="flex items-center justify-between px-8">
                      <div className="h-16 w-full flex items-center">
                        <Logo />
                      </div>
                      <div
                        id="closeSideBar"
                        className="flex  items-center justify-center h-10 w-10"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                    <div className="px-8 ">
                      <ul className="mt-12">
                        <Link to="/home">
                          <li className="flex w-full justify-between text-indigo-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                              <span className="xl:text-base md:text-2xl text-base ml-2">Dashboard</span>
                            </div>
                          </li>
                        </Link>
                        <Link to="/home/education">
                          <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                              <span className="xl:text-base md:text-2xl text-base ml-2">Education</span>
                            </div>
                          </li>
                        </Link>
                        <Link to="/home/experience">
                          <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                              <span className="xl:text-base md:text-2xl text-base ml-2">Experience</span>
                            </div>
                          </li>
                        </Link>
                        <Link to="/home/projects">
                          <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                              <span className="xl:text-base md:text-2xl text-base ml-2">Projects</span>
                            </div>
                          </li>
                        </Link>
                        <Link to="/home/certificate">
                          <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                              <span className="xl:text-base md:text-2xl text-base ml-2">Certificate</span>
                            </div>
                          </li>
                        </Link>
                        <Link to="/home/programming">
                          <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                              <span className="xl:text-base md:text-2xl text-base ml-2">Compitative Programming</span>
                            </div>
                          </li>
                        </Link>
                        <Link to="/home/jobs">
                          <li className="flex w-full justify-between text-white hover:text-indigo-500 cursor-pointer items-center mb-6">
                            <div className="flex items-center">
                              <span className="xl:text-base md:text-2xl text-base ml-2">Jobs</span>
                            </div>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full  ">
                    <div className="border-t border-gray-300">
                      <div className="w-full flex items-center justify-between px-6 pt-1">
                        <Link to="/home/me">
                          <div className="flex items-center">
                            <img
                              alt="profile-pic"
                              src={userPng}
                              className="w-8 h-8 rounded-md"
                            />
                            <p className="md:text-xl text-gray-50 text-base leading-4 ml-2">
                              {userInfo ? userInfo.data.user.name : null}
                            </p>
                          </div>
                        </Link>
                        <ul className="flex ">
                          <li className="cursor-pointer text-white pt-5 pb-3 pl-3" onClick={logoutHandler}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-logout"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="#718096"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                              <path d="M7 12h14l-3 -3m0 6l3 -3" />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Mobile responsive sidebar*/}
            {/* Sidebar ends */}
            <div className="w-full ">
              {/* Navigation starts */}
              <nav className="h-16 flex  items-center lg:items-stretch justify-end lg:justify-between bg-gray-900 shadow z-50 relative ">
                <div className="hidden lg:flex w-full pr-6 ">
                  <div className="w-1/2  h-full hidden lg:flex items-center pl-6 pr-24"></div>
                  <div className=" w-1/2 hidden lg:flex">
                    <div className="w-full flex items-center pl-8 justify-end">
                      <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                        <div className="rounded-full">
                          {profile ? (
                            <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                              <li className="flex w-full justify-between text-black hover:text-indigo-500 cursor-pointer items-center">
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-user"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={7} r={4} />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                  </svg>
                                  <Link to="/home/me">
                                    <span className="text-base ml-1">My Profile</span>
                                  </Link>
                                </div>
                              </li>
                              <li className="flex w-full justify-between text-black hover:text-indigo-500 cursor-pointer items-center mt-2">
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-logout"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                  </svg>
                                  <span onClick={logoutHandler} className="text-base ml-2">
                                    Sign out
                                  </span>
                                </div>
                              </li>
                            </ul>
                          ) : (
                            ''
                          )}
                          <div className="relative">
                            <img
                              className="rounded-full h-10 w-10 object-cover"
                              src={userPng}
                              alt="avatar"
                            />
                            <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                          </div>
                        </div>

                        <p className="text-gray-50 text-base mx-3">{userInfo ? userInfo.data.user.name : null}</p>
                        <div className="cursor-pointer text-gray-50">
                          <svg
                            aria-haspopup="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white mr-8 visible lg:hidden relative" onClick={() => setShow(!show)} id="menu">
                  {show ? (
                    ''
                  ) : (
                    <svg
                      aria-label="Main Menu"
                      aria-haspopup="true"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu cursor-pointer"
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  )}
                </div>
              </nav>
              <div className="container mx-auto  md:w-4/5 w-11/12 ">
                <div className="w-full h-full bg-black  rounded  ">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  );
}
