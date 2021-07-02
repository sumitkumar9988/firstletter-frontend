import React from 'react';
import moment from 'moment';
import EducationDetails from './NumberDetails';
const Education = ({ education }) => {
  return (
    <>
      <section id="education" class="text-gray-50 bg-black body-font">
        {education.length === 0 ? null : <h2 className="text-blue-50 mb-24 text-center text-3xl">Education</h2>}
        <div class="container px-5  mx-auto flex flex-wrap">
          {education.map((item) => (
            <EducationDetails
              logo={item.instituteLogo}
              postition={item.degree}
              description={item.basicinfo}
              organization={item.institute}
              timeline={`${moment(item.startDate).format('YYYY')}` + '-' + `${moment(item.endDate).format('YYYY')}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
