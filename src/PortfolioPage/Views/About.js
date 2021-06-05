import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './../../extraPage/Loader';
import { portfolioURL } from './../../utils/url';
import PortfolioHeader from '../components/Header';
import UserIntroduction from '../components/UserIntroduction';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';

const About = ({ subdomain }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const [project, setProject] = useState();

  useEffect(() => {
    axios
      .get(`${portfolioURL}/${subdomain}`)
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });

    axios
      .get(`${portfolioURL}/${subdomain}/project`)
      .then(({ data }) => {
        setProject(data.project);
      })
      .catch((err) => {
        setError(err);
      });

    axios
      .get(`${portfolioURL}/${subdomain}/project`)
      .then(({ data }) => {
        setProject(data.project);
      })
      .catch((err) => {
        setError(err);
      });

    axios
      .get(`${portfolioURL}/${subdomain}/project`)
      .then(({ data }) => {
        setProject(data.project);
      })
      .catch((err) => {
        setError(err);
      });
  }, [subdomain]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>error.message</p>
      ) : (
        <div className="bg-black">
          <PortfolioHeader user={user} />
          <UserIntroduction user={user} />
          <Education />
          <Experience />
          <Certificate />
          <Contact user={user} />
          <Footer user={user} />
        </div>
      )}
    </>
  );
};

export default About;
