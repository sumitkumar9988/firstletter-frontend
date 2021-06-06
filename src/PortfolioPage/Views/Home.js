import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';
import Loader from './../../extraPage/Loader';
import { portfolioURL } from './../../utils/url';
import PortfolioHeader from '../components/Header';
import UserIntroduction from '../components/UserIntroduction';
import Footer from '../components/Footer';
import Error from './../components/Error';
import Project from './../components/Project';
const Index = ({ subdomain }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const [project, setProject] = useState();

  useEffect(() => {
    ReactGA.initialize('UA-198799173-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    axios
      .get(`${portfolioURL}/${subdomain}`)
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log('err', err);
        err.response && err.response.data.message ? setError(err.response.data) : setError(err);
        setLoading(false);
      });

    axios
      .get(`${portfolioURL}/${subdomain}/project`)
      .then(({ data }) => {
        setProject(data.project);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [subdomain]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="bg-black">
          <PortfolioHeader user={user} />
          <UserIntroduction user={user} btittle="Check out my Project" />
          {project && <Project project={project} />}
          <Footer user={user} />
        </div>
      )}
    </>
  );
};

export default Index;
