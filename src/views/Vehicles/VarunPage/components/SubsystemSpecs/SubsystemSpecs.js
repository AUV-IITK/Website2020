import React from "react";
import {Container, Row, Col, Accordion, Card} from "react-bootstrap";

import mech_main from "../../../../../assets/img/varun/VARUN-AUV/MechanicalStructure.png";
import elec_main from "../../../../../assets/img/varun/VARUN-AUV/ArduinoAtmega.png";
import soft_main from "../../../../../assets/img/varun/VARUN-AUV/SoftwareFrameworks.png";

import "./subs.css";
import specs from "../../data.js";

import FadeIn from "../../../../Animations/FadeIn";

function Posts() {
    return (
        <>
        {
            <div className="section landing-section">
                <Container>
                    <div className="title-block">
                        <Row className="justify-content-center heading-components">
                            <div style={{textAlign:'center'}}>
                                <b>COMPONENTS</b>
                            </div>
                        </Row>    
                    </div>
                    <Row className="subsystem-headings">
                        <h3>Mechanical</h3>
                    </Row>
                    <FadeIn>
                    <div className="spec-container">
                        <Row>
                            <Col lg="5" className="text-center my-auto imgCol">
                                <img src={mech_main} alt="spec-img" className="w-100"></img>
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
                                                <Card.Body>
                                                    <div>
                                                        {data.content}
                                                    </div>
                                                    <div style={{display:'grid', placeItems:'center'}}>
                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/varun/VARUN-AUV/" + data.img)}/>}
                                                        <div className="card-image-description" style={{fontFamily:'monospace', textAlign:'center'}} >
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
                        </Row>
                     </div>
                     </FadeIn>
                    <Row className="subsystem-headings">
                        <h3>Electrical</h3>
                    </Row>
                    <FadeIn>
                    <div className="spec-container">
                        <Row>
                            <Col lg="8" sm={{ order: 'last' }} lg={{order:'first'}} xs={{ order: 'last' }} className="my-auto featureCol">
                                The Electrical system provides the interface between the processor and the other electronic devices. There will be three layers of stacks inside the hull, which will be used for mounting different electronic devices and PCBs.The Arduino used in Varun is the ATmega1280 microcontroller and has an operating voltage of 5V. It has 16 Analog input pins and 54 digital I/O pins (of which 15 provide PWM output). The open-source Arduino platform is used to process the input signals from the main processor and convert it into desired signals to the actuators like motor drivers and pneumatic system.
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
                                                 <Card.Body>
                                                    <div>
                                                        {data.content}
                                                    </div>
                                                    <div style={{display:'grid', placeItems:'center'}}>
                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/varun/VARUN-AUV/" + data.img)}/>} 
                                                        <div className="card-image-description" style={{fontFamily:'monospace', textAlign:'center'}} >
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
                            <Col lg="4" className="text-center my-auto imgCol">
                                <img src={elec_main} alt="spec-img" className="w-100"></img>
                                <p className="small-heading-edited">
                                    VARUN: ELECTRICAL ARCHITECTURE
                                </p>
                            </Col>
                        </Row>
                     </div>
                     </FadeIn>
                    <Row className="subsystem-headings">
                        <h3>Software</h3>
                    </Row>
                    <FadeIn>
                    <div className="spec-container">    
                        <Row>
                            <Col lg="4" className="text-center my-auto imgCol">
                                <img src={soft_main} alt="spec-img" className="w-100"></img>
                                <p className="small-heading-edited">
                                    VARUN: SOFTWARE ARCHIETECTURE
                                </p>
                            </Col>
                            <Col lg="8" className="my-auto featureCol">
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
                                                 <Card.Body>
                                                    <div>
                                                        {data.content}
                                                    </div>
                                                    <div style={{display:'grid', placeItems:'center'}}>
                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/varun/VARUN-AUV/" + data.img)}/>}
                                                        <div className="card-image-description" style={{fontFamily:'monospace', textAlign:'center'}} >
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
                            <Col md="3"></Col>
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
