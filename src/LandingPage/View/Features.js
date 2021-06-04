import React from 'react';
import LeftImageItem from './../Components/LeftImageItem';
import RightImageItem from './../Components/RightImageItem';

const Features = () => {
  return (
    <div>
      <LeftImageItem
        image="https://res.cloudinary.com/sumit9988/image/upload/v1622352028/cherry-669_1_s0rkjc.png"
        title="Build Your Portfolio"
        description="Build Your Portfolio with integrate All your professional profiles in one place "
      />
      <RightImageItem
        image="https://res.cloudinary.com/sumit9988/image/upload/v1622351314/gummy-app-development_uj1sgg.png"
        title="Show Yours Skills and Project"
        description="Add Your Project from Github and add your competitive programming site also add your background like education, experience and all your achievement. "
      />
      <LeftImageItem
        image="https://res.cloudinary.com/sumit9988/image/upload/v1622352501/cherry-e-mail-marketing_euoiwi.png"
        title="Get Notified on jobs"
        description="Get notification on your mobile and email about jobs and apply directly with your portfolio in just One step."
      />
    </div>
  );
};

export default Features;
