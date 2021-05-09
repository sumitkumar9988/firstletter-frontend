import React from "react";
import Comp1 from './../components/HomeComp1';
import Comp2 from './../components/HomeComp2';
import Comp3 from './../components/HomeComp3';

const Index = () => {
    return (
      <>
        <div className="min-h- mt-4">
          <Comp2 />
          <Comp3 />
          <Comp1 />
        </div>
      </>
    );
};
export default Index;
