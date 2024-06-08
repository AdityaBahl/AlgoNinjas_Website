import React, { useEffect, useState } from 'react';
import '../assets/css/accountNavbar.css';

import dp from '../assets/img/student/user.png';
import icon2 from '../assets/img/student/customer-support.png';
import icon1 from '../assets/img/student/bell.png';
const NavBarComponent = (props) => {
    return (
        <nav className="navbar-portal">
            <div className="navbar-left">
                <span className="navbar-name">Joe John</span>
                <span className="dash">Dashboard</span>
            </div>
            <div className="navbar-right">
                <img src={icon1} alt="Logo 1" className="navbar-logo" />
                <img src={icon2} alt="Logo 2" className="navbar-logo" />
                <img src={dp} alt="Profile" className="navbar-profile" />
            </div>
        </nav>
    );
};
export default NavBarComponent;