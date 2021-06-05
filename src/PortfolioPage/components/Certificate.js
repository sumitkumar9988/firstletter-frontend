import React from 'react';

const Certificate = ({ certificate }) => {
  return (
    <>
      <div className="min-h-screen">
        <div className="py-8 w-full px-6">
          {certificate &&
            certificate.map((item) => (
              <img src={item.image} alt="certificate" className="w-full h-full object-fit object-center" />
            ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
