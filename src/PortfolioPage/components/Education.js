import React from 'react';
import EducationDetails from './NumberDetails';
const Education = () => {
  return (
    <>
      <section class="text-gray-50 bg-black body-font">
        <h2 className="text-blue-50 text-center text-3xl">Education</h2>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <EducationDetails
            number="1"
            logo="https://upload.wikimedia.org/wikipedia/sa/6/66/IIT_Delhi_logo.png"
            postition="B.tech"
            description="Complete my B.tech Education and learn alot of programming "
            organization="IIT Delhi"
            timeline="2018-2022"
          />
          <EducationDetails
            number="2"
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/IIM_Ahmedabad_logo.png/709px-IIM_Ahmedabad_logo.png"
            postition="MBA"
            description="Complete my MBA Education and learn alot of Business "
            organization="IIM ahmedabad "
            timeline="2022-2024"
          />
          <EducationDetails
            number="3"
            logo="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png"
            postition="MBA"
            description="Complete my MBA Education and learn alot of Business "
            organization="harvard business school "
            timeline="2024-2026"
          />
        </div>
      </section>
    </>
  );
};

export default Education;

{
  /* <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-50 mb-1 text-xl">The 400 Blows</h2>
                <p class="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo
                  offal.
                </p>
              </div>
            </div>
          </div> */
}
