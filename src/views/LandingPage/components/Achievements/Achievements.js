import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import paper from '../../../../assets/img/Achievements/mech-paper.jpg'
import robosub from '../../../../assets/img/Achievements/robosub.jpg'
import niot from '../../../../assets/img/Achievements/niot.png'
import './Achievements.css'

function Posts () {
  return (
        <>
            <div className="section landing-section ">
                <Container>

                    <Row>
                        <Col className="heading-main" style={{ textAlign: 'center' }}>OUR ACHIEVEMENTS</Col>
                    </Row>

                    <div className="row ">

                        <Col sm="12" lg="4" className="text-center">
                            <h3 className="small-heading"/>
                            <img src={niot} className="border border-dark w-100 " alt=""/>
                            <p className="desc-ssk1">Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by the
                                National Insitute Of Ocean Technology, Chennai.</p>
                        </Col>

                        <Col sm="12" lg="4" className="text-center">
                            <h3 className="small-heading"/>
                            <img src={paper} className="w-100 " alt=""/>
                            <p className="desc-ssk1">Published a paper at IEEE OES Symposium 2018, on design and
                                development of an open frame AUV: Anahita (Our 2nd Gen Vehicle)</p>
                        </Col>

                        <Col sm="12" lg="4" className="text-center">
                            <h3 className="small-heading"/>
                            <img src={robosub} className="border border-dark w-100" alt=""/>
                            <p className="desc-ssk1">Qualified and Participated in Robosub-2019 held at TRANSDEC
                                Anechoic pool in San Diego, California.</p>
                        </Col>

                    </div>

                </Container>
            </div>

        </>
  )
}

export default Posts
