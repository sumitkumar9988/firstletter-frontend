import React from 'react';
import FourOFourImg from './../Asset/Image/Email_sent_success.svg';

const EmailSent = () => {
  return (
    <div>
      <section class="py-8 px-4 bg-gray-900 h-screen text-center">
        <h2 class="text-3xl font-medium text-gray-50 pt-9  font-heading">Reset link send to your Email Address </h2>
        <p class="text-gray-100 pt-9 pb-9">Click on Reset Address and Change You Password</p>
        <div className="pb-9">
          <img
            class="animate-bounce object-contain h-32 max-w-auto md:max-w-sm my-10 mx-auto"
            src={FourOFourImg}
            alt="semai sent"
          />
          <div class="relative container pt-12 px-4 mx-auto text-center">
            <a
              class="inline-block w-full md:w-auto mb-2 md:mb-5
                     px-8 py-4 mr-4 text-sm font-medium leading-normal
                    bg-blue-500 hover:bg-blue-300 text-white rounded 
                    transition duration-200"
            >
              Track your performance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailSent;

// bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
