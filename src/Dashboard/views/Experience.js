import React from 'react';
import ExperienceCard from './../components/ExperienceCard';
const Experience = () => {
  return (
    <div>
      <div>
        <div class="px-4 xl:px-0 py-16">
          <div class="mx-auto container">
            <div class="mb-4 lg:mb-20">
              <h1 class="text-center text-2xl lg:text-5xl font-bold text-gray-800 tracking-1px">
                Add Your work Experience
              </h1>
              <h2 class="text-base lg:text-lg text-center text-gray-700 mt-5 tracking-wider">
                upload your resume for faster process{' '}
              </h2>
            </div>
            <div class="flex flex-wrap justify-center">
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
