import { Col, Container, Image, Row } from "react-bootstrap";
import "../../assets/css/portal.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AppLayout from "../../components/layout/AppLayout";
import { Lady, arrow, calendar, clock, heart, image12, profile, video } from "../mls_constants";

const StudentDashboard = () => {
  const programList = [{
    program_name: "MATH",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "ENGLISH",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "Science",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "SAT(Math)",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "SAT(Reading and Writing)",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  },
  {
    program_name: "Coding",
    week: "Mon,Wed",
    time: "5px CST",
    teacher_details: "James"
  }];

  const ProgramOffer = () => {
    return (
      <Row style={{ gap: "5px", justifyContent: "center" }}>

        {programList.map(function (po) {
          return (
            <Col md={4} sm={6} xs={12} className="prog_card">


              <Card border="light" >
                <div className="top-img">
                  <Image
                    src={video}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    fluid
                  />
                  <Image
                    src={heart}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    fluid
                  />
                </div>
                <div className="top-img">
                  <Button variant="primary">Learn More</Button>{' '}
                  <Button variant="primary">Rate Us</Button>{' '}
                </div>
                <Card.Body key={po.program_name}>
                  <Card.Title className="prg-title">{po.program_name}</Card.Title><br />
                  <Card.Text>  <Image
                    src={calendar}
                    alt="video call"
                    className="img-fluid"
                    width="25"
                    fluid
                  /> &nbsp;{po.week}</Card.Text>
                  <Card.Text>
                    <Image
                      src={clock}
                      alt="video call"
                      className="img-fluid"
                      width="25"
                      fluid
                    />&nbsp;{po.time}</Card.Text>
                  <Card.Text>
                    <Image
                      src={profile}
                      alt="video call"
                      className="img-fluid"
                      width="25"
                      fluid
                    />&nbsp;{po.teacher_details}</Card.Text>
                  <Button className="btn-portal" variant="primary" size="sm">Enroll Now</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    );
  }
  const Schedule_Calendar = () => {
    return (
      <Row>
        <Col md={4} sm={4} xs={12}>
          <Card className="second-card-student">
            <Card.Header>Schedule</Card.Header>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Algebra Class I</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Algebra Class II</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Algebra Class III</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Statistics Class I</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
            <Card.Body className="second-card-body-student">
              <img src={arrow} className="arrow" />
              <Card.Title>Statistics Class II</Card.Title>
              <Card.Text>
                <p>We do not store any details in our systems, instead we...</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={4} xs={12}>
          <iframe
            poster={image12}
            className="YoutubeBox-StuDash"
            src={`https://www.youtube.com/embed/XpScgwRKpgs`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            crossOrigin="anonymous"
          ></iframe>
        </Col>
      </Row>
    );
  }
  const Score_Report = () => {
    return (
      <div>
        <div className="Score">
          <div className="leftScore">
            <h5>What is Your previous Test Score?</h5>
            <h6>Jeo John's Score</h6>
            <p>Dont let your child miss out on the opportunity of taking this test.
              Your child can also become a star student of Algo Ninjas. This will help
              your child to be a placed at the right grade. Check out your score now!
            </p>
            <Button variant="primary">Take Re-Test</Button>
          </div>
          <div className="rightScore-Section">
            <div className="rightScore">
              <img src={Lady} className="Score-Lady" />
              <div className="rightScore-Sub1">
                <h3>Math</h3>
                <div className="rightScore-Sub-num1">
                  <p>4.3</p>
                </div>
              </div>
              <div className="rightScore-Sub2">
                <h3>English</h3>
                <div className="rightScore-Sub-num2">
                  <p>4.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ProgressReport">
          <div className="ProgressReport-desc">
            <h1>Progress Report</h1>
            <p>The following table stores progress reports from each program</p>
          </div>
          <div className="Table-Card">
            <Table striped bordered hover size="sm" className="Table-Card-tbl">
              <thead>
                <tr className="Table-Card-Head">
                  <th>Date</th>
                  <th>Program</th>
                  <th>Teacher</th>
                  <th>Progress Report</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td>Overall</td>
                  <td>1.3</td>
                  <td>1.3</td>
                  <td>1.3</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
                <tr >
                  <td>Grade 9</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>0%</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <AppLayout />
      <div className="main-portal-student">
        <div className="blanksSpace"></div>
        <Container fluid={false}>
          <Card className="first-card">
            <Card.Body>
              <Card.Title>
                <h2>
                  Did you check our trending Python Program?
                </h2>
              </Card.Title>
              <Card.Text className="first-card-body">
                Unlock a world of creativity and problem-solving for your child with our Python Programming program.
                Just like Avantika, who has excelled in her coding journey, your child can also become a coding superstar and
                embark on a path of endless possibilities.
              </Card.Text>
              <Button variant="warning">Learn More</Button>
              <img src={Lady} className="first-card-lady" />
            </Card.Body>
          </Card>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <h3 className="OurPrograms-student">Our Programs</h3><br /><br />
              <ProgramOffer />
              <Score_Report />
              <Schedule_Calendar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default StudentDashboard;