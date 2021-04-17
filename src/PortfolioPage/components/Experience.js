import React from 'react';
import EducationDetails from './NumberDetails';
const Experience = () => {
  return (
    <>
      <section class="text-gray-50 bg-black body-font">
        <h2 className="text-blue-50 text-center text-3xl">Work Experience</h2>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <EducationDetails
            number="1"
            logo="https://freepngimg.com/download/google/66912-logo-now-google-plus-search-free-transparent-image-hd.png"
            postition="Web-Dev Intern"
            description="Work As web dev internship Adipisicing nostrud id sunt amet culpa ut.Et excepteur ullamco anim anim consequat magna."
            organization="Google Inc"
            timeline="2018-2022"
          />
          <EducationDetails
            number="2"
            logo="https://i.pinimg.com/originals/ce/af/83/ceaf8384322af790486cff176a0a2f24.png"
            postition="intern"
            description="work as web developer internship"
            organization="Microsoft"
            timeline="2020-2021"
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
