import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ProfileIllustation } from './../../Asset/Profile.svg';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div className="min-h-screen  bg-black">
      <div className="absolute mx-auto bg-cover pt-12 right-0 transform mr-12 z-0 opacity-40">
        <ProfileIllustation />
      </div>
      <div className="container relative max-w-2xl px-5 pt-12 mx-auto sm:py-12 lg:px-0">
        <h2 className="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
          Update <span className="inline-block text-pink-400">Profile</span>
        </h2>
      </div>
      <div class=" overflow-hidden  h-full p-auto ">
        <div class="flex flex-col items-center justify-center w-full h-full mt-8 text-center">
          <Link to="/home/programming/codechef">
            <p class="inline-block px-4 py-2 mx-2 text-2xl text-left font-semibold text-pink-500 hover:text-indigo-200">
              Basic
            </p>
          </Link>
          <Link to="/home/programming/spoj">
            <p class="inline-block  px-4 py-2 mx-2 text-2xl text-left font-semibold text-pink-500 hover:text-indigo-200 ">
              Social Link
            </p>
          </Link>
          <Link to="/home/programming/codeforces">
            <p class="inline-block  px-4 py-2 mx-2 text-2xl text-left font-semibold text-pink-500 hover:text-indigo-200 ">
              Change Password
            </p>
          </Link>

          <a
            href={`https://${userInfo.data.user.username}.firstletter.tech/`}
            class="inline-block  px-4 py-2 mx-2 text-2xl text-left font-semibold text-pink-500 hover:text-indigo-200 "
          >
            Your site
          </a>

          <p class="inline-block pt-20  px-4 py-2 mx-2 text-1xl text-left font-semibold text-pink-500 hover:text-indigo-200 ">
            Contact Me if You face any problem
          </p>
          <p class="inline-block   px-4 py-2 mx-2 text-1xl text-left font-semibold text-pink-500 hover:text-indigo-200 ">
            sumit.firstletter@gmail.com
          </p>
          <p class="inline-block   px-4  mx-2 text-1xl text-left font-semibold text-pink-500 hover:text-indigo-200 ">
            +91 8968033002
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
