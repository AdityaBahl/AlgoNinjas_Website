import React, { Component } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/css/program.css";
import { Helmet } from 'react-helmet';
import { Row, Col, Accordion } from "react-bootstrap";
const ACT_READING_WRITING = (props) => {
  return (
    <div>
      <Navbar />
      <Helmet>
        <meta name="google-site-verification" content="bhOOEzJ-8aaGF_FM3O7nKH4GgUpXIhIk0kr_tPC9FTY" />
        <meta name="title" content="	Live 1:1 Online Classes for Kids(Grade 2-12) & Adults in USA | Algo Ninjas" />
        <meta name="description" content="Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12 & for adults in USA. The programs of MLyour cheld's academic progress, programs, GUARANTEED. Book a FREE TRIAL now!ress, programs, GUARANTEED. Book a FREE TRIAL now!"/>
        <meta name="keywords" content="Algo Ninjas offers Live, Online Math, English, Science, Coding, SAT, ACT, AP, SSAT, STAAR, and AMC classes for students in grades 2-12. The programs of Algo Ninjas are specifically designed to accelerate your child's academic progress, programs, GUARANTEED.| Algo Ninjas
"/>
        <meta name="robots" content="index, follow" />
        <title>	Live 1:1 Online Classes for Kids(Grade 2-12) & Adults in USA | Algo Ninjas</title>
      </Helmet>
      <div class="f-template-contact">
        <img src={props.banner_img} alt="first Template" />
        {/* <h2 class="our-program-h">Our Program</h2> */}
      </div>
      <div>
        <div className="mainsection" style={{ marginTop: "5%" }}>
            <h1 style={{textAlign:"center"}}>{props.headingText}</h1>
          <Row>
            <Col md={12} sm={12} xs={12}>
              {props.mainContent.map(data=>
              <Accordion className="work" defaultActiveKey="0" id="high">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc">
                      {data.title}
                    </h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        {/* <ul className="Desc">
                          <li>Pre-Algebra</li>
                        </ul> */}
                        <p>{data.content}</p>
                      </Col>
                      <br />
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>)}
            </Col>
          </Row>
        </div>
          <div style={{ marginTop: "5%" }}> 
          <Row>
            <Col md={12} sm={12} xs={12}>
              {props.conclusion && 
              <Accordion className="work" defaultActiveKey="0" id="high">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc">
                     Conclusion 
                    </h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        {/* <ul className="Desc">
                          <li>Pre-Algebra</li>
                        </ul> */}
                        <p> {props.conclusion}</p>
                      </Col>
                      <br />
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>}
            </Col>
          </Row>

          <Row>
          {props.feedback  && 
            <Col md={12} sm={12} xs={12}>
             
              <Accordion className="work" defaultActiveKey="0" id="high">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc">
                     Student Feedback 
                    </h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        {/* <ul className="Desc">
                          <li>Pre-Algebra</li>
                        </ul> */}
                        <p>  {props.student_feedback?props.student_feedback:props.conclusion}</p>
                      </Col>
                      <br />
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>}
          </Row>
         
           </div>

          
      </div>
      <Footer />
    </div>
  );
};
export default ACT_READING_WRITING;
