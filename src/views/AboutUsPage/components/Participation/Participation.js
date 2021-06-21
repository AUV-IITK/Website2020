import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import combinedimage from '../../../../assets/img/competitions.jpg'
import resimage from '../../../../assets/img/research.jpg'
import csrimage from '../../../../assets/img/projects.jpg'
import trainimage from '../../../../assets/img/training.png'
import './Participation.css'

function Posts() {
    return (
        <>
            <div className="section landing-section">
                <Container >
                    {/* <Row className="d-flex justify-content-center">
                        <Col sm="12" lg="6" className="text-center" >
                            <h2 className="mt-5 mb-3 small-heading">Student Competitions</h2>
                            <img src={combinedimage} className="w-100 large-image-responsiveness" />
                            <p className="auv-description-primary">
                                We aim to participate in National and International
                                student-level AUV compeititions - Robosub (organised by AUVSI),
                                Singapore AUV Challenge, and the NIOT-Student AUV Challenge.
                            </p>
                        </Col>
                        <Col sm="12" lg="6" className="text-center">
                            <h2 className="mt-5  mb-3 small-heading">Research Potential</h2>
                            <img src={resimage} className="w-100 large-image-responsiveness" />
                            <p className="auv-description-primary">
                                Contribute to the development in the fields of marine
                                technology, and implement cutting-edge research ideas to our
                                vehicles
                            </p>
                        </Col>
                    </Row >
                    <Row className="d-flex justify-content-center">
                        <Col sm="12" lg="6" className="mt-5 text-center">
                            <h2 className="mt-5 mb-3 small-heading">Training</h2>
                            <img src={trainimage} className=" w-100 large-image-responsiveness" />
                            <p className="auv-description-primary">
                                Team AUV-IITK provides training to all its new recruits in the
                                various field of Robotics. It is because of this training that
                                many of the past members of team AUV-IITK are pursuing their
                                careers in robotics and doing exceptionally well owing to their
                                strong foundation.
                            </p>
                        </Col>
                        <Col sm="12" lg="6" className=" mt-5 text-center">
                            <h2 className="mt-5 mb-3 small-heading ">Social Projects</h2>
                            <img src={csrimage} className="w-100 large-image-responsiveness" />
                            <p className="auv-description-primary">
                                Apart from Robotics competitions, team AUV-IITK also actively
                                participates various hackathon and undertakes projects owing its
                                responsibility to the society.
                            </p>
                        </Col>
                    </Row> */}
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home" className="tab-body">
                            <h2 >Training</h2>
                            <p >
                                Team AUV-IITK provides training to all its new recruits in the
                                various field of Robotics. It is because of this training that
                                many of the past members of team AUV-IITK are pursuing their
                                careers in robotics and doing exceptionally well owing to their
                                strong foundation.
                            </p>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <h2 >Training</h2>
                            <p >
                                Team AUV-IITK provides training to all its new recruits in the
                                various field of Robotics. It is because of this training that
                                many of the past members of team AUV-IITK are pursuing their
                                careers in robotics and doing exceptionally well owing to their
                                strong foundation.
                            </p>
                        </Tab>
                        <Tab eventKey="contact" title="Contact" >
                            <h2 >Training</h2>
                            <p >
                                Team AUV-IITK provides training to all its new recruits in the
                                various field of Robotics. It is because of this training that
                                many of the past members of team AUV-IITK are pursuing their
                                careers in robotics and doing exceptionally well owing to their
                                strong foundation.
                            </p>
                        </Tab>
                    </Tabs>
                </Container>
            </div>

        </>
    )
}

export default Posts
