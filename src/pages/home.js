import React, { useEffect, useState } from "react";
import "../assets/css/index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../components/footer";
import Courses from "./courses.js";
import slider1 from '../assets/img/1.jpeg';
import slider2 from '../assets/img/2.jpeg';
import slider3 from '../assets/img/3.jpeg';
import slider4 from '../assets/img/4.jpeg';
import slider5 from '../assets/img/5.jpeg';
import slider6 from '../assets/img/6.jpeg';
import slider7 from '../assets/img/7.jpeg';


import CommentsSlide from "../components/comments_slide";
import { redirect, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import { ChallengingEnv, Comp_Programs, Confidence_Building, ExpertInstructors, Flexible, Lifelong_Skills, Per_learning, Proven_results, image1, image11, image13, image2, image3 } from "./mls_constants";
function Index() {
  const myInlineStyle = {
    fontSize: "16px",
    color: "blue",
    fontWeight: "bold",
    size: "100px",
    // Add more CSS properties as needed
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this line to enable autoplay
    autoplaySpeed: 4000,
  };
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
    });
  }, []);
  const A_benefit = (props) => {
    const labelling = props.label.split(" ");
    return (
      <div data-aos="zoom-in" className="benefit">
        <img src={props.image} alt="Zoom" />
        <p>
          {labelling[0]}
          <br />
          {labelling[1]}
        </p>
      </div>
    );
  };
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
  const myStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const [youtubeID] = useState("XpScgwRKpgs");
  console.log(`https://youtube.com/embed/${youtubeID}?autoplay=0`);
  return (
    <div>
      <Navbar />
      <Helmet>
        <meta name="google-site-verification" content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY" />
        <meta name="title" content="Live 1:1 Online Classes for Kids  (Grade 2-12) | Algo Ninjas" />
        <meta name="description" content="Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of Algo Ninjas are specifically designed to accelerate your child's academic progress, programs, GUARANTEED. Book a FREE TRIAL now!" />
        <meta name="keywords" content="Algo Ninjas, MLS, Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. These programs are specifically designed to accelerate your child's academic progress, programs, GUARANTEED." />
        <title>Skill Development Training & Internship Institute in Jaipur | Algo Ninjas</title>
      </Helmet>
      <div className="Slideshow">
        <Slider {...settings}>
          <div className="f-template" style={myInlineStyle}>
            <img src={slider1} alt="Algo Ninjas - Math, English, Science & Coding - United States" title="Algo Ninjas - Math, English, Science & Coding - United States" />
          </div>
          <div className="f-template">
            <img src={slider2} alt="Algo Ninjas - US Curriculum - United States" title="Algo Ninjas - US Curriculum - United States" />
          </div>
          <div className="f-template">
            <img src={slider3} alt="Algo Ninjas - United States" title="Algo Ninjas - United States" />
          </div>
          <div className="f-template">
            <img src={slider4} alt="Algo Ninjas - SAT, PSAT, ACT Exam - United States" title="Algo Ninjas - SAT, PSAT, ACT Exam - United States" />
          </div>
          <div className="f-template">
            <img src={slider5} alt="Algo Ninjas - Pre Algebra, Geometry, Algebra 1 & 2, Pre Calculus, Calculus, ELA, Science - United States" title="Algo Ninjas - Pre Algebra, Geometry, Algebra 1 & 2, Pre Calculus, Calculus, ELA, Science - United States" />
          </div>
          <div className="f-template">
            <img src={slider6} alt="Algo Ninjas - Physics, Pre Calculus, Economics, Statistics, Psychology, Computer Science, Chemistry - United States" title="Algo Ninjas - Physics, Pre Calculus, Economics, Statistics, Psychology, Computer Science, Chemistry - United States" />
          </div>
          <div className="f-template">
            <img src={slider7} alt="Algo Ninjas - Physics, Pre Calculus, Economics, Statistics, Psychology, Computer Science, Chemistry - United States" title="Algo Ninjas - Physics, Pre Calculus, Economics, Statistics, Psychology, Computer Science, Chemistry - United States" />
          </div>
        </Slider>
      </div>
      <br />
      <br />
      <div className="find-live">
        <div className="brfdesc">
          <a href="#">
            Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT,
            ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12.
            These programs are specifically designed to accelerate your child's
            academic progress, programs , GUARANTEED.
          </a>
        </div>
        <div className="width-line-space">
          <div className="yellowBtn">&nbsp;</div>
        </div>
        <br />
        <div className="midBanner">
          <h4>Our Programs For 2-12</h4>
        </div>
      </div>
      <div style={myStyle}>
        <FreeClassButton />
      </div>
      <div className="boxes">
        <div className="box">
          <h2>MATH</h2>
          <p>Algo Ninjas provide unique learning experiences that go above and beyond standard math instruction, fostering a deeper understanding of mathematical concepts and encouraging critical thinking.</p>
        </div>
        <div className="box">
          <h2>SCIENCE</h2>
          <p>Algo Ninjas offer exceptional science learning, going beyond regular instruction to deepen understanding of scientific concepts and promote critical thinking.</p>
        </div>
        <div className="box">
          <h2>ENGLISH(ELA)</h2>
          <p>Boost ELA skills with expert instructors, immersive lessons, and engaging activities. Algo Ninjas curriculum fosters confidence in reading, writing, grammar, and literature analysis. Excel in language with us!</p>
        </div>
        <div className="box">
          <h2>CODING</h2>
          <p>Through Algo Ninjas interactive curriculum, students gain hands-on experience with coding languages, algorithmic thinking, and problem-solving techniques, setting them on a path to becoming skilled and creative coders.</p>
        </div>
        <div className="box">
          <h2>SAT</h2>
          <p>1500+ Score Mastery: Transform Math, ELA Skills through Our SAT Classes! Join Algo Ninjas to elevate your SAT experience and embrace a new level of learning.</p>
        </div>
        <div className="box">
          <h2>ACT</h2>
          <p>Elevate your ACT preparation with a unique approach that goes beyond the surface, 35+Score Mastery. Join Algo Ninjas to experience ACT preparation that transforms how you learn and conquer challenges.</p>
        </div>
        <div className="box">
          <h2>AP</h2>
          <p>Unlock a 5/5 score with our exceptional AP preparation. . Join Algo Ninjas to elevate your AP journey and secure a 5/5 score that sets you apart.</p>
        </div>
        <div className="box">
          <h2>AMC</h2>
          <p>Achieve a perfect AMC score with our unparalleled preparation.  Join Algo Ninjas to elevate your AMC journey and secure a score that opens doors to mathematical excellence.</p>
        </div>
      </div>
      <div className="features">
        <div className="features-h">Main Features</div>

        <div className="features-sub">
          <div className="features-img" data-aos="fade-right">
            <img src={image13} alt="features img" />
          </div>
          <div className="features-content">
            <div className="features-content-2" data-aos="fade-left">
              <div className="features-content-img">
                <img src={image1} alt="img" />
              </div>
              <div className="features-content-text">
                <a href="#">1:1 Dedicated Classes</a>
              </div>
            </div>

            <div className="features-content-2" data-aos="fade-left">
              <div className="features-content-img">
                <img src={image2} alt="img" />
              </div>
              <div className="features-content-text">
                <a href="#">Lowest Class $ per cost</a>
              </div>
            </div>

            <div className="features-content-2" data-aos="fade-left">
              <div className="features-content-img">
                <img src={image3} alt="img" />
              </div>
              <div className="features-content-text">
                <a href="#">Master Teachers </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popular">
        <div className="popular-head">
          <div className="popular-h">Popular Courses</div>
        </div>
        <Courses />
      </div>
      <div style={myStyle}>
        <FreeClassButton />
      </div>
      <div className="brand-moto">
        <div className="brand-moto-message">
          <h2>Why the Algo Ninjas?</h2>
          <p>
            Algo Ninjas: Where Personalized Learning Meets Excellence! Our
            highly qualified teachers use expertly crafted curricula tailored to
            individual students, ensuring a perfect fit for their needs. With
            flexible online programs, your child will flourish academically and
            carry that success beyond the classroom.
          </p>
        </div>

        <div>
          <iframe
            poster={image11}
            className="YoutubeBox"
            src={`https://www.youtube.com/embed/${youtubeID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            crossOrigin="anonymous"
          ></iframe>
        </div>
      </div>

      <div className="benefits-container">
        <div className="brand-moto">
          <div className="brand-moto-message" style={{ width: "65%" }}>
            <h2>Our Benefits</h2>
            <p>
              Benefits of Algo Ninjas Online Training for Grades(2-12) | Algo Ninjas.
            </p>
          </div>


          <div className="benefits">
            <A_benefit
              className="bnfts"
              image={ExpertInstructors}
              label="Expert Instructors"
            />
            <A_benefit
              className="bnfts"
              image={Per_learning}
              label="Personalized Learning"
            />
            <A_benefit
              className="bnfts"
              image={Comp_Programs}
              label="Comprehensive Programs"
            />
            <A_benefit
              className="bnfts"
              image={Proven_results}
              label="Proven Results"
            />
            <A_benefit
              className="bnfts"
              image={Flexible}
              label="Flexible Scheduling"
            />
            <A_benefit
              className="bnfts"
              image={ChallengingEnv}
              label="Challenging Enviornment"
            />
            <A_benefit
              className="bnfts"
              image={Confidence_Building}
              label="Confidence Building"
            />
            <A_benefit
              className="bnfts"
              image={Lifelong_Skills}
              label="Lifelong Skills"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="parents-love">
          <CommentsSlide />
        </div>
        <br />
        <br />
        <br />
        <div style={myStyle}>
          <FreeClassButton />
        </div>
        <h2 className="acc-section">
          Common Faqs </h2>
        <Container id="accord-home" fluid={false} style={{ "marginTop": "5%" }}>

          <Row>
            <Col md={12} sm={12}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="acc-header">Does Algo Ninjas offer tutoring for Test-Prep exams like SAT, ACT & AP required by colleges in USA?</Accordion.Header>
                  <Accordion.Body>
                    Yes, Algo Ninjas provides comprehensive tutoring services for various admission tests required by colleges in the USA. They offer expert guidance and support for exams such as the SAT, ACT, and AP exams. Whether you're aiming to excel in the Scholastic Assessment Test (SAT), the American College Testing (ACT), or seeking preparation for Advanced Placement (AP) exams, Algo Ninjas has tailored tutoring programs to help you succeed and improve your chances of gaining admission to your desired colleges and universities
                    .
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="acc-header"> Does Algo Ninjas provide tutoring services for school students of USA?</Accordion.Header>
                  <Accordion.Body>
                    Algo Ninjas offers tutoring services for students in grades 2-12, covering academic subjects like Science, Math, English, Coding & Test-Preps like SAT,PSAT, ACT,AP,AMC. With a team of experienced educators, Algo Ninjas provides personalized and customised ONE on ONE lessons, including mock exams and hands-on practical sessions. If you're interested, you can take advantage of a 7-day trial period to experience firsthand how our dedicated teachers cater to each student's needs effectively.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header className="acc-header" >Could you provide us with the contact information to get course details of Algo Ninjas?</Accordion.Header>
                  <Accordion.Body>
                    You can contact Algo Ninjas by

                    <li>phone at <a href="#">+91 9649549754</a> or via WhatsApp at the same number.</li>
                    <li>Initiate a WhatsApp chat through this link: <a href="https://wa.me/message/XMS5KMWBGQZLG1">WhatsApp</a></li>
                    <li>If you prefer, you can also use the Contact Us form on the Algo Ninjas website: <a href="https://mlsclasses.com/contactus">contact Algo Ninjas</a></li>
                    <li>Additionally, you can reach out to us through email at <a href="mailto:admission@mlsclasses.com">admission@mlsclasses.com</a> or <a href="mailto:support@mlsclasses.com">support@mlsclasses.com</a> </li>
                    We're here to assist you!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="acc-header">How does the online class system offered by Algo Ninjas work?</Accordion.Header>
                  <Accordion.Body>
                    At Algo Ninjas, embark on an educational journey that focuses on your growth. Algo Ninjas offers a range of opportunities, from identifying skill gaps to mastering subjects. With Algo Ninjas, monitoring progress becomes seamless, thanks to their effective tracking system. Dive into Algo Ninjas' in-depth conceptual sessions that foster a strong understanding. Through real-time assessments, Algo Ninjas ensures accurate evaluations. Stay engaged with your child's development through Algo Ninjas' parent-teacher meetings. Algo Ninjas even provides catch-up sessions, guaranteeing no learning moment is lost. Choose Algo Ninjas today for a brighter educational path.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="acc-header">What are the class timing for Algo Ninjas</Accordion.Header>
                  <Accordion.Body>
                    At Algo Ninjas, we prioritize your convenience. During weekdays, our Algo Ninjas schedule is designed to accommodate you from 4 pm to 11 pm EST, while on weekends, Algo Ninjas are available from 8 am to 11 pm EST. We understand your busy schedule, and our Algo Ninjas flexible timings ensure learning fits seamlessly into your routine.
                  </Accordion.Body>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header className="acc-header">How are the weekly classes scheduled at Algo Ninjas?</Accordion.Header>
                    <Accordion.Body>
                      At Algo Ninjas, we understand that every student's availability is unique. That's why Algo Ninjas tailor the schedule to suit your preferences. Let Algo Ninjas know the days that work best for your child, and Algo Ninjas will create a personalized timetable that aligns perfectly with their routine.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header className="acc-header">Do Algo Ninjas provide classes for test preparation?</Accordion.Header>
                    <Accordion.Body>
                      Absolutely! Prepare for an incredible Algo Ninjas learning journey. Our courses, designed for grades 2 to 12, offer a range of options. From SAT, ACT, and AP test-prep classes that enhance skills, to captivating courses in math, ELA, science, and coding. Get ready to be captivated by Algo Ninjas education!
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8">
                    <Accordion.Header className="acc-header">Can my child enroll in multiple subjects with one subscription?</Accordion.Header>
                    <Accordion.Body>
                      Absolutely! Our Algo Ninjas subscription offers an exceptional opportunity. With just one Algo Ninjas subscription, your child gains access to a multitude of subjects. But wait, there's more – this fantastic Algo Ninjas package is shareable among siblings too! It's the ultimate solution that combines convenience and Algo Ninjas value, all in a single, exciting package.Absolutely! Our Algo Ninjas subscription offers an exceptional opportunity. With just one Algo Ninjas subscription, your child gains access to a multitude of subjects. But wait, there's more – this fantastic Algo Ninjas package is shareable among siblings too! It's the ultimate solution that combines convenience and Algo Ninjas value, all in a single, exciting package.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

        </Container>

        <Footer />
      </div>
    </div>
  );
}
export default Index;
