import React, { useState, useEffect } from 'react';
import Certificate from './../components/Certificate';
import Header from './../components/Header';
import axios from 'axios';
import Loader from './../../extraPage/Loader';
import { portfolioURL } from './../../utils/url';
import Footer from './../components/Footer';
const Achievement = ({ subdomain }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const [certificate, setCertificate] = useState();

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
      .get(`${portfolioURL}/${subdomain}/certificate`)
      .then(({ data }) => {
        setCertificate(data.certificate);
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
          <Header user={user} />
          <Certificate certificate={certificate} />
          <Footer user={user} />
        </div>
      )}
    </>
  );
};

export default Achievement;
