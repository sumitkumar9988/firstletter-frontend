import React from "react";
import FourOFourImg from "./../Asset/Image/404.svg";

const FourOFour = () => {
  return (
    <div>
      <section class="py-8 px-4 text-center">
        <h2 class="text-5xl font-semibold font-heading">Error 404</h2>
        <p class="text-gray-400">Page not found</p>
        <img
          class="max-w-auto md:max-w-sm my-14 mx-auto"
          src={FourOFourImg}
          alt="404"
        />
      </section>
    </div>
  );
};

export default FourOFour;
