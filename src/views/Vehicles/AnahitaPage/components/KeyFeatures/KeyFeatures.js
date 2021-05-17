import React from 'react';
import {useEffect} from 'react';
import "./KeyFeatures.css";
import {
    Container,
    Row,
    Col
} from "reactstrap";



function Posts() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }); 
    return (
        <>
            <div className="mt-5">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col sm="12" md="6"> 
                        {/* <h2 className="text-center mb-4 small-heading">ANAHITA</h2> */}
                        <img src={require("../../../../../assets/img/anahita/anahita-3.jpg")} className="w-100"></img>
                    </Col>                    
                    <Col sm="12" md="6" className="text-center">
                    <h2 className="text-center mb-4 small-heading">Key Features</h2>
                        <ul className="key-features-list">
                            <li><h4 className="text-left desc-ssk1"><b >Wired frame with truss structures,</b> for
                            structural support and reduced mass</h4></li>
                            <li><h4 className="text-left desc-ssk1">On board Camera, IMU, DVL, Pressure Sensor & Hydrophones </h4></li>
                            <li><h4 className="text-left desc-ssk1">Only <b>32 Kgs</b> in weight</h4></li>
                            <li><h4 className="text-left desc-ssk1">Upto <b>4 hours of continuous operation</b> capability</h4></li>
                            <li><h4 className="text-left desc-ssk1">Production cost : Rs. <b >23,00,000</b></h4></li>
                        </ul>
                    </Col>
                </Row>
                </Container>
            </div>

        </>
    );


}
export default Posts;