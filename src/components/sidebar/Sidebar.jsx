import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
import { Col } from 'react-bootstrap';
import { logo } from '../../pages/mls_constants';
//import logo from '../../assets/img/MLSClasseslogo.png'; //(logo to be used)
const sidebarNavItems = [
    {
        display: 'Home',
        icon: <i className='bx bx-home'></i>,
        to: '/portal',
        section: 'portal'
    },
    {
        display: 'Students',
        icon: <i className='bx bx-user'></i>,
        to: '/student_portal',
        section: 'student_portal'
    },
    {
        display: 'Parents',
        icon: <i className='bx bx-user'></i>,
        to: '/student_portal',
        section: 'parent_portal'
    },
    {
        display: 'Chat',
        icon: <i className='bx bx-chat'></i>,
        to: '/chat',
        section: 'chat'
    },
    {
        display: 'Refer Us',
        icon: <i className='bx bx-star'></i>,
        to: '/programs',
        section: 'programs'
    },
    {
        display: 'Billing',
        icon: <i className='bx bx-receipt'></i>,
        to: '/pricing',
        section: 'pricing'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            <a href="/home">
              <img href="/home" className="logoStyle" src={logo} alt="mls logo" />
            </a>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
