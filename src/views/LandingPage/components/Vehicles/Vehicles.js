import React from 'react'
import varun from 'assets/img/varun/varun-underwater.jpg'
import anahita from 'assets/img/anahita/anahita-underwater.png'
import { Link } from 'react-router-dom'
import './Vehicles.css'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

function Vehicles () {
  return (
        <>
            <div className="section landing-section mt-5">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col className="col-12">
                            <h2 className="text-center heading-main">VEHICLES</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" lg="5" className="text-center">
                            <h2 className="mt-0 mb-3 small-heading">Varun</h2>
                            <Link to='/vehicles/varun'>
                                <img src={varun} className="border border-info w-100" alt=""/>
                            </Link>

                            <p className="text-center desc-ssk1">Varun was the first Autonomous Underwater Vehicle
                                developed by our team. With a modular design for easy assembly and installation, Varun
                                could be used as a staging vehicle for carrying out experiments, autonomous underwater
                                inspection and data collection. It has upto four hours of continuous operation
                                capacity.</p>
                            <p className="text-center desc-ssk1">Bot Varun was the first runner up in NIOT-SAVe
                                2016.</p>

                        </Col>
                        <Col sm="0" lg="2">
                        </Col>
                        <Col sm="12" lg="5" className="text-center">
                            <h2 className="mt-0 mb-3 small-heading">Anahita</h2>
                            <Link to='/vehicles/anahita'>
                                <img src={anahita} className="border border-info  w-100" alt=""/>
                            </Link>
                            <p className="text-center desc-ssk1">Anahita is an improvement over AUV-IITK’s previous
                                vehicle Varun in terms of its modularity, robustness, ease of manufacturing and
                                assembly. The vehicle is designed to perform complex spaceconstrained tasks and at the
                                same time, not compromising on the maneuverability</p>
                            <p className="text-center desc-ssk1">Anahita participated in RoboSub-2019, San Diego and was
                                the first runner up at NIOT-SAVe, 2019.</p>

                        </Col>
                    </Row>
                </Container>
            </div>

        </>
  )
}

export default Vehicles
