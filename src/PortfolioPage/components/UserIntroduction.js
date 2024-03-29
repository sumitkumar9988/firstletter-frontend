import React from 'react';
const UserIntroduction = ({ user, btittle }) => {
  return (
    <div>
      <div>
        <section className="w-full px-6 mb-12 antialiased bg-black select-none">
          <div className="mx-auto max-w-7xl">
            <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-left text-gray-50 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                <span className="inline md:block">Hi 👋 I am </span>
                <p className="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
                  {' '}
                  {user?.name}
                </p>
              </h1>
              <div class="mx-auto mt-5 text-gray-100 md:mt-12 md:max-w-lg md:text-center lg:text-lg">{user?.bio}</div>

              <div className="flex flex-col items-center mt-12 text-center">
                <span className="relative inline-flex w-full rounded-full shadow-sm md:w-auto">
                  <button className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full md:w-auto hover:bg-purple-700 focus:outline-none focus:border-purple-700 focus:shadow-outline-indigo active:bg-purple-700">
                    {btittle}
                  </button>
                  <span className="" id=""></span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserIntroduction;
