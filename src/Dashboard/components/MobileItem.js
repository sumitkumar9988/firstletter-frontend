import React from 'react';
import {Link} from 'react-router-dom'
<Link to=""></Link>
const MobileItem = () => {
    return (
        <div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    
                    <Link to="/home">
                        <p className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</p>
                    </Link>
                    
                    <Link to="/home/ach">
                        <p className="text-gray-300 hover:bg-gray-400
                            hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Achievement
                        </p>
                    </Link>

                    <Link to="/home/projects">
                        <p className="text-gray-300 hover:bg-gray-400
                            hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Projects
                        </p>
                    </Link>

                     <Link to="/home/cp">
                        <p className="text-gray-300 hover:bg-gray-400
                            hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Compitative Programming
                        </p>
                    </Link>

                     <Link to="/home/social">
                        <p className="text-gray-300 hover:bg-gray-400
                            hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Social Links
                        </p>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default MobileItem;
