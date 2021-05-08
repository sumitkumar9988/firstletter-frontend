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
