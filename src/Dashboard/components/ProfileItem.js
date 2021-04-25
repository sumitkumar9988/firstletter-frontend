import React from 'react';
import {Link} from 'react-router-dom';
const ProfileItem = () => {
    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');
    };

    return (
        <div>
            <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black  focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu">
                <Link to="/home/profile">
                    <p
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">
                        Your Profile
                    </p>
                </Link>

                <Link to="/home/web">
                    <p
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">
                        Your Site
                    </p>
                </Link>

                <p
                    onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem">
                    Sign out
                </p>
            </div>
        </div>
    );
};

export default ProfileItem;
