import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import paper from '../../../../assets/img/Achievements/mech-paper.jpg'
import robosub from '../../../../assets/img/Achievements/robosub2021.jpeg'
import niot from '../../../../assets/img/Achievements/niot.png'
import './Achievements.css'
import { Link } from 'react-router-dom'

function Posts() {
    return (
        <>
            <div className="section landing-section ">
                <Container>

                    <Row>
                        <Col className="heading-main" style={{ textAlign: 'center' }}>OUR ACHIEVEMENTS</Col>
                    </Row>

                    <div className="row ">
                        <Col sm="12" lg="8" className="text-center">
                            <h3 className="small-heading" />
                            <Link to='/events'>
                                <img src={robosub} className="border border-dark w-100 " alt="" style={{ height: '81%' }} />
                            </Link>
                            <p className="auv-description-primary text-center">Participated in Robosub-2021. Secured 3rd position in Website
                                category, 4th and 6th in Skills Video category and 16th in TDR category.</p>
                        </Col>
                        <Col sm="12" lg="4" className="text-center">
                            <Row>
                                <Col sm="12" className="text-center">
                                    <h3 className="small-heading" />
                                    <img src={niot} className="border border-dark w-100 " alt="" />
                                    <p className="auv-description-primary text-center">Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by the
                                        National Insitute Of Ocean Technology, Chennai.</p>
                                </Col>
                                <Col sm="12" className="text-center">
                                    <h3 className="small-heading" />
                                    <img src={paper} className="w-100" alt="" />
                                    <p className="auv-description-primary text-center">Published a paper at IEEE OES Symposium 2018, on design and
                                        development of an open frame AUV: Anahita (Our 2nd Gen Vehicle)</p>
                                </Col>
                            </Row>

                        </Col>

                        {/* <Col sm="12" lg="4" className="text-center">
                            <h3 className="small-heading" />
                            <img src={niot} className="border border-dark w-100 " alt="" />
                            <p className="auv-description-primary text-center">Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by the
                                National Insitute Of Ocean Technology, Chennai.</p>
                        </Col> */}

                    </div>

                </Container>
            </div>

        </>
    )
}

export default Posts
