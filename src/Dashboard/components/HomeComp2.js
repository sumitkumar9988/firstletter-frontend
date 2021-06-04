import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function IndexPage() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <div className="mx-auto container mt-0 lg:my-16 my-5 px-4 lg:px-0">
        <div className="lg:flex items-center justify-center mt-4 lg:mt-32">
          <div className="lg:w-1/2 h-1/3">
            <img
              src="https://res.cloudinary.com/sumit9988/image/upload/v1622393845/bermuda-356_flm8om.png"
              alt
              className="w-full h-full"
            />
          </div>
          <div className="mt-4  lg:mt-0 py-12 px-8 lg:px-12 bg-blue-500 lg:w-2/5 lg:-ml-12 text-white f-f-l">
            <div className="lg:text-4xl text-2xl font-normal leading-9 pb-6 f-f-d-s">
              Hey !👋 {userInfo.data.user.name}
            </div>

            <div className="pb-6 leading-6  text-base lg:text-base ">
              Your website is Ready share with your friend and peers and Don't forget to add Your Details
            </div>
            <a
              href={`https://${userInfo.data.user.username}.firstletter.tech/`}
              className="border-b border-white lg:text-2xl text-base leading-6 f-f-l font-bold"
            >
              Visit Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
