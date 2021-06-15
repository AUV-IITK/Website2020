import React from "react";
import {Container, Row, Col, Accordion, Card} from "react-bootstrap";

// Carousel images
import m1 from "../../../../../assets/img/varun/VARUN-AUV/MechanicalStructure.png";
import m2 from "../../../../../assets/img/varun/VARUN-AUV/VarunFrame.png";
import m3 from "../../../../../assets/img/varun/VARUN-AUV/SidePlateDesign.png";
import m4 from "../../../../../assets/img/varun/VARUN-AUV/CentralHull.png";
import m5 from "../../../../../assets/img/varun/VARUN-AUV/LowerCameraCasing.png";
import m6 from "../../../../../assets/img/varun/VARUN-AUV/FrontCameraCasing.png";
import m7 from "../../../../../assets/img/varun/VARUN-AUV/HullInternalTray.png";
import m8 from "../../../../../assets/img/varun/VARUN-AUV/ConnectorAssembly.png";
import m9 from "../../../../../assets/img/varun/VARUN-AUV/SeaBotixThrusters.png";
import m10 from "../../../../../assets/img/varun/VARUN-AUV/TiberiusGuerillaPaintballTank.png";
import m11 from "../../../../../assets/img/varun/VARUN-AUV/PneumaticAssembly.png";
import m12 from "../../../../../assets/img/varun/VARUN-AUV/Torpedo.png";
import m13 from "../../../../../assets/img/varun/VARUN-AUV/AnsysFluidSimulation.png";
import m14 from "../../../../../assets/img/varun/VARUN-AUV/StressAnalysisOnAnsys.png";
import m15 from "../../../../../assets/img/varun/VARUN-AUV/PressureVariationAnsys.png";

import e1 from "../../../../../assets/img/varun/VARUN-AUV/ArduinoAtmega.png";
import e2 from "../../../../../assets/img/varun/VARUN-AUV/BatteryManagement.png";
import e3 from "../../../../../assets/img/varun/VARUN-AUV/OdroidX2.png";
import e4 from "../../../../../assets/img/varun/VARUN-AUV/NavStickIMU.png";
import e5 from "../../../../../assets/img/varun/VARUN-AUV/PressureSensorUS381.png";
import e6 from "../../../../../assets/img/varun/VARUN-AUV/MotorDrivers.png";

import s1 from "../../../../../assets/img/varun/VARUN-AUV/SoftwareFrameworks.png";
import s2 from "../../../../../assets/img/varun/VARUN-AUV/ROSArchitecture.png";
import s3 from "../../../../../assets/img/varun/VARUN-AUV/rqtgraph.png";
import s4 from "../../../../../assets/img/varun/VARUN-AUV/LogiTechCamera.png";
import s5 from "../../../../../assets/img/varun/VARUN-AUV/VisionAlgorithm.png";
import s6 from "../../../../../assets/img/varun/VARUN-AUV/PWMvsThrustGraph.png";



import VehicleCarousel from "views/Vehicles/VehicleCarousel";


import "./subs.css";
import specs from "../../data.js";

function Posts() {
    console.log(specs);
    return (
        <>
        {
            <div className="section landing-section">
                <Container>
                    <Row>
                        <Col md="2"></Col>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="text-center mb-4 heading-main">
                                <b>COMPONENTS</b>
                            </h2>
                        </Col>
                        <Col md="2"></Col>
                    </Row>
                    <Row className="subsystem-headings">
                        <h3 className="small-heading">Mechanical</h3>
                    </Row>
                    <div className="spec-container">
                        <Row>
                            <Col lg="5" className="text-center my-auto imgCol">
                                <VehicleCarousel images={[m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15]} />
                                <p className="small-heading-edited">
                                    VARUN: STRUCTURE
                                </p>
                            </Col>
                            <Col lg="7" className="featureCol my-auto">
                                Varun's mechanical system comprises an aluminium structural frame, pressure casings, and electromagnetic actuators. The mechanical parts were first designed in Solidworks and Autodesk Inventor and then improved using Ansys Workbench before its final fabrication using available in-house facilities at the institute.
                                <div style={{marginBottom:'20px'}}></div>
                                <Accordion defaultActiveKey="">
                                {
                                    specs.mechanical.map(
                                        (data) => (
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                                                {data.title}
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey={String(data.id)}>
                                                <Card.Body>{data.content}</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    )
                                }
                                </Accordion>
                            </Col>
                        </Row>
                     </div>
                    <Row className="subsystem-headings">
                        <h3 className="small-heading">Electrical</h3>
                    </Row>
                    <div className="spec-container">
                        <Row>
                            <Col md="7" sm={{ order: 'last' }} lg={{order:'first'}} xs={{ order: 'last' }} className="my-auto featureCol">
                                The Electrical system provides the interface between the processor and the other electronic devices. There will be three layers of stacks inside the hull, which will be used for mounting different electronic devices.The Arduino used in Varun is the ATmega 1280 microcontroller and has an operating voltage of 5V. It has 16 Analog input pins and 54 digital I/O pins (of which 15 provide PWM output). The open-source Arduino platform is used to process the input signals from the main processor and convert it into desired signals to the actuators like motor drivers and pneumatic system.
                                <div style={{marginBottom:'20px'}}></div>
                                <Accordion defaultActiveKey="">
                                {
                                    specs.electrical.map(
                                        (data) => (
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>

                                                {data.title}
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey={String(data.id)}>
                                                <Card.Body>{data.content}</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    )
                                }
                                </Accordion>
                            </Col>
                            <Col md="5" className="text-center my-auto imgCol">
                                <VehicleCarousel images={[e1, e2, e3, e4, e5, e6]} />
                                <p className="small-heading-edited">
                                    VARUN: ELECTRICAL ARCHITECTURE
                                </p>
                            </Col>
                        </Row>
                     </div>
                    <Row className="subsystem-headings">
                        <h3 className="small-heading">Software</h3>
                    </Row>
                    <div className="spec-container">
                        <Row>
                            <Col md="5" className="text-center my-auto imgCol">
                                <VehicleCarousel images={[s1, s2, s3, s4, s5, s6]} />
                                <p className="small-heading-edited">
                                    VARUN: SOFTWARE ARCHIETECTURE
                                </p>
                            </Col>
                            <Col md="7" className="my-auto featureCol">
                                The Software Architecture of Varun is based on the Robot Operating System (ROS) Software Framework from Willow Garage, which encompasses the underlying messaging infrastructure for inter-process communications in our distributed system.
                                <div style={{marginBottom:'20px'}}></div>
                                <Accordion defaultActiveKey="">
                                {
                                    specs.software.map(
                                        (data) => (
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>

                                                {data.title}
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey={String(data.id)}>
                                                <Card.Body>{data.content}</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    )
                                }
                                </Accordion>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                    </div>
                </Container>
            </div>
        }
        </>
    );
}

export default Posts;
