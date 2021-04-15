import React from 'react';
import EducationSvg from './../../Asset/Image/experience.svg';

const ExperienceCard = () => {
  return (
    <div>
      <div>
        <div
          class="max-w-sm m-4 bg-white rounded-3xl
                 shadow-md py-6 px-16"
        >
          <img src={EducationSvg} alt="" />
          <div class="pt-5">
            <h1 class="text-xl lg:text-2xl font-semibold tracking-wider text-gray-800">Company Name</h1>
            <p class="mt-4 tracking-wider leading-8 text-base w-11/12 text-gray-700">Postion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;