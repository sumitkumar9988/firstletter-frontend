import React from 'react';
import EducationDetails from './NumberDetails';
const Experience = () => {
  return (
    <>
      <section class="text-gray-50 bg-black body-font">
        <h2 className="text-blue-50 text-center text-3xl">Work Experience</h2>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <EducationDetails />
          <EducationDetails />
          <EducationDetails />
        </div>
      </section>
    </>
  );
};

export default Experience;
