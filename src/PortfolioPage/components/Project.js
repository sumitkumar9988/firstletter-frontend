import React from 'react';
import moment from 'moment';
const Project = ({ project }) => {
  return (
    <div>
      <div class="pb-1 text-center text-gray-700 bg-black bg-cover">
        {project.length === 0 ? null : (
          <div class="container relative max-w-2xl px-5 pt-12 mx-auto sm:py-12 lg:px-0">
            <h2 class="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
              Awesome <span class="inline-block text-indigo-500">Project</span>
            </h2>
            <p class="mt-5 text-xl text-white text-left opacity-75 sm:text-center">
              These are the Awesome Project i build for more detail check out my project
            </p>
          </div>
        )}
        <div class="my-12 ">
          <div class="max-w-xl px-4 mb-10 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div class="lg:grid  lg:grid-cols-2 lg:gap-10">
              {project &&
                project.map((item) => (
                  <a
                    href={item.DemoUrl}
                    class="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-indigo-300 rounded-lg shadow-2xl hover:scale-105"
                  >
                    <img class="h-56 rounded-t-lg  object-cover" alt="article " src={item?.projectLogo} />
                    <div class="px-6 pt-8 mb-2 text-xl font-bold">
                      <span>{item?.name}</span>
                    </div>
                    <div class="px-6 pt-2 ">
                      <small>{moment(item?.updated_at).format('MM-DD-YYYY')}</small>
                      <div class="overflow-hidden h-40 ...">{item?.description}</div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
