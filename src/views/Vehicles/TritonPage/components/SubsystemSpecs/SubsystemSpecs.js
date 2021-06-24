import React from "react";
import {Container, Row, Col, Accordion, Card} from "react-bootstrap";
import anahita_exploded from "../../../../../assets/img/anahita/anahita_exploded.png";
import powerimg from "../../../../../assets/img/anahita/AnahitaElec.jpg";
import soft from "../../../../../assets/img/anahita/AnahitaSoft.jpg";

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
                            <Col lg="4" className="text-center my-auto imgCol">
                                <img src={anahita_exploded} className="w-100"></img>
                                <p className="small-heading-edited">
                                    ANAHITA VEHICLE : STRUCTURE
                                </p>
                            </Col>
                            <Col lg="8" className="featureCol my-auto">
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
                            <Col md="8" sm={{ order: 'last' }} lg={{order:'first'}} xs={{ order: 'last' }} className="my-auto featureCol">
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
                            <Col md="4" className="text-center my-auto imgCol">
                                <img src={powerimg} className="w-100"></img>
                                <p className="small-heading-edited">
                                    ELECTRICAL ARCHITECTURE
                                </p>
                            </Col>
                        </Row>
                     </div>
                    <Row className="subsystem-headings">
                        <h3 className="small-heading">Software</h3>
                    </Row>
                    <div className="spec-container">
                        <Row>
                            <Col md="4" className="text-center my-auto imgCol">
                                <img src={soft} className="w-100"></img>
                                <p className="small-heading-edited">
                                    SOFTWARE DATA & CONTROL FLOW
                                </p>
                            </Col>
                            <Col md="8" className="my-auto featureCol">
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
