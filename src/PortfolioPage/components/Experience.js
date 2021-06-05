import React from 'react';
import moment from 'moment';
import EducationDetails from './NumberDetails';
const Experience = ({ experience }) => {
  return (
    <>
      <section class="text-gray-50 bg-black body-font">
        <h2 className="text-blue-50 text-center text-3xl">Experience</h2>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          {experience &&
            experience.map((item) => (
              <EducationDetails
                logo={item.organizationLogo}
                postition={item.jobTitle}
                description={item.responsibilities}
                organization={item.organization}
                timeline={`${moment(item.startDate).format('YYYY')}` + '-' + `${moment(item.endDate).format('YYYY')}`}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
