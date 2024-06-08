import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css/box.css';
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/Alg.svg';
const NavBarComponent = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState('');
  const [checkUser, setCheckUser] = useState(false);
  const [signedUser, setSignedUser] = useState('');
  useEffect(() => {
    console.log('test');
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setCheckUser(true);
      setSignedUser(user);
    }
    let path = location.pathname?.split("/");
    path[1] && setActive(path[1])
  }, []);
  const handleClear = () => {
    sessionStorage.clear();
    setCheckUser(false);
    navigate("/");

  }
  const handleNavBarClick = (params) => {
    setActive(params);
  }
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col sm="3" xs="3" md="3">
            <a href="/home">
              <img href="/home" className="logoStyle" src={logo} alt="mls logo" />
            </a>
          </Col>
          <Col sm="9" xs="9" md="9">
            <nav>
              <ul>
                <li onClick={() => { handleNavBarClick('home') }}><Link to="/home" className={active === "" ? 'active' : ''} >Home</Link></li>
                <li onClick={() => { handleNavBarClick('programs') }}><Link to="/programs" className={active === "programs" ? "active " : ""} >Programs</Link></li>
                <li onClick={() => { handleNavBarClick('pricing') }}><Link to="/pricing" className={active === "pricing" ? "active" : ""} >Pricing</Link></li>
                <li onClick={() => { handleNavBarClick('studentjob') }}><Link to="/studentjob" className={active === "studentjob" ? "active" : ""} >Student Corner</Link></li>
                <li onClick={() => { handleNavBarClick('contact') }}><Link to="/contactus" className={active === "contactus" ? 'active' : ''}>Contact Us</Link></li>
                <li>
                  {checkUser && <><div className="nav-login-btn"><a href="/" onClick={handleClear}>Logout</a></div></>}
                  {!checkUser && <div className="nav-login-btn"><a href="/login" target="_blank">Login</a></div>}
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default NavBarComponent;