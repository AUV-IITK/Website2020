import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import software from "assets/img/softwaretransparent.jpg"
import softwareteam from "../../../../data/SoftwareTeam.json";
import "./Subsys.css"

const Software = () => {
    return (
        <div className="subsystem-section">
            <Container>
                <div className="card-background">
                    <Card.Body>
                        <Card.Text className="subsystem-text">
                            The software subsystem develops the algorithms
                            controlling the robot and making it autonomous. We use latest cutting edge
                            technologies in the world of robotics software. We use ROS(Robot Operating System)
                            as a communication middleware between all processes running on our robot.The software
                            stack of Anahita consists of dedicated layers for the hardware integration,
                            controls and navigation, motion planning, perception and acoustic localization.
                            The software subsytem carries out simulations Gazebo and UWSim to ensure  that
                            things work smoothly before actual testing.The main aim of software subsystem is
                            to write code, that is generic and error free, in order efficiently coordinate the
                            vehicles motion and enable it perform at full potential.
                        </Card.Text>
                    </Card.Body>
                </div>
            </Container>
            <div className="section  text-center">
                <Container>
                    {
                        softwareteam.teamData.map((section) => {
                            return (
                                <div>
                                    <Row>
                                        {section.items.map((teamMember) => {
                                            return (
                                                <Col lg="3" md="6" className="team text-center mr-auto ml-auto">
                                                    <div className="member">
                                                        <div className="member-img">
                                                            <div className="overlay">
                                                                <img src={require("assets/img/" + teamMember.image)}
                                                                    className="member-img img-fluid" alt="" />
                                                            </div>
                                                            <div className="social">
                                                                <a href={teamMember.facebook} target='_blank'><i className="fa fa-facebook fa-2x" /></a>
                                                                <a href={teamMember.linkedin} target='_blank'><i className="fa fa-linkedin fa-2x" /></a>
                                                            </div>
                                                        </div>
                                                        <div class="member-info">
                                                            <h4>{teamMember.name}</h4>
                                                            <span>{teamMember.subheading}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Container>
            </div>
        </div>
    )
}

export default Software
