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
            <Col sm="12" lg="7" className="my-auto">
              <h2 className="text-center mt-0 mb-3 vehicle-heading">Triton</h2>
              <p className=" auv-description-primary">Triton is our third Autonomous Underwater Vehicle. Triton has a robust, leak-proof and lightweight central hull made from carbon fiber. It has sensors like IMU, DVL and cameras on-board and can efficiently perform tasks like torpedo shooting, localization in an unknown underwater environment and complex space-constrained manoeuvres. In addition, it has improved battery and additional safety mechanisms installed to prevent damage.</p>
              <p className=" auv-description-primary">Triton will participate in RoboSub-2021 held online due to the ongoing pandemic.</p>
              <div className="text-center">
                <Link to='/vehicles/anahita' className="btn-blue text-center">
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}
export default Vehicles;
