import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable jsx-a11y/anchor-is-valid */
const NavItemDestop = () => {
  return (
    <div>
      <div class="hidden sm:block sm:ml-6">
        <div class="flex space-x-4">
          <Link to="/home">
            <p
              href="#"
              class="text-white hover:bg-gray-700  hover:text-white
              px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </p>
          </Link>
          <Link to="/home/ach">
            <p
              class="text-gray-300 hover:bg-gray-400  hover:text-white
             px-3 py-2 rounded-md text-sm font-medium"
            >
              Achievement
            </p>
          </Link>

          <Link to="/home/projects">
            <p
              class="text-gray-300 hover:bg-gray-400  hover:text-white
             px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </p>
          </Link>
          <Link to="/home/cp">
            <p
              class="text-gray-300 hover:bg-gray-400  hover:text-white
             px-3 py-2 rounded-md text-sm font-medium"
            >
              Compitative Programming
            </p>
          </Link>
          <Link to="/home/social">
            <p
              class="text-gray-300 hover:bg-gray-400  hover:text-white
             px-3 py-2 rounded-md text-sm font-medium"
            >
              Social Links
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavItemDestop;
