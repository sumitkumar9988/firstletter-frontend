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
import Error from './../components/Error';

const About = ({ subdomain }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();

  useEffect(() => {
    axios
      .get(`${portfolioURL}/${subdomain}`)
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        err.response && err.response.data.message ? setError(err.response.data) : setError(err);
        setLoading(false);
      });

    axios
      .get(`${portfolioURL}/${subdomain}/education`)
      .then(({ data }) => {
        setEducation(data.education);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${portfolioURL}/${subdomain}/experience`)
      .then(({ data }) => {
        setExperience(data.experience);
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
          <UserIntroduction user={user} btittle="Know More" />
          {education && <Education education={education} />}
          {experience && <Experience experience={experience} />}
          <Contact user={user} />
          <Footer user={user} />
        </div>
      )}
    </>
  );
};

export default About;
