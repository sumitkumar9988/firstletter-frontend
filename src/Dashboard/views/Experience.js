import React, { useEffect } from 'react';
import { getAllUserExperience } from '../../redux/actions/dashboardActions';
import { useDispatch, useSelector } from 'react-redux';
import  PlusLogo  from '../../Asset/plus.png';
function IndexPage() {
  const dispatch = useDispatch();

  const experienceList = useSelector((state) => state.userAllExplist);
  const { loading, error, experiences } = experienceList;

  useEffect(() => {
    dispatch(getAllUserExperience());
  }, [dispatch]);

  return (
    <div class="pb-1 text-center text-gray-700 bg-black bg-cover">
      <div class="container relative max-w-2xl px-5 pt-12 mx-auto sm:py-12 lg:px-0">
        <h2 class="mb-10 text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-50 sm:text-5xl sm:leading-none md:text-6xl sm:text-center">
          Work <span class="inline-block text-pink-400">Experience</span>
        </h2>
       
      </div>
      <div class="my-12 ">
        <div class="max-w-xl px-4 mb-10 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div class="lg:grid  lg:grid-cols-2 lg:gap-10">
            {/* starting  */}
            {experiences &&
              experiences.map((item) => {
                return (
                  <div class="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-gradient-to-r from-blue-500 to-blue-600  rounded-lg shadow-2xl hover:scale-105">
                    <img class="h-56 rounded-t-lg  object-cover" alt="logo " src={item.organizationLogo} />
                    <div class="px-6 pt-8 mb-2 text-xl text-red-50 font-bold">
                      <span>{item.jobTitle}</span>
                    </div>
                    <div class="px-6  mb-2 text-lg text-red-50 ">
                      <a href={item.website}>{item.organization}</a>
                    </div>
                    <div class="px-6 pt-2 text-blue-50">
                      <small>
                        From:- {item.startDate} | {item.endDate} For:- {item.duration}
                      </small>
                      <div class="overflow-hidden h-40 ...">{item.responsibilities}</div>
                    </div>
                  </div>
                );
              })}
            <div class="flex mb-12 flex-col overflow-hidden transition duration-500 ease-in-out transform bg-gradient-to-r from-blue-500 to-blue-600  rounded-lg shadow-2xl hover:scale-105">
              <img class="h-5/6 rounded-t-lg  object-cover" alt="logo " src={PlusLogo} />
              <div class="px-6  mb-2 text-xl text-red-50 font-bold">
                <span>Add Your Recents Experience</span>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
