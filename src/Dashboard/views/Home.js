import React, { useEffect } from 'react';
import Comp1 from './../components/HomeComp1';
import Comp2 from './../components/HomeComp2';
import Comp3 from './../components/HomeComp3';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from './../../redux/actions/authActions';
import ReactGA from 'react-ga';

const Index = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.getUserDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <>
      <div className="min-h- mt-4">
        <Comp2 />
        {/* <Comp3 /> */}
        <Comp1 />
      </div>
    </>
  );
};
export default Index;
