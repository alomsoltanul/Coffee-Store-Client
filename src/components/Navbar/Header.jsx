// import React from 'react';

import { Link } from "react-router-dom"

const Header = () => {
    const navlinks =<>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/add-coffee'>Add Coffee</Link></li>
         <li><Link to='/update-coffee'>Update Coffee</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Coffee Espresso</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;