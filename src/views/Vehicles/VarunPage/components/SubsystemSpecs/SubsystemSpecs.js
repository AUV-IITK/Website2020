import React from 'react';
import {

    Container,
    Row,
    Col
} from "reactstrap";
import labelled from '../../../../../assets/img/varun/varun_labelled.png';
import powerimg from '../../../../../assets/img/varun/varun_power.png';
import soft from '../../../../../assets/img/varun/software_logos.png';
import "./subs.css"
const embedstyle= {
    fontSize: "13px",
    fontWeight: "normal",
    margin: "5px",
    color: "#4A4A4A"
} 
function Posts() {
    return (
        <>
            <div className="section landing-section">
            <Container>
                <Row className="">
                    
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 heading-main"><b>SPECIFICATIONS</b></h2>
                    </Col>
                </Row>
                <Row>
                    <h3 className="small-heading ml-auto mr-auto">Mechanical</h3>
                </Row>
                <Row>
                    <Col sm="12" md="6" className="text-center">
                        <img src={labelled} className="w-100"></img>
                        <p className="small-heading-edited">VARUN VEHICLE : STRUCTURE</p>
                    </Col>
                    <Col sm="12" md="6" className="text-center">
                        <ul className="ml-0">
                            <li className="text-left desc-ssk1">Five degrees of freedom</li>
                            <li className="text-left desc-ssk1">Weigth of 44.5 kg with +1% buoyancy</li>
                            <li className="text-left desc-ssk1">Max coefficient of drag at 1.5 m/s : 0.42</li>
                            <li className="text-left desc-ssk1">6x brushed-DC Seabotix thrusters for locomotion</li>
                            <li className="text-left desc-ssk1">Pneumatics actuation for torpedo shooting</li>
                            <li className="text-left desc-ssk1">Fabricated using in-house manufacturing facilities</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <h3 className="small-heading ml-auto mr-auto">Electrical</h3>
                </Row>
                <Row>
                    
                    <Col sm="12" md="6" className="text-center mb-5">
                        <img src={powerimg} className="w-100"></img>
                        <p className="small-heading-edited mt-5">POWER DISTRIBUTION</p>
                    </Col>
                    <Col sm="12" md="6" className="text-center mb-5">    
                        <ul className="ml-0" >
                            <li className="text-left desc-ssk1">Powered by four 3S Lithium-Polymer Batteries</li>
                            <li className="text-left desc-ssk1">Custom made power-distribution board with protection and monitoring circuits</li>
                            <li className="text-left desc-ssk1">Two Logitech C290 cameras for 1080p video feed</li>
                            <li className="text-left desc-ssk1">Bluerobotics Depth Sensor for precision depth</li>
                            <li className="text-left desc-ssk1">Intel NUC for high-processing power</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <h3 className="small-heading ml-auto mr-auto">Software</h3>
                </Row>
                <Row>
                    <Col sm="12" md="6" className="text-center mt-5">
                        <img src={soft} className="w-100"></img>
                        <p className="small-heading-edited">FRAMEWORKS USED IN VARUN</p>
                    </Col>
                    <Col sm="12" md="6" className="text-center">
                        <ul className="ml-0">
                            <li className="text-left desc-ssk1">System integration through ROS on Ubuntu 14.04</li>
                            <li className="text-left desc-ssk1">Simulation through Gazebo to optimize testing time</li>
                            <li className="text-left desc-ssk1">Image processing to perform vision-based tasks</li>
                            <li className="text-left desc-ssk1">Navigation through dead-reckoning sensors</li>
                            <li className="text-left desc-ssk1">GUI enabled control for debugging</li>
                            <li className="text-left desc-ssk1">Code available on GitHub with documentation under BSD-3 License Clause</li>
                        </ul>
                    </Col>                    
                </Row>
            </Container>
            </div>

        </>
    );


}
export default Posts;