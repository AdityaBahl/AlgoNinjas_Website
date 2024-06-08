import React, { Component } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/css/program.css";
import { Helmet } from 'react-helmet';
import { Link } from "react-scroll";
// import { Link, useLocation } from 'react-router-dom';

import { Container, Row, Col, Accordion, Image } from "react-bootstrap";

import { b1, b2, b3, clgg, hgs, img1, it_img } from "./mls_constants";
const Programs = () => {
  const data_science=[{title:'Fundamental of AI',value:'Week 2-5'},{title:'Python',value:'Week 2-5'},
  {title:'Basic Excel',value:'Week 6'},
  {title:'SQL',value:'Week 7-9'},
  {title:'Machine Learning',value:'Week 10-14'},
  {title:'Math & Statistics',value:'Week 15-16'},
  {title:'Deep Learning',value:'Week 17-21'}];
  const data_analytics=[{title:'Fundamental of AI',value:'Week 2-5'},{title:'MS Excel',value:'Week 2-5'},
  {title:'Tableau',value:'Week 6'},
  {title:'PowerBI',value:'Week 7-9'},
  {title:'SQL',value:'Week 10-14'},
  {title:'Basic Math & Statistics',value:'Week 15-16'},
  {title:'Python',value:'Week 17-21'},
  {title:'Basic ML',value:'Week 17-21'}];
  const data_engineer=[{title:'Python & SQL',value:'Week 2-5'},
  {title:'Introduction to Big Data, Hadoop & Mapreduce',value:'Week 6'},
  {title:'Hive',value:'Week 7-9'},
  {title:'Scoop & NoSql',value:'Week 10-14'},
  {title:'Kafka & Scala',value:'Week 15-16'},
  {title:'Spark & Big Data Cloud',value:'Week 17-21'}]
 const BasicTable=(props)=>{
  
  return (
    <ul className="Desc">

    {props.data && props.data.map(d=>
    
        <li>{d.title}</li>
      
      )}
  </ul>
  )
 }
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
        <img src={img1} alt="first Template" />
        {/* <h2 class="our-program-h">Our Program</h2> */}
      </div>
      <div className="main-prg">
        <div className="btn">
          <Link to="data_science" smooth={true} duration={500} className="yo">
            <h3>Data Science & Analytics Courses </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="web_development" smooth={true} duration={500} className="yo">
            <h3>Programming Courses </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="high" smooth={true} duration={500} className="yo">
            <h3>Digital Marketing  Courses  </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="elementary" smooth={true} duration={500} className="yo">
            <h3>STEM Courses </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="test" smooth={true} duration={500} className="yo">
            <h3>Design Courses </h3>
          </Link>
        </div>
        <div className="btn">
          <Link to="it" smooth={true} duration={500} className="yo">
            <h3>Stock Crypto & Blockchain Courses </h3>
          </Link>
        </div>

        {/* <div className="btn">
          <Link to="college" smooth={true} duration={500} className="yo">
            <h3>College </h3>
          </Link>
        </div> */}
        {/* <div className="mt-10-nav-login-btn">
          <p1 style={{ marginLeft: "23%" }}>2 - 12</p1>
        </div> */}
        <div className="mainsection" style={{ marginTop: "5%", padding: "5%" }}>
          <Row>
            <Col md={12} sm={12} xs={12} class="container">
              <Accordion className="work" defaultActiveKey="0" id="data_science">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc">
                      <span>
                        <Image
                          src={hgs}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Data Science & Analytics
                      {

                      }
                    </h1>
                  </Accordion.Header>
                  <Accordion.Body>
                  <Row className="p-5"  >
                      <Col md={10} >
                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              DATA SCIENCE{" "}
                              {/* <img
                                alt="SAT"
                                src={arrow_img}
                                className="arrow_down"
                              /> */}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                          <BasicTable data={data_science}/>
                          </Accordion.Body>
                        </Accordion>

                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              DATA ANALYTICS{" "}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                          <BasicTable data={data_analytics}/>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      <Col md={10}>
                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              DATA ENGINEER{" "}
                              {/* <img
                                alt="AP"
                                src={arrow_img}
                                className="arrow_down"
                              /> */}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                          <BasicTable data={data_engineer}/>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion className="work" defaultActiveKey="0" id="web_development">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc">
                      <span>
                        <Image
                          src={hgs}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Programming
                      {

                      }
                    </h1>
                  </Accordion.Header>
                  <Accordion.Body>
                  <Row className="p-5"  >
                      <Col md={10} >
                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                            Web, App Development{" "}
                              {/* <img
                                alt="SAT"
                                src={arrow_img}
                                className="arrow_down"
                              /> */}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                          <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>HTML & CSS</li>
                          <li>Javascript, Boostrap & Jquery</li>
                          <li>Mern Stack Development (MongoDB, Express, React, Node)</li>
                          <li>Andriod, IOS App Development</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                          </Accordion.Body>
                        </Accordion>

                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                            Software Testing & Quality Assurance{" "}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                          <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>Manual Testing</li>
                          <li> Automation Testing</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      <Col md={10}>
                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                              Trending IT Courses{" "}
                              {/* <img
                                alt="AP"
                                src={arrow_img}
                                className="arrow_down"
                              /> */}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                          <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>Basic & Competitive Programming</li>
                          <li> Data Structure & Alogrithm</li>
                          <li> DBMS, Operating System & System Design</li>
                          <li> Devops & Cloud Computing</li>
                          <li> Networking , Cuber Security, Networking , Ethical Hacking</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion className="work" defaultActiveKey="0" id="high">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h1 className="rowsDesc">
                      <span>
                        <Image
                          src={hgs}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Digital Marketing
                      {

                      }
                    </h1>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>Search Engine Optimization</li>
                          <li>Content Marketing</li>
                          <li>Social Media Marketing </li>
                          <li>Email Marketing</li>
                          <li>Affiliate Marketing</li>
                          <li>Influencer Marketing</li>
                          <li>Video Marketing</li>
                        </ul>
                      </Col>
                      <br />
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion className="work" defaultActiveKey="0" id="elementary">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <Image
                          src={hgs}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      STEM Courses
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>Science Lab</li>
                          <li>lego Robotics</li>
                          <li>Drone & Aerospace</li>
                          <li>Solar & Electric Vehicle</li>
                          <li>Abacus & Vedic Math</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


              {/* 2nd */}
              <Accordion className="work" defaultActiveKey="1" id="test">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h3 className="rowsDesc">
                      <span>
                        <img
                          src={b2}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                        />
                      </span>{" "}
                      Design Courses
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                            UI/UX Design{" "}
                              {/* <img
                                alt="SAT"
                                src={arrow_img}
                                className="arrow_down"
                              /> */}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                            <li>Graphic Design</li>
                              <li>Video Editing</li>
                              <li>Photoshop Illustrator</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion>

                        <Accordion defaultActiveKey="1">
                          <Accordion.Item eventKey="1"></Accordion.Item>
                          <Accordion.Header>
                            <p className="rowsDesc">
                            Interior Designing{" "}
                            </p>{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="Desc">
                              
                              <li>CAD</li>
                              <li>CAM</li>
                              <li>Auto CAD</li>
                              <li>Auto Desk</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion>
                      </Col>
                      
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              

              {/* <Accordion className="work" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <Image
                          src={b2}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Other Test Prep
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>AMC 8</li>
                          <li>AMC 10</li>
                          <li>SSAT</li>
                          <li>STAAR</li>
                          <li>MATHCOUNTS</li>
                          <li>TERRANOVA</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
              <Accordion className="work" defaultActiveKey="0" id="it">
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ background: "white" }}>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <Image
                          src={it_img}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                          fluid
                        />
                      </span>{" "}
                      Stock , Crypto & Blockchain
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={12}>
                        <ul className="Desc">
                          <li>Stock Marketing & Trading</li>
                          <li>Blockchain technologies</li>
                          <li>Crypto currency</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* 4rd  */}
              {/* <Accordion className="work" defaultActiveKey="3" id="college">
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <h3 className="rowsDesc">
                      <span>
                        <img
                          src={clgg}
                          alt="img"
                          className="img-fluid"
                          width="40"
                          style={{ marginTop: "-20px" }}
                        />
                      </span>{" "}
                      College
                      {

                      }
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={6}>
                        <ul className="Desc">
                          <li>Linear Algebra</li>
                          <li>Multivariable Calculus</li>
                          <li>Discrete Math</li>
                          <li>Differential Equations</li>
                          <li>College Math</li>
                          <li>College Statistics</li>
                          <li>College Physics</li>
                        </ul>
                      </Col>
                      <Col md={6}>
                        <ul className="Desc1">
                          <li>College Chemistry</li>
                          <li>Organic Chemistry</li>
                          <li>College Biology</li>
                          <li>Molecular Biology</li>
                          <li>College Genetics</li>
                          <li>Anatomy and Physiology</li>
                          <li>College English</li>
                         <li> Interior Designing: <br/></li> 
                         CAD CAM Autocad Autodesk
                          <li>Stock marketing & trading</li>
                        </ul>
                      </Col>
                      <hr />
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </Col>
          </Row>

          <div style={{ marginTop: "5%" }}></div>

          <div className="white">
            <Container fluid={true}>
              <Row >
                {/* <div className="prefChoice"> */}
                  <Col md="12" xs="12" sm="12">
                  <h3 className="program_div">Why is Algo Ninjas the preferred choice for effective learning and academic success?</h3>
                  </Col>
                {/* </div> */}

                <Col
                  md="4" sm="11" xs="11"
                  text-center
                  mt="5"
                  style={{ marginTop: "10vh" }}
                >
                  <div className="bottomSection">
                    <img
                      src={b1}
                      className="img-fluid"
                      alt="course"
                    />
                    <h3 className="Ind-learn">Individualized Learning</h3>
                    <p className="Flex-learn">
                      Flexible learning at Algo Ninjas allows students to
                      practice at their own pace, addressing knowledge gaps
                      before advancing their learning journey.
                    </p>
                    <br />
                  </div>
                </Col>
                <Col md="4" sm="11" xs="11" style={{ marginTop: "10vh" }}>
                  <div className="bottomSection">
                    <img
                      src={b2}
                      className="img-fluid"
                      alt="course"
                    />
                    <h3 className="Ind-learn">Reliable Resources</h3>
                    <p className="Flex-learn">
                      Algo Ninjas offers a comprehensive library of
                      expert-created content, carefully aligned with
                      educational standards. Our collection includes a wide
                      range of subjects such as math, science, English,
                      coding, test preparation, and more. All of our resources
                      are meticulously crafted and accessible to both learners
                      and teachers, ensuring a high-quality learning
                      experience without any cost barriers.
                    </p>
                    <br />
                    <br />
                  </div>
                </Col>
                <Col md="4" sm="11" xs="11" style={{ marginTop: "10vh" }}>
                  <div className="bottomSection">
                    <img
                      src={b3}
                      className="img-fluid"
                      alt="empower"
                    />
                    <h3 className="Ind-learn">Empowering Educators</h3>
                    <p className="Flex-learn">
                      Algo Ninjas empowers teachers to identify and address
                      gaps in their students' understanding, providing them
                      with the tools and resources needed to personalize
                      instruction and meet the unique needs of each learner.
                      By leveraging our platform, teachers can effectively
                      tailor their teaching strategies to ensure every student
                      receives the support and guidance required for academic
                      success.
                    </p>
                    <br />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Programs;
