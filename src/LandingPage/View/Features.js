import React from 'react';
import LeftImageItem from './../Components/LeftImageItem';
import RightImageItem from './../Components/RightImageItem';

const Features = () => {
  return (
    <div>
      <LeftImageItem
        image="https://res.cloudinary.com/sumit9988/image/upload/v1622352028/cherry-669_1_s0rkjc.png"
        title="Irure officia elit exercitation laborum aute fugiat "
        description="Ullamco adipisicing fugiat ea in in ullamco cillum proident est est qui.Et ea deserunt Lorem voluptate anim labore cupidatat nulla eiusmod."
      />
      <RightImageItem
        image="https://res.cloudinary.com/sumit9988/image/upload/v1622351314/gummy-app-development_uj1sgg.png"
        title="Irure officia elit exercitation laborum aute fugiat "
        description="Ullamco adipisicing fugiat ea in in ullamco cillum proident est est qui.Et ea deserunt Lorem voluptate anim labore cupidatat nulla eiusmod."
      />
      <LeftImageItem
        image="https://res.cloudinary.com/sumit9988/image/upload/v1622352501/cherry-e-mail-marketing_euoiwi.png"
        title="Irure officia elit exercitation laborum aute fugiat "
        description="Ullamco adipisicing fugiat ea in in ullamco cillum proident est est qui.Et ea deserunt Lorem voluptate anim labore cupidatat nulla eiusmod."
      />
    </div>
  );
};

export default Features;
