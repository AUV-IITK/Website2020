import React, { useEffect } from 'react'
import anahitapic from 'assets/img/anahita-1.jpg'

import { Link } from 'react-router-dom'
import './AboutUs.css'
import { Container, Row, Col } from 'reactstrap'

function AboutUs () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
        <div>
            <div className=" text-center ">
                <Container className="" style={{ marginTop: '10rem' }}>
                    <div className=" col-12 text-center">
                        <h2 className="heading-main mt-5 mb-5">ABOUT US</h2>
                    </div>
                    <Row>
                        <Col className="mt-0 left-desc" xl="9">

                            <img src={anahitapic} className=" w-100"/>

                            <p className="description desc-ssk1">
                                We are a team of undergraduate students researching in the field
                                of marine robotics. The team started off in 2014, as the
                                brainchild of a group of enthusiastic engineers. From a team
                                with just an idea to create an impact on underwater robotics, we
                                have grown into a family of over 40 members, through consistent
                                dedication and hard work.
                            </p>
                            <p className="description desc-ssk1">
                                We have successfully designed and manufactured two robust
                                autonomous underwater vehicles (AUV), namely, Varun and Anahita.
                                These machines are capable of navigating in unknown
                                environments, performing acoustic localization, and identifying
                                objects using computer vision.{' '}
                            </p>
                            <br/>

                            <Link to='/about-us' className="btn-blue">
                                More
                            </Link>

                        </Col>

                        <div className="all-icons-container">
                            <div className=" single-icon-container">
                                <div className=" icon-ssk">
                                    <i className=" mt-4 fa fa-cogs fa-5x icon-responsive "/>
                                    <div className="description2">
                                        <h4 className=""><strong>2 Vehicles Made</strong></h4>

                                    </div>
                                </div>
                            </div>

                            <div className="single-icon-container">
                                <div className=" icon-ssk">
                                    <i className="  mt-4 fa fa-users fa-5x icon-responsive"/>
                                    {/* In order to align the icons center add the class 'icon-align' to each of the icon */}
                                    <div className="description2">
                                        <h4 className=""><strong>30 Members</strong></h4>

                                    </div>
                                </div>
                            </div>
                            <div className="single-icon-container">
                                <div className=" icon-ssk">
                                    <i className="mt-4 fa fa-briefcase fa-5x icon-responsive"/>
                                    <div className="description2">
                                        <h4 className=""><strong>30+ Projects </strong></h4>

                                    </div>
                                </div>
                            </div>
                            <div className="single-icon-container">
                                <div className=" icon-ssk">
                                    <i className="mt-4 fa fa-coffee fa-5x icon-responsive"/>
                                    <div className="description2">
                                        <h4 className=""><strong>400+ NightOuts</strong></h4>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Row>
                    <br/>
                    <br/>
                </Container>
            </div>
        </div>
  )
}

export default AboutUs
