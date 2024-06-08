import React, { Component } from "react";
import "../assets/css/pricing.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AOS from "aos";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet';
import { img12 } from "./mls_constants";

const Pricing = () => {
  AOS.init({
    offset: 200,
    duration: 600,
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contactus");
  };
  const FreeClassButton = () => {
    return (
      <div class="free_class">
        <button onClick={handleClick}>Book 1 Week Free Class</button>
      </div>
    );
  };
  return (
    <div>
      {/* {<Mobile_Navbar />}
      <Whatsapp_icon /> */}
      <Navbar />
      <Helmet>
        <meta name="google-site-verification" content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY" />
        <meta name="title" content="Algo Ninjas Online tutoring price of Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR & AMC Classes | Algo Ninjas" />
        <meta name="description" content="Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of Algo Ninjas are specifically designed to accelerate your child's academic progress, programs, GUARANTEED | Algo Ninjas
"/>
        <meta name="keywords" content="Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of Algo Ninjas are specifically designed to accelerate your child's academic progress, programs, GUARANTEED.| Algo Ninjas
"/>
        <meta name="robots" content="index, follow" />
        <title>Algo Ninjas Online tutoring price of Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR & AMC Classes | Algo Ninjas
        </title>
      </Helmet>
      <div className="f-template">
        <img src={img12} alt="first Template" className="img-fluid" />
      </div>
      <div className="bookFree">
        <h3 onClick={handleClick}>Book a free Demo Now | Algo Ninjas</h3>
      </div>
      <br />
      <br />
      <br />
      <div className="white">
        <Container fluid>
          <Row>
            <Col md="12" sm="12" xs="12">
              <div className="find-live">
                {/* <div className="joinMLS">
                  <a href="#">
                    Join us at Algo Ninjas and unlock your child's true
                    potential. <br />
                    Enroll today and witness their academic journey soar to new
                    heights.
                  </a>
                </div> */}
                <div>
                <h3 className="container-desc">
                    Join us at Algo Ninjas and unlock your child's true
                    potential
                    Enroll today and witness their academic journey soar to new
                    heights.
                  </h3>
                </div>
                <br />
                <div className="boxx1">
                  <FreeClassButton />
                  <br />
                </div>
              </div>
              <div>
                <h3 className="container-desc">
                  Unlock the Power of Comprehensive Learning with a Single
                  Subscription - Including Test Preparation!
                </h3>
              </div>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="white">
        <Container>
          <Row>
            <Col sm="1" md="1" xs="12">
              <div className="random1">
                <h4>
                  $750/50hrs
                  <br />
                  $15/hr
                </h4>
              </div>
            </Col>
            <Col md="10" xs="12" sm="10">
              <div className="deets">
                <div className="box">
                  <ul>
                    1. 🌟 1-on-1 Expert Classes<br />
                    2. 🎥 Recorded Sessions<br />
                    3. 📝 Comprehensive Class Notes<br />
                    4. 🤝 Parent-Teacher Conferences<br />
                    5. 📚 School Topic Assistance<br />
                    6. 🧪 Regular Tests for Progress<br />
                    7. 📱 On-Demand Classes Available<br />
                    8. 📚 Extra Classes During Exams<br />
                    9. 🤖 AI-Powered Homework Platform<br />
                    10. 🕒 Flexible Class Schedule<br />
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="boxx">
            <FreeClassButton />
          </div>
          <br />
          <br />
          <Row>
            <Col sm="1" md="1" xs="12">
              <div className="random1">
                <h4>
                  $1350/100hrs
                  <br />
                  $13.5/hr
                </h4>
              </div>
            </Col>
            <Col sm="10" md="10" xs="12">
              <div className="deets">
                <div className="box">
                  <ul>
                    1. 🌟 1-on-1 Expert Classes<br />
                    2. 🎥 Recorded Sessions<br />
                    3. 📝 Comprehensive Class Notes<br />
                    4. 🤝 Parent-Teacher Conferences<br />
                    5. 📚 School Topic Assistance<br />
                    6. 🧪 Regular Tests for Progress<br />
                    7. 📱 On-Demand Classes Available<br />
                    8. 📚 Extra Classes During Exams<br />
                    9. 🤖 AI-Powered Homework Platform<br />
                    10. 🕒 Flexible Class Schedule<br />
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="boxx">
            <FreeClassButton />
          </div>
          <br />
          <br />
          <Row>
            <Col sm="1" md="1" xs="12">
              <div className="random1">
                <h4>
                  $2500/200hrs
                  <br />
                  $12.5/hr
                </h4>
              </div>
            </Col>
            <Col sm="10" md="10" xs="12">
              <div className="deets">
                <div className="box">
                  <ul>
                    1. 🌟 1-on-1 Expert Classes<br />
                    2. 🎥 Recorded Sessions<br />
                    3. 📝 Comprehensive Class Notes<br />
                    4. 🤝 Parent-Teacher Conferences<br />
                    5. 📚 School Topic Assistance<br />
                    6. 🧪 Regular Tests for Progress<br />
                    7. 📱 On-Demand Classes Available<br />
                    8. 📚 Extra Classes During Exams<br />
                    9. 🤖 AI-Powered Homework Platform<br />
                    10. 🕒 Flexible Class Schedule<br />
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <div className="boxx">
            <FreeClassButton />
          </div>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default Pricing;
