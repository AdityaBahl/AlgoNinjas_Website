import { Col, Container, Image, Row } from "react-bootstrap";
import "../../assets/css/chat.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import video from "../../assets/img/video.png";
// import heart from "../../assets/img/heart.png";
// import calendar from "../../assets/img/calendar.png";
// import clock from "../../assets/img/clock.png";
// import profile from "../../assets/img/profile.png";
// import slider1 from "../../assets/img/slider1.jpg";
import AppLayout from "../../components/layout/AppLayout";
// import image11 from "../../assets/img/mlslogo.png";
// import Lady from '../../assets/img/lady.jpeg';
// import arrow from "../../assets/img/images.png";
import User from '../../assets/img/student/user.png';
import { profile } from "../mls_constants";
const StudentDashboard = () => {
    const programList = [{
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    },
    {
        teachers_name: "James Gross",
        teachers_roll: "Dedicated Counselor"
    }];

    const chatList = [{
        teachers_name: "Ritik",
        teachers_chat: "Hi Joe",
        teachers_time: "5 mins"
    },
    {
        teachers_name: "James",
        teachers_chat: "Hi Joe",
        teachers_time: "6 mins"
    },
    {
        teachers_name: "Roy",
        teachers_chat: "Hi Joe",
        teachers_time: "15 mins"
    },
    {
        teachers_name: "Kavien",
        teachers_chat: "Hi Joe",
        teachers_time: "25 mins"
    },
    {
        teachers_name: "Kavien,+3 more",
        teachers_chat: "Hi Joe",
        teachers_time: "33 mins"
    },
    {
        teachers_name: "Helli",
        teachers_chat: "Hi Joe",
        teachers_time: "45 mins"
    },
    {
        teachers_name: "Max",
        teachers_chat: "Hi Joe",
        teachers_time: "50 mins"
    },
    {
        teachers_name: "Marry",
        teachers_chat: "Hi Joe",
        teachers_time: "55 mins"
    },
    {
        teachers_name: "Thompson",
        teachers_chat: "Hi Joe",
        teachers_time: "1 hrs"
    },
    {
        teachers_name: "MV",
        teachers_chat: "Hi Joe",
        teachers_time: "1 hrs"
    },
    {
        teachers_name: "Kelly",
        teachers_chat: "Hi Joe",
        teachers_time: "2 hrs"
    },
    {
        teachers_name: "Sophie",
        teachers_chat: "Hi Joe",
        teachers_time: "15 hrs"
    },
    {
        teachers_name: "Alley",
        teachers_chat: "Hi Joe",
        teachers_time: "1 day"
    },
    {
        teachers_name: "Chris",
        teachers_chat: "Hi Joe",
        teachers_time: "1 day"
    },
    {
        teachers_name: "Aditya",
        teachers_chat: "Hi Joe",
        teachers_time: "2 days"
    },
    {
        teachers_name: "Musaib",
        teachers_chat: "Hi Joe",
        teachers_time: "2 days"
    },
    {
        teachers_name: "Viraat Rajputana",
        teachers_chat: "Hi Joe",
        teachers_time: "2 days"
    },
    {
        teachers_name: "Bhole Shankar",
        teachers_chat: "Hi Joe",
        teachers_time: "2 days",
    },
    ]
    const Chatss = () => {
        return (
            <Row style={{ gap: "5px", justifyContent: "center" }}>
                {chatList.map(function (po) {
                    return (
                        <Col className="teachers_chat">
                            <Card border="light" >
                                <div className="top-img-teacher-chat">
                                    <Image
                                        src={profile}
                                        alt="video call"
                                        className="img-fluid"
                                        width="50"
                                        fluid
                                    />
                                </div>
                                <Card.Body key={po.teachers_name}>
                                    <Card.Title className="teacher-ChatTitle">{po.teachers_name}</Card.Title><br />
                                    <Card.Subtitle className="teacher-ChatSubtitle">{po.teachers_chat}</Card.Subtitle><br />
                                    <Card.Subtitle className="teacher-ChatTime">{po.teachers_time}</Card.Subtitle><br />
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        );
    }
    const Conversations = () => {
        return (
            <div className="convo">
                <div className="convo-header">
                    <img src={User} />
                    <h5>Start A New Conversation</h5>
                    <p>Start a chat with the program teachers!</p>
                </div>
                <div className="divider-convo"></div>
                <div className="convo-content">
                    <Chatss />
                </div>
            </div>
        );
    }
    const Teachers = () => {
        return (
            <Row style={{ gap: "5px", justifyContent: "center" }}>

                {programList.map(function (po) {
                    return (
                        <Col md={4} sm={6} xs={12} className="teachers_card">
                            <Card border="light" >
                                <div className="top-img-teacher">
                                    <Image
                                        src={profile}
                                        alt="video call"
                                        className="img-fluid"
                                        width="50"
                                        fluid
                                    />
                                </div>
                                <Card.Body key={po.teachers_name}>
                                    <Card.Title className="teacher-title">{po.teachers_name}</Card.Title><br />
                                    <Card.Subtitle className="teacher-subtitle">{po.teachers_roll}</Card.Subtitle><br />
                                    <Button className="btns" variant="secondary">Send Message</Button>{' '}
                                    <Button className="btns" variant="danger">Book Time Slot</Button>{' '}
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        );
    }
    return (
        <>
            <AppLayout />
            <div className="main-portal-student">
                <div className="blanksSpace"></div>
                <Container fluid={false}>
                    <h2 className="chat-title">
                        Chat Room with Teachers
                    </h2>
                    <Row>
                        <Col>
                            <Conversations />
                        </Col>
                        <Col md={12} sm={12} xs={12} className="tchrs-cards">
                            <Teachers />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default StudentDashboard;