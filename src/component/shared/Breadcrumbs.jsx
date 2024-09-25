// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x); // Split the path into segments

    return (
        <nav>
            <ul className="breadcrumbs">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={path}>
                            <Link to={path}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
