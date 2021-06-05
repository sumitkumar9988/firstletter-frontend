import React, { useState } from 'react';
import { ReactComponent as Headeropen } from './../../Asset/Image/headeropen.svg';
import { ReactComponent as Headerclose } from './../../Asset/Image/headerclose.svg';
import Nav from './NavBar';

const Header = ({ user }) => {
  const [open, setOpen] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <div>
      {' '}
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center w-full h-24 select-none">
          <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium ">
            <p className="w-1/4 py-4 pl-6 pr-4  ">
              <span className="p-1 text-xl font-black leading-none text-white select-none">
                <span>{user?.name.replace(/ .*/, '')}</span>
                <span className="text-indigo-300">.</span>
              </span>
            </p>
            {open ? <Nav /> : null}
            <div
              className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer  bg-white hover:bg-opacity-90"
              onClick={toggle}
            >
              {open ? null : <Headeropen />}
              {open ? <Headerclose /> : null}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
