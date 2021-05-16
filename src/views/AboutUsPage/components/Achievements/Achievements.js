import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import niotwin from '../../../../assets/img/niotwinner.png'
import desbot from '../../../../assets/img/anahita_design.jpg'
import atwork from '../../../../assets/img/newreplaced.jpg'
import './Achievements.css'

function Posts () {
  return (
        <>
            <div className="section landing-section ">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col xl="4" className="text-center">
                            <h3 className="mt-0 mb-3 small-heading">
                                {' '}
                                &nbsp; Undergraduate Roboticists{' '}
                            </h3>
                            <img src={atwork} className="border border-info w-100 large-image-responsiveness"/>
                            <p className="desc-ssk1">
                                Selected after a comprehensive recruitment, sharing our love for
                                robotics, we build low-cost robust AUV systems.
                            </p>
                        </Col>
                        <Col xl="4" className="text-center">
                            <h3 className="mt-0 mb-3 small-heading">
                                Ingenious Design & Creativity
                            </h3>
                            <img src={desbot} className="border border-info w-100 large-image-responsiveness"/>
                            <p className="desc-ssk1 ">
                                The designing process behind our latest vehicle, Anahita, has
                                been appreciated at the international level.
                            </p>
                        </Col>
                        <Col xl="4" className="text-center">
                            <h3 className="mt-0 mb-3 small-heading">
                                National Competition Winner
                            </h3>
                            <img src={niotwin} className="border border-info w-100 large-image-responsiveness"/>
                            <p className="desc-ssk1">
                                Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by
                                the National Insitute Of Ocean Technology, Chennai.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
  )
}

export default Posts
