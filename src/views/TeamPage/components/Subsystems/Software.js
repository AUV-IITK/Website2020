import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { MDBRipple } from 'mdb-react-ui-kit';
import software from "assets/img/softwaretransparent.jpg"
import softwareteam from "../../../../data/SoftwareTeam.json";
import "./Subsys.css"

const Software = () => {
    return (
        <div>
            <Container>
                {/* <Card className="bg-dark text-white">
                    <Card.Img src={software} alt="Card image" className="card-image" />
                    <Card.ImgOverlay>
                        <Card.Title className="mb-4 text-center subsystem-heading">SOFTWARE</Card.Title>
                        <Card.Text>
                            <p className="subsystem-text">
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
                            </p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card> */}
                <div className="card-background" style={{
                    backgroundImage: `url(${software})`, backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <Card.Body>
                        <Card.Title className="mb-4 text-center subsystem-heading">SOFTWARE</Card.Title>
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
            <div className="section text-center">
                <Container>
                    {
                        softwareteam.teamData.map((section) => {
                            return (
                                <div>
                                    <Row>
                                        {section.items.map((teamMember) => {
                                            return (
                                                <Col lg="4" className="text-center img-col mr-auto ml-auto">
                                                    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' >
                                                        <img src={require("assets/img/" + teamMember.image)}
                                                            className="content-image" />
                                                        <div className='hover-overlay'>
                                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                                                                <div className='overlay-text h-100 text-left'>
                                                                    {/* <h3 style={{ color: 'white' }}>This is a title</h3> */}
                                                                    <p className="overlay-text">{teamMember.text}</p>
                                                                    <ul className="social-list">
                                                                        <li>
                                                                            <a href={teamMember.facebook} target="blank">
                                                                                <i className="social fa fa-facebook fa-2x" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href={teamMember.linkedin} target="blank">
                                                                                <i className="social fa fa-linkedin fa-2x" />
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </MDBRipple>
                                                    <h5>{teamMember.name}</h5>
                                                    <h6>{teamMember.subheading}</h6>
                                                    {/* <img src={require("assets/img/" + teamMember.image)}
                                                        className="member-image" />
                                                    <h5>{teamMember.name}</h5>
                                                    <h6>{teamMember.subheading}</h6>
                                                    <div className="middle">
                                                        <ul className="social-list">
                                                            <li>
                                                                <a href={teamMember.facebook} target="blank">
                                                                    <i className="social fa fa-facebook fa-2x" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href={teamMember.linkedin} target="blank">
                                                                    <i className="social fa fa-linkedin fa-2x" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div> */}
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
