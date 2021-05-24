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
                    <Col sm="12" md="6" className="text-center my-auto imgCol">
                        <img src={labelled} className="w-100"></img>
                        <p className="small-heading-edited">VARUN VEHICLE : STRUCTURE</p>
                    </Col>
                    <Col sm="12" md="6" className="featureCol my-auto">
                        <ul className="features-list">
                            <li ><b style={{fontWeight:600}}>Five</b> degrees of freedom</li>
                            <li >Weigth of <b style={{fontWeight:600}}>44.5 kg</b> with +1% buoyancy</li>
                            <li >Max coefficient of drag at <b style={{fontWeight:600}}>1.5 m/s : 0.42</b></li>
                            <li ><b style={{fontWeight:600}}>6x brushed-DC Seabotix thrusters</b> for locomotion</li>
                            <li ><b style={{fontWeight:600}}>Pneumatics actuation</b> for torpedo shooting</li>
                            <li >Fabricated using in-house manufacturing facilities</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <h3 className="small-heading ml-auto mr-auto">Electrical</h3>
                </Row>
                <Row>
                    
                    <Col sm="12" md="6" className="text-center my-auto imgCol">
                        <img src={powerimg} className="w-100"></img>
                        <p className="small-heading-edited mt-5">POWER DISTRIBUTION</p>
                    </Col>
                    <Col sm="12" md="6" className="featureCol my-auto">    
                        <ul className="features-list" >
                            <li >Powered by four<b style={{fontWeight:600}}> 3S Lithium-Polymer Batteries</b></li>
                            <li ><b style={{fontWeight:600}}>Custom made power-distribution board</b> with protection and monitoring circuits</li>
                            <li >Two <b style={{fontWeight:600}}>Logitech C290 cameras</b> for 1080p video feed</li>
                            <li ><b style={{fontWeight:600}}>Bluerobotics Depth Sensor</b> for precision depth</li>
                            <li ><b style={{fontWeight:600}}>Intel NUC</b> for high-processing power</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <h3 className="small-heading ml-auto mr-auto">Software</h3>
                </Row>
                <Row>
                    <Col sm="12" md="6" className="text-center my-auto imgCol">
                        <img src={soft} className="w-100"></img>
                        <p className="small-heading-edited">FRAMEWORKS USED IN VARUN</p>
                    </Col>
                    <Col sm="12" md="6" className="featureCol my-auto">
                        <ul className="features-list">
                            <li >System integration through ROS on <b style={{fontWeight:600}}>Ubuntu 14.04</b></li>
                            <li >Simulation through <b style={{fontWeight:600}}>Gazebo</b> to optimize testing time</li>
                            <li >Image processing to perform vision-based tasks</li>
                            <li >Navigation through <b style={{fontWeight:600}}>dead-reckoning sensors</b></li>
                            <li ><b style={{fontWeight:600}}>GUI enabled</b> control for debugging</li>
                            <li ><b style={{fontWeight:600}}>Code available on GitHub </b>with documentation under BSD-3 License Clause</li>
                        </ul>
                    </Col>                    
                </Row>
            </Container>
            </div>

        </>
    );


}
export default Posts;