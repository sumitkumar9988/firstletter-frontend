import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './../../extraPage/Loader';
import { portfolioURL } from './../../utils/url';
import PortfolioHeader from '../components/Header';
import UserIntroduction from '../components/UserIntroduction';
import Footer from '../components/Footer';
import Project from './../components/Project';
const Index = ({ subdomain }) => {
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
        console.log(err);
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
          <UserIntroduction user={user} btittle="Check out my Project" />
          {project && <Project project={project} />}
          <Footer user={user} />
        </div>
      )}
    </>
  );
};

export default Index;
