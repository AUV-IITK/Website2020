import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import anahita_exploded from "../../../../../assets/img/anahita/anahita_exploded.png";
import powerimg from "../../../../../assets/img/anahita/AnahitaElec.jpg";
import soft from "../../../../../assets/img/anahita/AnahitaSoft.jpg";

import "./subs.css";

function Posts() {
    return (
        <>
            <div className="section landing-section">
                <Container>
                    <Row>
                        <Col md="2"></Col>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="text-center mb-4 heading-main">
                                <b>SPECIFICATIONS</b>
                            </h2>
                        </Col>
                        <Col md="2"></Col>
                    </Row>
                    <Row>
                        <h3 className="small-heading ml-auto mr-auto">Mechanical</h3>
                    </Row>
                    <Row>
                        <Col lg="6" className="text-center my-auto imgCol">
                            <img src={anahita_exploded} className="w-100"></img>
                            <p className="small-heading-edited">
                                ANAHITA VEHICLE :- STRUCTURE
                            </p>
                        </Col>
                        <Col lg="6" className="featureCol my-auto">
                            <ul className="features-list">
                                <li >
                                    <b style={{fontWeight:600}}>Six</b> degrees of freedom.
                                </li>
                                <li >
                                    Weigth of <b style={{fontWeight:600}}>32 kg</b> with +1% buoyancy
                                </li>
                                <li >
                                    Max coefficient of drag at <b style={{fontWeight:600}}>0.6 m/s : 0.12</b>
                                </li>
                                <li >
                                    <b style={{fontWeight:600}}>8x T200 (Blue Robotics) thrusters</b> for locomotion
                                </li>
                                <li >
                                    <b style={{fontWeight:600}}>Pneumatics actuation</b > for torpedo shooting
                                </li>
                                <li >
                                    Fabricated using advanced in-house manufacturing facilities
                                    like <b style={{fontWeight:600}}>Abrasive Water-jet Machining</b>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <h3 className="small-heading ml-auto mr-auto">Electrical</h3>
                    </Row>
                    <Row>
                        <Col md="6" className="text-center my-auto imgCol">
                            <img src={powerimg} className="w-100"></img>
                            <p className="small-heading-edited">
                                COMPLETE ELECTRICAL ARCHITECTURE
                            </p>
                        </Col>
                        <Col md="6" className="my-auto featureCol">
                            <ul className="features-list">
                                <li >
                                    Powered by Two <b style={{fontWeight:600}}>25v Li-Po batteries</b>
                                </li>
                                <li>
                                    <b style={{fontWeight:600}}>Intel i7 NUC</b> for fast processing
                                </li>
                                <li >
                                    Two<b style={{fontWeight:600}}> IDS UI-5260SE-C-HQ Rev.4</b> cameras for 1080p video
                                    feed
                                </li>
                                <li >
                                    <b style={{fontWeight:600}}>Teledyne Pathfinder DVL</b> for velocity measurements.
                                </li>
                                <li >
                                    <b style={{fontWeight:600}}>Custom PCB</b> for ESCs and Micro-controller with Compact
                                    design
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <h3 className="small-heading ml-auto mr-auto">Software</h3>
                    </Row>
                    <Row>
                        <Col md="6" className="text-center my-auto imgCol">
                            <img src={soft} className="w-100"></img>
                            <p className="small-heading-edited">
                                SOFTWARE DATA AND CONTROL FLOW
                            </p>
                        </Col>
                        <Col md="6" className="my-auto featureCol">
                            <ul className="features-list">
                                <li>
                                    System integration through ROS on <b style={{fontWeight:600}}>Ubuntu 18.04</b>
                                </li>
                                <li >
                                    Simulation through <b style={{fontWeight:600}}>Gazebo and UWSim</b> to optimize testing
                                    time
                                </li>
                                <li >
                                    Making use of a <b style={{fontWeight:600}}>faster and simpler simulator</b> designed
                                    specifically for underwater vehicles
                                </li>
                                <li >
                                    New stack with{" "}
                                    <b style={{fontWeight:600}}>
                                        improved documentation, continuous deployment and optimised
                                        structure
                                    </b>
                                </li>
                                <li >
                                    Experimenting with different types of control systems -{" "}
                                    <b style={{fontWeight:600}}>model based & model free</b>
                                </li>
                                <li >
                                    <b style={{fontWeight:600}}>Code available on GitHub</b> with documentation under BSD-3
                                    License Clause
                                </li>
                            </ul>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Posts;
