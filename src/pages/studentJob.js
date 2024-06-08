import React, { Component } from "react";
import AOS from "aos";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import Whatsapp_icon from "../components/whatsapp_icon";
import Mobile_Navbar from "../components/mobile_navbar";
import '../assets/css/studentJob.css';
import { Helmet } from 'react-helmet';
import { first_img1 } from "./mls_constants";

const stars = (num) => {
  const stars_arr = [];
  for (let i = 0; i < num; i++) {
    stars_arr.push(<span className="star">&#9733;</span>);
  }
  return stars_arr;
};
const comment = (comment, name, stars_arr) => {
  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY" />
        <meta name="title" content="Success stories of Algo Ninjas Students & happy Parents Feedback | Algo Ninjas" />
        <meta name="description" content="Algo Ninjas students are consistently attaining remarkable achievements in highly coveted national and international examinations | Algo Ninjas
"/>
        <meta name="keywords" content="Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of Algo Ninjas are specifically designed to accelerate your child's academic progress, programs, GUARANTEED.| Algo Ninjas
"/>
        <meta name="robots" content="index, follow" />
        <title>Success stories of Algo Ninjas Students & happy Parents Feedback | Algo Ninjas</title>
      </Helmet>
      <div className="comment-box">
        <div className="comment-header">
          <span className="commenter-name">{name}</span>
          <div className="star-rating">{stars(stars_arr)}</div>
        </div>
        <div className="comment-content">
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};
const StudentJob = () => {
  AOS.init({
    offset: 200,
    duration: 600,
  });
  return (
    <div>
      <Navbar />
      <div className="f-template-contact">
        <img src={first_img1} alt="first Template" />
      </div>
      <div data-aos="flip-up">
        {comment(
          "Anchal got Full marks in her Physics exam. So thanks for tutoring. Really made lot of impact.",
          "Anchal's Parents",
          5
        )}
      </div>
      <div data-aos="flip-up">
        {comment(
          "Ritik we are in Texas where the Indian hub is there & there are lots of in person coaching every street but we like your teaching and matches our frequency, will wait for your availability. We can start coding & Math together. Looking forward thank you.",
          "Dhaitiri's Mom",
          5
        )}
      </div>
      <div data-aos="flip-up">
        {comment(
          "Shreya scored 1390/1440 in PSAT with very little prep. The score was `99 percentile at national level.",
          "Shreya's Parents",
          5
        )}
      </div>
      <div data-aos="flip-up">
        {comment(
          "I got my SAT scores today. I scored 1530. 750 in English and 780 in Math. Thank you so much Algo Ninjas.",
          "Shyam",
          5
        )}
      </div>
      <div data-aos="flip-up">
        {comment(
          "I just wanted to say thank you Ritik for tutoring Sophia. I am very impress with the way you teach and communicate. Keep up the good work.",
          "Sophia's Mom",
          5
        )}
      </div>
      <Container>
        <Row className="rows">
          <div className="exp">
            <Col md="12" xs="12" sm="12">
              <h1 className="student_p">
                "Experience the Joy of Learning: Join Countless Happy Students
                and Parents"
              </h1>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="contact-btn">
        <button>Book 1 Week Free Demo</button>
      </div>
      <Footer />
    </div>
  );
};
export default StudentJob;
