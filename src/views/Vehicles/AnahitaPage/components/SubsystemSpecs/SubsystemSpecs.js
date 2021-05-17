import React from 'react';
import {

    Container,
    Row,
    Col
} from "reactstrap";
import anahita_exploded from '../../../../../assets/img/anahita/anahita_exploded.png';
import powerimg from '../../../../../assets/img/anahita/AnahitaElec.jpg';
import soft from '../../../../../assets/img/anahita/AnahitaSoft.jpg';
import "./subs.css"
function Posts() {
    return (
        <>
            <div className="section landing-section">
            <Container>
                <Row>
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 heading-main"><b>SPECIFICATIONS</b></h2>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <Row>
                    <h3 className="small-heading ml-auto mr-auto">Mechanical</h3>
                </Row>
                <Row> 
                    <Col md="6" className="text-center">
                        
                        <img src={anahita_exploded} className="w-100"></img>
                        <p className="small-heading-edited">ANAHITA VEHICLE :- STRUCTURE</p>
                        </Col> 
                        
                    <Col md="6" className="text-center">    
                        <ul className="mechanical-list">
                            <li className="text-left desc-ssk1"><b>Six</b> degrees of freedom.</li>
                            <li className="text-left desc-ssk1">Weigth of <b>32 kg</b> with +1% buoyancy</li>
                            <li className="text-left desc-ssk1">Max coefficient of drag at <b>0.6 m/s : 0.12</b></li>
                            <li className="text-left text-left desc-ssk1"><b>8x T200 (Blue Robotics) thrusters</b> for locomotion</li>
                            <li className="text-left desc-ssk1"><b>Pneumatics </b>actuation for torpedo shooting</li>
                            <li className="text-left desc-ssk1">Fabricated using advanced in-house manufacturing facilities like <b>Abrasive Water-jet Machining</b></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <h3 className="small-heading ml-auto mr-auto">Electrical</h3>
                </Row>
                <Row>
                    <Col md="6" className="text-center mb-5">
                            <img src={powerimg} className="w-100"></img>
                            <p className="small-heading-edited">COMPLETE ELECTRICAL ARCHITECTURE</p>
                    </Col>
                    <Col md="6" className="text-center mb-5">
                        <ul className="electrical-list" >
                            <li className="text-left desc-ssk1">Powered by Two <b>25v Li-Po batteries</b></li>
                            <li className="text-left desc-ssk1"><b>Intel i7 NUC</b> for fast processing</li>
                            <li className="text-left desc-ssk1"><b>Two IDS UI-5260SE-C-HQ Rev.4</b> cameras for 1080p video feed</li>
                            <li className="text-left desc-ssk1"><b>Teledyne Pathfinder DVL</b> for velocity measurements.</li>
                            <li className="text-left desc-ssk1"><b>Custom PCB</b> for ESCs and Micro-controller with Compact design</li>
                        </ul>
                    </Col>
                    
                </Row>    
                <Row>
                    <h3 className="small-heading ml-auto mr-auto">Software</h3>
                </Row>
                <Row>
                    <Col md="6" className="text-center mt-5 ml-auto mr-auto">                        
                        <img src={soft} className="w-100"></img>
                        <p className="small-heading-edited">SOFTWARE DATA AND CONTROL FLOW</p>
                    </Col>
                    <Col md="6" className="text-center mt-5 ml-auto mr-auto">
                        <ul className="mechanical-list">
                            <li className="text-left desc-ssk1">System integration through ROS on <b>Ubuntu 18.04</b></li>
                            <li className="text-left desc-ssk1">Simulation through <b>Gazebo and UWSim</b> to optimize testing time</li>
                            <li className="text-left desc-ssk1">Making use of a <b>faster and simpler simulator</b> designed specifically for underwater vehicles</li>
                            <li className="text-left desc-ssk1">New stack with <b>improved documentation, continuous deployment and optimised structure</b></li>
                            <li className="text-left desc-ssk1">Experimenting with different types of control systems - <b>model based & model free</b></li>
                            <li className="text-left desc-ssk1"><b>Code available on GitHub</b> with documentation under BSD-3 License Clause</li>
                        </ul>
                    </Col>
                    <Col md="3"></Col>                    
                </Row>
            </Container>
            </div>

        </>
    );


}
export default Posts;