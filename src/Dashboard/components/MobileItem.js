import React from 'react';

const MobileItem = () => {
  return (
    <div>
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <p class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</p>
          <p
            class="text-gray-300 hover:bg-gray-700 
      hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Education
          </p>
          <p
            class="text-gray-300 hover:bg-gray-700 
      hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Experience
          </p>
          <p
            class="text-gray-300 hover:bg-gray-700 
      hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </p>
          <p
            class="text-gray-300 hover:bg-gray-700 
      hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Social Links
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileItem;
