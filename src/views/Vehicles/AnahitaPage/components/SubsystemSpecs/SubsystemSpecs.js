import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import mech_main from "../../../../../assets/img/anahita/mechmain.png";
import powerimg from "../../../../../assets/img/anahita/AnahitaElec.jpg";
import soft from "../../../../../assets/img/anahita/AnahitaSoft.jpg";

import "./subs.css";
import specs from "../../data.js";

import FadeIn from "../../../../Animations/FadeIn";

function Posts() {
    console.log(specs);
    return (
        <>
            {
                <div className="section landing-section">
                    <Container>
                        <div className="title-block">
                            <Row className="justify-content-center heading-components">
                                <div style={{ textAlign: 'center' }}>
                                    <b style={{ fontSize: "4rem" }}>COMPONENTS</b>
                                </div>
                            </Row>
                        </div>
                        <Row className="subsystem-headings">
                            <h3>Mechanical</h3>
                        </Row>
                        <FadeIn>
                            <div className="spec-container">
                                <Row>
                                    {/* <Col lg="5" className="text-center my-auto imgCol">
                                <img src={mech_main} alt="spec-img" className="w-100"></img>
                                <p className="small-heading-edited">
                                    ANAHITA VEHICLE : STRUCTURE
                                </p>
                            </Col> */}
                                    <Col lg="1"></Col>
                                    <Col lg="10" className="featureCol my-auto">
                                        The mechanical subsystem is responsible for design and manufacture of the vehicle. Anahita’s mechanical system consists of the vehicle’s frame, grabber, marker dropper, torpedo, connectors and penetrators. The mechanical design of Anahita is made more modular, easy to assemble and robust as compared to its predecessor Varun. Furthermore, the addition of interchangeable components and task specific parts increases the vehicle's modularity significantly.
                                        <div style={{ marginBottom: '20px' }}></div>
                                        <Accordion defaultActiveKey="">
                                            {
                                                specs.mechanical.map(
                                                    (data) => (
                                                        <Card className="card-plain spec-card">
                                                            <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                                                                {data.title}
                                                            </Accordion.Toggle>
                                                            <>
                                                                <Accordion.Collapse eventKey={String(data.id)}>
                                                                    <Card.Body>
                                                                        <div>
                                                                            {data.content}
                                                                        </div>
                                                                        <div style={{ display: 'grid', placeItems: 'center' }}>
                                                                            {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/anahita/" + data.img)} />}
                                                                            <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                                {data.imgDesc}
                                                                            </div>
                                                                        </div>
                                                                    </Card.Body>
                                                                </Accordion.Collapse>
                                                            </>
                                                        </Card>
                                                    )
                                                )
                                            }
                                        </Accordion>
                                    </Col>
                                    <Col lg="1"></Col>
                                </Row>
                            </div>
                        </FadeIn>
                        <Row className="subsystem-headings">
                            <h3>Electrical</h3>
                        </Row>
                        <FadeIn>
                            <div className="spec-container">
                                <Row>
                                    <Col lg="1"></Col>
                                    <Col lg="10" className="my-auto featureCol">
                                        The Electrical System in Anahita acts as an interface between the mechanical structure and software logic. It is designed for providing power, driving actuators and interfacing with various sensors installed in the robot. Major improvements over Varun's electrical system are the custom made PCBs designed to suit the specific needs of Anahita.

                                        <div style={{ marginBottom: '20px' }}></div>
                                        <Accordion defaultActiveKey="">
                                            {
                                                specs.electrical.map(
                                                    (data) => (
                                                        <Card className="card-plain spec-card">
                                                            <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                                {data.title}
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={String(data.id)}>
                                                                <Card.Body>
                                                                    <div>
                                                                        {data.content}
                                                                    </div>
                                                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/anahita/" + data.img)} />}
                                                                        <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                            {data.imgDesc}
                                                                        </div>
                                                                    </div>
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    )
                                                )
                                            }
                                        </Accordion>
                                    </Col>
                                    <Col lg="1"></Col>
                                    {/* <Col md="5" className="text-center my-auto imgCol">
                                <img src={powerimg} alt="spec-img" className="w-100"></img>
                                <p className="small-heading-edited">
                                    ELECTRICAL ARCHITECTURE
                                </p>
                            </Col> */}
                                </Row>
                            </div>
                        </FadeIn>
                        <Row className="subsystem-headings">
                            <h3>Software</h3>
                        </Row>
                        <FadeIn>
                            <div className="spec-container">
                                <Row>
                                    {/* <Col md="5" className="text-center my-auto imgCol">
                                <img src={soft} alt="spec-img" className="w-100"></img>
                                <p className="small-heading-edited">
                                    SOFTWARE DATA & CONTROL FLOW
                                </p>
                            </Col> */}
                                    <Col lg="1"></Col>
                                    <Col lg="10" className="my-auto featureCol">
                                        The software stack of Anahita consists of dedicated layers for the hardware integration, controls and navigation, motion planning, perception and acoustic localization. It is built over the Robot Operating System (ROS) framework by Willow Garage, which acts as a communication middleware between all processes running on our robot.

                                        <div style={{ marginBottom: '20px' }}></div>
                                        <Accordion defaultActiveKey="">
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey='100'>
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                    Architecture
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey='100' >
                                                    <Card.Body>
                                                        <div>
                                                            In order to make the code modular, it is divided into five layers:
                                                            <ol>
                                                                <li><b>Master Layer:</b> The master layer is responsible for initiating each process. It instructs the task handler layer to execute node sequence in which the task has to be performed.</li>
                                                                <li><b>Task Handler Layer:</b> This layer has task-specific code written for each task and uses a motion library to achieve the target.</li>
                                                                <li><b>Motion Library:</b> This layer assists the task handler layer to achieve a goal. It consists of six PID control loops for six degrees of freedom.</li>
                                                                <li><b>Vision Layer: </b>The vision layer is responsible for providing the information about the mission elements present in the arena. It detects the targets from the raw image of the camera and provides the coordinates of the vehicle to the task handler layer.</li>
                                                                <li><b>Hardware Layer:</b> This layer is responsible for integrating sensors with the software stack. It collects all the information from the sensors and advertises it over topics from where any node that needs it might want to take it. The design specifications are such that it is independent and extendable. As a result, the software can scale concerning the tasks or missions to accomplish.</li>
                                                            </ol>
                                                        </div>
                                                        <div style={{ display: 'grid', placeItems: 'center' }}>
                                                            <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/anahita/AnahitaSoft.jpg")} />
                                                            <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                SOFTWARE DATA & CONTROL FLOW
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            {
                                                specs.software.map(
                                                    (data) => (
                                                        <Card className="card-plain spec-card">
                                                            <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                                {data.title}
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={String(data.id)}>
                                                                <Card.Body>
                                                                    <div>
                                                                        {data.content}
                                                                    </div>
                                                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/anahita/" + data.img)} />}
                                                                        <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                            {data.imgDesc}
                                                                        </div>
                                                                    </div>
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    )
                                                )
                                            }
                                        </Accordion>
                                    </Col>
                                    <Col lg="1"></Col>
                                </Row>
                            </div>
                        </FadeIn>
                    </Container>
                </div>
            }
        </>
    );
}

export default Posts;
