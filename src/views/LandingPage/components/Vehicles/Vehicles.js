import React from 'react';
import triton from "assets/img/triton.jpg";
import { Link } from "react-router-dom";
import "./Vehicles.css"
import {
  Container,
  Row,
  Col
} from "react-bootstrap";

function Vehicles() {
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
            <Col sm="12" lg="5" className="text-center my-auto">
              <Link to='/vehicles/triton'>
                <img src={triton} className="border border-info w-100"></img>
              </Link>
            </Col>
            <Col sm="12" lg="7" className="text-center my-auto">
              <h2 className="mt-0 mb-3 small-heading">Triton</h2>
              <p className="text-center auv-description-primary">Anahita is an improvement over AUV-IITK’s previous vehicle Varun in terms of its modularity, robustness, ease of manufacturing and assembly. The vehicle is designed to perform complex spaceconstrained tasks and at the same time, not compromising on the maneuverability</p>
              <p className="text-center auv-description-primary">Anahita participated in RoboSub-2019, San Diego and was the first runner up at NIOT-SAVe, 2019.</p>
              <Link to='/vehicles/anahita' className="btn-blue text-center">
                Read More
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}
export default Vehicles;
