import React, { useState } from 'react';
function Index() {
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-16 ">
          <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-green-400 font-bold leading-tight">
            Explore the best of illustration
          </h1>
          <div className="relative">
            <svg
              className="h-64 sm:h-auto  sm:w-auto sm:ml-12 sm:-mt-20"
              width={1202}
              height={630}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M960 559.998c1.563.369 3.128.731 4.702 1.06 55.435 11.622 127.56-10.491 124.184-78.817-1.161-23.504-12.971-46.26-31.463-60.628-10.155-7.885-21.982-13.217-33.168-19.532C995.687 385.957 975.77 364.904 960 341v218.998"
                  fill="#28445B"
                />
                <circle fill="#FBD38D" cx={889} cy={12} r={12} />
                <circle fill="#33FFD5" cx={637} cy={618} r={12} />
                <path
                  d="M968.754 94.323C943.386 54.064 890.111 49.805 843 59.5c-101.501 20.88-382.694-5.632-477.946 34.708-83.554 35.388-194.805 143.894-260.14 206.185-15.412 14.688 3.418 76.255 9.966 96.812C149.922 479.478 277.163 573.7 365.209 591c254.565 50.021 555.987-183.789 613.031-375.4 16.661-56.061 7.344-94.577-9.486-121.277z"
                  fill="#FEEBC8"
                />
                <path fill="#9133FF" d="M41.505 81.79L30.55 121.93.44 88.49z" />
              </g>
            </svg>
            <img
              className="left-0 right-0 m-auto h-56 sm:h-auto overflow-hidden w-4/5 sm:w-auto absolute sm:mt-10 sm:ml-56 top-0"
              src="https://cdn.tuk.dev/assets/hero_img1.jpg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
