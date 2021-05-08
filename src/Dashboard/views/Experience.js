import React, { useEffect } from 'react';
import Card from './../components/ExpCard';
import { getAllUserExperience } from '../../redux/actions/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';

const Experience = () => {
  const dispatch = useDispatch();

  const experienceList = useSelector((state) => state.userAllExplist);
  const { loading, error, experiences } = experienceList;

  useEffect(() => {
    dispatch(getAllUserExperience());
  }, [dispatch]);
  return (
    <div>
      <div className="min-h-screen mt-4">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
          {experiences &&
            experiences.map((item) => {
              return (
                <Card
                  id={item._id}
                  title={item.jobTitle}
                  userId={item.user}
                  organization={item.organization}
                  organizationLogo={item.organizationLogo}
                  website={item.website}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  duration={item.duration}
                  responsibilities={item.responsibilities}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
