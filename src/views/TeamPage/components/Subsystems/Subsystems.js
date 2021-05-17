import React from 'react';
import {

    Container,
    Row,
    Col
} from "reactstrap";
import niotwin from '../../../../assets/img/niotwinner.jpeg';
import desbot from '../../../../assets/img/designbot.png';
import atwork from '../../../../assets/img/atwork.png';
import "./Subsystems.css"

import software from "assets/img/software.jpg"
import electrical from "assets/img/electrical.jpeg"
import mechanical from "assets/img/mechanical.jpg"
import business from "assets/img/business.jpg"



function Posts() {
    return (
        <>
            <div className="section landing-section">
                <Container>
                <Row className="d-flex justify-content-center">
                    <Col className="ml-auto mr-auto" md="12">
                        <h2 className="text-center heading-main">Subsystems</h2>
                    </Col>
                    <Col md="5" className="text-center">
                        <h3 className="mt-0 mb-3 small-heading">Software</h3>
                        <img src={software} className="  w-100"></img>
                        <p className="desc-ssk1">The software subsystem develops the algorithms 
                        controlling the robot and making it autonomous. We use latest cutting edge 
                        technologies in the world of robotics software. We use ROS(Robot Operating System) 
                        as a communication middleware between all processes running on our robot.The software 
                        stack of Anahita consists of dedicated layers for the hardware integration, 
                        controls and navigation, motion planning, perception and acoustic localization. 
                        The software subsytem carries out simulations Gazebo and UWSim to ensure  that 
                        things work smoothly before actual testing.The main aim of software subsystem is 
                        to write code, that is generic and error free, in order efficiently coordinate the
                         vehicles motion and enable it perform at full potential. </p>
                    </Col>
                    <Col md="2"></Col>
                    
                    <Col md="5" className="text-center">
                        <h3 className="mt-0 mb-3 small-heading">Electrical</h3>
                        <img src={electrical} className="  w-100"></img>
                        <p className="desc-ssk1">The Electrical Subsystem builds the electrical framework 
                        powering our AUV. We work on the electrical aspects of the AUV, providing
                        power, driving actuators and interfacing with various sensors on board. We 
                        build custom made PCBs to meet the specific requirements of the tasks. The
                         Electrical framework consists of Power Distribution System and the Monitoring 
                         system. Arduino Mega is used to control the actuation and read
                        data from various sensors which in turn is controlled by an Intel NUC. 
                        The main aim of the Electrical subsystem is to manage electrical setup and 
                        act as an interface between the software and mechanical subsystems. </p>
                    </Col>
                    <Col md="5" className="text-center">
                        <h3 className="mt-5 mb-3 small-heading mb-2">Mechanical</h3>
                        <img src={mechanical} className="  w-100"></img>
                        <p className="desc-ssk1">The mechanical subsystem if responsible for design and
                        manufacture of the vehicle. We design the entire vehicle and accessories - 
                        working on Fluid Dynamics, Actuator controls, and Pneumatics. We plan, simulate 
                        and test the physical structure of the AUV and then manufacture it
                        using state of art manufacturing techniques. We use latest software such as SolidWorks and ANSYS 
                        to make the design robust, modular, light and strong. </p>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="5" className="text-center">
                        <h3 className="mt-5 mb-3 small-heading mb-2">Business</h3>
                        <img src={business} className="  w-100"></img>
                        <p className="desc-ssk1">The Business subsystem manages the fundings and outreach 
                        activities of the team. We manage the expenditures and fundings of the team.
                        We represent the team before our sponsors and try to procure them. 
                        We maintain the team website and pages on the different social media platforms. 
                        The main aim of the business subsystem is to ensure that the team gets sufficient 
                        fundings and has an excellent outreach to ensure the smooth functioning of the other 
                        three subsystems.</p>
                    </Col>
                </Row>
                </Container>
            </div>

        </>
    );


}
export default Posts;