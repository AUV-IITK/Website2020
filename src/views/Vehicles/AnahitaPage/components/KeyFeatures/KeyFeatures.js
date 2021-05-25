import React from "react";
import {useEffect} from "react";
import "./KeyFeatures.css";
import {Container, Row, Col} from "react-bootstrap";


function Posts() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className="mt-5">
                <Container>
                    <div className="title-block">
                        <Row className="mt-5 justify-content-center">
                            <h2>
                                ANAHITA
                            </h2>
                        </Row>    
                        <Row className="title-name justify-content-center">
                            <h3  className="mt-2 mb-2">The Goddess of Waters</h3>
                        </Row>  
                    </div>

                    <Row className="d-flex justify-content-center">
                        <Col sm="12" lg="6" className=" imgCol my-auto text-center">
                            <img
                                src={require("../../../../../assets/img/anahita/anahita-3.jpg")}
                                className="w-100 vehicleImage"
                            />
                        </Col>
                        <Col sm="12" lg="6" className="featureCol my-auto">
                            <p className="text-center heading">Key Features</p>
                            <ul className="key-features-list">
                                <li> <b style={{fontWeight:600}}>Wired frame with truss structures,</b> for structural support and reduced mass.</li>
                                <li>
                                    On board Camera, IMU, DVL, Pressure Sensor & Hydrophones.
                                </li>
                                <li>
                                    Only <b style={{fontWeight:600}}>32 Kgs</b> in weight.
                                </li>
                                <li>
                                    Upto <b style={{fontWeight:600}}>4 hours of continuous operation</b> capability.
                                </li>
                                <li>
                                    Production cost : Rs. <b style={{fontWeight:600}}>23,00,000</b>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Posts;
