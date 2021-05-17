import React from 'react'
import solidworks from 'assets/img/sponsors/solidworks.png'
import mathworks from 'assets/img/sponsors/mathworks.png'
import altium from 'assets/img/sponsors/altium.png'
import ansys from 'assets/img/sponsors/ansys.jpg'
import dord from 'assets/img/sponsors/dord-iitk.png'
import sparton from 'assets/img/sponsors/sparton.png'
import xsens from 'assets/img/sponsors/xsens.png'
import ids from 'assets/img/sponsors/ids.png'
import './Sponsors.css'
import { Container, Row, Col } from 'reactstrap'

function Sponsors () {
  return (
        <>
            <div className="section landing-section light-ssk" style={{ backgroundColor: 'yellow' }}>
                <Container>
                    <Row style={{ textAlign: 'center' }}>
                        <Col md="2"/>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="text-center heading-main">OUR SPONSORS</h2>
                            <br/>
                        </Col>
                        <Col md="2"/>
                        <br/>
                    </Row>
                    <Row style={{ textAlign: 'center' }} className="top-margin-reduce">
                        <Col md="3" sm="6">
                            <img src={altium} className="img-responsive1" alt=""/>
                        </Col>
                        <Col md="3" sm="6">
                            <img src={xsens} className="img-responsive1" alt=""/>
                        </Col>
                        <Col md="3" sm="6">
                            <img src={ids} className="img-responsive1" alt=""/>
                        </Col>
                        <Col md="3" sm="6">
                            <img src={ansys} className="img-responsive1" alt=""/>
                        </Col>
                    </Row>
                    <br/>
                    <Row style={{ textAlign: 'center' }}>

                        <Col md="4" sm="6">
                            <img src={sparton} className="img-responsive1" alt=""/>
                        </Col>

                        <Col md="4" sm="6">
                            <img src={mathworks} className="img-responsive1" alt=""/>
                        </Col>
                        <Col md="4" sm="12">
                            <img src={solidworks} className=" img-responsive1" alt=""/>
                        </Col>

                    </Row>
                    <br/>
                    <Row style={{ textAlign: 'center' }}>
                        <Col md="4" xs="2">
                        </Col>
                        <Col md="4" xs="12">
                            <img src={dord} className="img-responsive1" alt=""/>
                        </Col>

                        <Col md="4" xs="2">
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
  )
}

export default Sponsors
