import React from 'react';
import '../assets/css/studentNavbar.css';
import logoImg from '../assets/img/mlslogo.png';

import Chat from '../assets/img/student/chat.png';
import Dollar from '../assets/img/student/dollar.png';
import Home from '../assets/img/student/home.png';
import Like from '../assets/img/student/like.png';
import User from '../assets/img/student/user.png';
const StudentNavbar = () => {
    return (
        <div className="navbars">
            <ul className="nav-list">
                <img className="logo" src={logoImg} />

                <li className="nav-item">
                    <div className="navItems">
                        <img className="logos" src={Home} />
                        <p>Home</p>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="navItems">
                        <img className="logos" src={User} />
                        <p>Students</p>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="navItems">
                        <img className="logos" src={User} />
                        <p>Parent</p>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="navItems">
                        <img className="logos" src={Chat} />
                        <p>Chat</p>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="navItems">
                        <img className="logos" src={Like} />
                        <p>Refer Us</p>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="navItems">
                        <img className="logos" src={Dollar} />
                        <p>Billing</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default StudentNavbar;