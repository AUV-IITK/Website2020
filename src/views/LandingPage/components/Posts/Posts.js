import React from 'react'
import { Link } from 'react-router-dom'
import './Posts.css'
import { Row, Col } from 'reactstrap'

function Posts () {
  return (
        <>
            <div className="section landing-section ">
                <div className="container-ssk">
                    <Row className="">
                        <Col md="2"/>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="text-center mb-5 heading-main">Posts</h2>
                        </Col>
                        <Col md="2"/>
                        <Col xl="6" className="text-center ">
                            <div className="post-ssk">
                                <h2 className="small-heading">ANSYS helps AUV-IITK design its latest vehicle
                                    Anahita</h2>
                                <p className="desc-ssk1">One of the primary stages in designing and modeling of an AUV
                                    is the study of the motion of the vehicle and the subsequent visualization of fluid
                                    flow across the body of the bot.</p>

                                <p className="desc-ssk1">Using ANSYS, we can produce 3D flow visualization. Using which
                                    we can identify vortex location, find streamlines of velocity across 3D and 2D
                                    profiles of the vehicle and find the total drag force on the robot.</p>
                                <Link to='/about-us' className="btn-blue">
                                    Continue Reading
                                </Link>
                            </div>
                        </Col>
                        <Col xl="6" className="text-center ">
                            <div className="post-ssk">
                                <h2 className="small-heading">7 Useful Tips for ROS Users</h2>
                                <p className="desc-ssk1">Earlier people had to write a large amount of code ranging
                                    from low-level driver functions to high-level control algorithms for their robots.
                                    I too experienced this pain when I started working on the underwater vehicle project
                                    in my undergraduate university. This approach sometimes made changing even one
                                    sensor
                                    on our system a daunting task. However, things changed when we started using Robot
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Operating System (ROS) as the framework for our robot's software stack. </p>
                                <Link to='/about-us' className="btn-blue">
                                    Continue Reading
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
  )
}

export default Posts
