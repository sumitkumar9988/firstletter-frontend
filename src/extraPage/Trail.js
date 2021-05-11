import React from 'react';

const Project = () => {
  return (
    <div>
      <div className="mx-auto container relative z-40 bg-black">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-indigo-700" />
          <h1 className="text-4xl font-bold text-gray-50 pl-7">
            Dish<span className="text-2xl font-normal"> of the Day</span>
          </h1>
        </div>
        <div className="flex items-center justify-center relative">
          <img loading="lazy" src="https://i.ibb.co/jfm7RL9/Group-12.png" className="relative" />
          <div className="absolute lg:w-full w-32 sm:w-64 lg:bottom-48 sm:bottom-32 bottom-12 lg:right-56 xl:-ml-64 sm:-ml-64 -ml-32">
            <div className="flex items-center justify-center">
              <img loading="lazy" src="https://i.ibb.co/PhGJPZS/Rectangle-34.png" alt className="absolute" />
              <div className="md:text-xl text-xs md:ml-0 ml-4 xl:ml-2 font-bold text-white relative">
                EGG FENEL SALAD
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-1 text-center text-gray-700 bg-black bg-cover">
        <div class="container relative max-w-2xl px-5 pt-12 mx-auto sm:py-12 lg:px-0">
          <h2 class="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
            Awesome <span class="inline-block text-indigo-500">Project</span>
          </h2>
          <p class="mt-5 text-xl text-white text-left opacity-75 sm:text-center">
            Et excepteur labore in eiusmod irure.Dolore cupidatat enim tempor excepteur eiusmod pariatur sit commodo
            cupidatat.
          </p>
        </div>
        <div class="my-12 ">
          <div class="max-w-xl px-4 mb-10 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div class="lg:grid  lg:grid-cols-2 lg:gap-10">
              <div class="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                <img
                  class="h-56 rounded-t-lg  object-cover"
                  alt="article "
                  src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
                />
                <div class="px-6 pt-8 mb-2 text-xl font-bold">
                  <span>Introduction to HTML</span>
                </div>
                <div class="px-6 pt-2 ">
                  <small>John Doe | 2020-10-06</small>
                  <div class="overflow-hidden h-40 ...">HTML Introduction for beginner.</div>
                </div>
              </div>
              <div class="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                <img
                  class="h-56 rounded-t-lg  object-cover"
                  alt="article "
                  src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
                />
                <div class="px-6 pt-8 mb-2 text-xl font-bold">
                  <span>Introduction to HTML</span>
                </div>
                <div class="px-6 pt-2 ">
                  <small>John Doe | 2020-10-06</small>
                  <div class="overflow-hidden h-40 ...">HTML Introduction for beginner.</div>
                </div>
              </div>
              <div class="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                <img
                  class="h-56 rounded-t-lg  object-cover"
                  alt="article "
                  src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
                />
                <div class="px-6 pt-8 mb-2 text-xl font-bold">
                  <span>Introduction to HTML</span>
                </div>
                <div class="px-6 pt-2 ">
                  <small>John Doe | 2020-10-06</small>
                  <div class="overflow-hidden h-40 ...">HTML Introduction for beginner.</div>
                </div>
              </div>
              <div class="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
                <img
                  class="h-56 rounded-t-lg  object-cover"
                  alt="article "
                  src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
                />
                <div class="px-6 pt-8 mb-2 text-xl font-bold">
                  <span>Introduction to HTML</span>
                </div>
                <div class="px-6 pt-2 ">
                  <small>John Doe | 2020-10-06</small>
                  <div class="overflow-hidden h-40 ...">HTML Introduction for beginner.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;






