import StudentDashboard from "./student_dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blank from "../Blank";
import NavBarComponent from "../../components/accountNavbar";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../../assets/css/portal.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AppLayout from "../../components/layout/AppLayout";
import dp from '../../assets/img/student/user.png';
import Calendar from 'react-calendar';
import { Lady, arrow, calendar, logo, star } from "../mls_constants";
const Portal = () => {
    const programList = [];
    console.log(`https://youtube.com/embed/XpScgwRKpgs?autoplay=0`);
    return (
        <div>
            <AppLayout />
            <div className="main-portal">
                <div className="blanksSpace"></div>
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
                <Card className="second-card">
                    <Card.Header>Schedule</Card.Header>
                    <Card.Body className="second-card-body">
                        <img src={arrow} className="arrow" />
                        <Card.Title>Algebra Class I</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="second-card-body">
                        <img src={arrow} className="arrow" />
                        <Card.Title>Algebra Class II</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="second-card-body">
                        <img src={arrow} className="arrow" />
                        <Card.Title>Algebra Class III</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="second-card-body">
                        <img src={arrow} className="arrow" />
                        <Card.Title>Statistics Class I</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="second-card-body">
                        <img src={arrow} className="arrow" />
                        <Card.Title>Statistics Class II</Card.Title>
                        <Card.Text>
                            <p>We do not store any details in our systems, instead we...</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="ytBox">
                    <iframe
                        poster={logo}
                        className="YoutubeBox-portal"
                        src={`https://www.youtube.com/embed/XpScgwRKpgs`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        crossOrigin="anonymous"
                    ></iframe>
                </div>
                <Card className="cal-portal">
                    <Card.Header>
                        <h5>Your Calendar</h5>
                    </Card.Header>
                    <Card.Body className="cal-body">
                        <Calendar />
                    </Card.Body>
                </Card>
                <Card className="calendar-portal">
                    <Card.Header className="calendar-portal-heading">
                        <h5>August, 2023</h5>
                        <p>Events/Classes</p>
                    </Card.Header>
                    <Card.Body className="calendar-portal-body">
                        {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
                            <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
                                <ListGroup.Item className="calList-portal-dp">
                                    <img src={dp} />
                                </ListGroup.Item>
                                <ListGroup.Item className="calList-portal">
                                    <h6>Math</h6>
                                    <p>James/Joe</p>
                                </ListGroup.Item>
                                <ListGroup.Item className="calList-portal">
                                    <p>August 13, 2023</p>
                                    <p>10:00 AM CST</p>
                                </ListGroup.Item>
                                <ListGroup.Item className="calList-portal-cal">
                                    <img src={calendar} />
                                </ListGroup.Item>
                                <ListGroup.Item className="calList-portal-primary">
                                    <Button variant="danger">Primary</Button>{' '}
                                </ListGroup.Item>
                                <ListGroup.Item className="calList-portal-join">
                                    <Button variant="primary">Join</Button>{' '}
                                </ListGroup.Item>
                                <ListGroup.Item className="calList-portal-star">
                                    <img src={star} />
                                </ListGroup.Item>
                            </ListGroup>
                        ))}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Portal;