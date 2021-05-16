import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import {

  Container,
  Row,
  Col
} from 'reactstrap'

// eslint-disable-next-line no-unused-vars
function AboutUs () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
        <>
            <div className="section landing-section text-center ">
                <Container>
                    <div className=" col-12 text-center">
                        <h2 className="mb-2 heading-main ">ABOUT US</h2>
                    </div>

                    <Row>
                        <Col className="mt-0 left-desc" xl="12">

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

                        </Col>

                        <div className="row mt-3 mx-auto">
                            <div className="col-md-3 col-sm-6">
                                <div className=" icon-ssk">
                                    <i className=" mt-4 fa fa-cogs fa-5x"/>
                                    <div className="description">
                                        <h4 className=""><strong>2 Vehicles Made</strong></h4>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className=" icon-ssk">
                                    <i className="  mt-4 fa fa-users fa-5x"/>
                                    <div className="description">
                                        <h4 className=""><strong>30 Team Members</strong></h4>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className=" icon-ssk">
                                    <i className="mt-4 fa fa-briefcase fa-5x"/>
                                    <div className="description">
                                        <h4 className=""><strong>30+ Projects </strong></h4>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className=" icon-ssk">
                                    <i className="mt-4 fa fa-coffee fa-5x"/>
                                    <div className="description">
                                        <h4 className=""><strong>400+ NightOuts</strong></h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 col-md-12 align-items-center">
                            <Link to='/about-us' className="btn-blue text-center">
                                More
                            </Link>
                        </div>

                    </Row>
                    <br/>
                    <br/>
                </Container>
            </div>
        </>
  )
}

// export default AboutUs
