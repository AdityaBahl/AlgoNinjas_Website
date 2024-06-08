import "../assets/css/index.css"; // Import the CSS file where you define the styles

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { logo } from "../pages/mls_constants";
const Mobile_Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [checkUser, setCheckUser] = useState(false);
  useEffect(() => {
    let user = sessionStorage.getItem("email");
    if (user) {
      setCheckUser(true);
    }
    let path = location.pathname?.split("/");
    path[1] && setActive(path[1]);
  }, []);

  const handleClear = () => {
    sessionStorage.clear();
    setCheckUser(false);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="logo">
        <a href="/home">
          <img href="/home" src={logo} alt="mls logo" />
        </a>
      </div>
      <div className="menu-items">
        <a>
          <Link to="/home" className={active === "" ? "active" : ""}>
            Home
          </Link>
        </a>
        <a>
          <Link
            to="/programs"
            className={active === "programs" ? "active " : ""}
          >
            Programs
          </Link>
        </a>
        <a>
          <Link to="/pricing" className={active === "pricing" ? "active" : ""}>
            Pricing
          </Link>
        </a>
        <a>
          <Link
            to="/studentjob"
            className={active === "studentjob" ? "active" : ""}
          >
            Student Corner
          </Link>
        </a>
        <a>
          <Link to="/contactus" className={active === "contactus" ? "active" : ""}>
            Contact Us
          </Link>
        </a>
        {checkUser && (
          <div className="nav-login-btn">
            <a href="/" onClick={handleClear}>
              LogOut
            </a>
          </div>
        )}
        {!checkUser && (
          <div className="nav-login-btn">
            <a href="/login" target="_blank">
              LogIn
            </a>
          </div>
        )}
      </div>
      <div
        className={`hamburger-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Mobile_Navbar;
