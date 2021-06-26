import React from "react";
import {Container, Row, Col, Accordion, Card} from "react-bootstrap";

import "./subs.css";
import specs from "../../data.js";

import FadeIn from "../../../../Animations/FadeIn";

function Posts() {
    console.log(specs);
    return (
        <>
        {
            <div className="section landing-section">
                <Container>
                    <div className="title-block">
                            <Row className="justify-content-center heading-components">
                                <div style={{ textAlign: 'center' }}>
                                    <b style={{ fontSize: "4rem" }}>COMPONENTS</b>
                                </div>
                            </Row>
                        </div>
                    <Row className="subsystem-headings">
                        <h3>Mechanical</h3>
                    </Row>
                    <FadeIn>
                    <div className="spec-container">
                        <Row>
                            <Col lg="1"></Col>
                            <Col lg="10" className="featureCol my-auto">
                                Although the design of our previous AUV: Anahita, was acknowledged worldwide, it still had a few flaws. The design involved multiple hulls, leading to high susceptibility to leakages, often damaging the electronic components during pool testing. In addition, multiple hulls and casings limited the accessibility of the internal components, and the positioning of hulls produced relatively high hydrodynamic drag during motion. Finally, the heat dissipation was poor as acrylic is an inferior conductor of heat, resulting in performance degradation and often rendering electronic components inoperable. We tried improving these aspects while designing our new bot.
                                <div style={{ marginBottom: '20px' }}></div>
                                <Accordion defaultActiveKey="">
                                {
                                    specs.mechanical.map(
                                        (data) => (
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                                                {data.title}
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey={String(data.id)}>
                                                <Card.Body>
                                                    <div>
                                                        {data.content}
                                                    </div>
                                                    
                                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/" + data.img)} />}
                                                        <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                            {data.imgDesc}
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    )
                                }
                                </Accordion>
                            </Col>
                            <Col lg="1"></Col>
                        </Row>
                     </div>
                     </FadeIn>
                    <Row className="subsystem-headings">
                        <h3>Electrical</h3>
                    </Row>
                    <FadeIn>
                    <div className="spec-container">
                        <Row>
                            <Col lg="1"></Col>
                            <Col lg="10" className="my-auto featureCol">
                                Tarang's Electrical system includes power sources, sensors, actuators and all the computational resources required for autonomous underwater tasks. We have designed our own PCBs for multiple purposes. This year, we have designed a dedicated power board for power monitoring and distribution to all components. The power system includes a custom buck and boost converter designed to our specifications and requirements with the flexibility of placement and connections. We have also built a custom micro-controller board for Tarang instead of using Arduino boards with shields, saving us a lot of PCB space and cost. The previous micro-controller board (a shield to Arduino Mega) was huge due to unnecessary GPIO pins unused by the Arduino. We use 2 ESC boards with 4 ESCs on each board, of which one ESC on each board is a backup in case of failure. There are 2 layers of stacks inside the hull, which will be used for mounting different electronic devices.
                                <div style={{ marginBottom: '20px' }}></div>
                                <Accordion defaultActiveKey="">
                                <Card className="card-plain spec-card">
                                    <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={42}>
                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>

                                    Power Distribution
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={42}>
                                        <Card.Body>
                                            <div>
                                                We use two 14.8V 18A-h batteries to power the complete system. One battery is wholly dedicated to the thrusters, which have a high power consumption and cameras with low power consumption, ensuring supply voltage is within the battery voltage range. The other battery powers all the rest of the electronics by generating 12V and 19V with high-efficiency buck and boost converters, respectively.The microcontroller on the powerboard features a display and multiple LED indicators for battery monitoring and threat alarming.
                                            </div>
                                            <br />

                                            <div><b>Custom made Boost Converter</b></div>
                                            <div>The custom boost converter powers the onboard computer, which operates at 19V. As the power rating for the computer is high (54W), the boost converter had to be very efficient as the computer will be powered on for the complete duration of the mission. </div>
                                            <br />

                                            <div><b>Custom made Buck Converter</b></div>
                                            <div>Most of the low power electronics are powered through the custom-designed buck converter, which outputs 12V. We ensured high efficiency for the buck to minimize the power losses. The power will be controlled through the buck converter using micro-controller GPIO. It will enable us to completely turn it off and save power.</div>
                                            <br />

                                            <div><b>5V power supply for servo</b></div>
                                            <div>The 5V power supply required for driving the servos is created through a regulator with the 12V input from the buck. The power losses of the regulator are insignificant as the regulator will be turned on only for the duration of servo usage. This saves us a lot of space and cost that can be expended in the making/using of another buck converter.We used the RP2040 micro-controller module on the Power board to build a robust and small solution while getting sufficient GPIOs for sensors and other peripherals.</div>
                                            
                                            <div style={{ display: 'grid', placeItems: 'center' }}>
                                                {/* {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/" + data.img)} />} */}
                                                <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                    {/* {data.imgDesc} */}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {
                                    specs.electrical.map(
                                        (data) => (
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>

                                                {data.title}
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey={String(data.id)}>
                                                <Card.Body>
                                                    <div>
                                                        {data.content}
                                                    </div>
                                                    
                                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/" + data.img)} />}
                                                        <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                            {data.imgDesc}
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    )
                                }
                                </Accordion>
                            </Col>
                            <Col lg="1"></Col>
                        </Row>
                     </div>
                     </FadeIn>
                    <Row className="subsystem-headings">
                        <h3>Software</h3>
                    </Row>
                    <FadeIn>
                    <div className="spec-container">
                        <Row>
                            <Col lg="1"></Col>
                            <Col lg="10" className="my-auto featureCol">
                                We have improved the software architecture to make the code modular making it easier to test, debug and integrate. In addition, we have made significant advancements in Simultaneous Localization and Mapping strategy (SLAM), tuning of the controller and vision algorithms. The software stack uses the Robot Operating System (ROS noetic) framework by Willow Garage, which works on Ubuntu 20.04 OS that acts as communication middleware between all the processes running on the robot. We have migrated our code from python 2 (which has been deprecated) to python 3. In addition to it, we have also updated the code for our previous vehicles to use the latest versions of the third-party libraries like OpenCV, YOLO and other ROS packages.
                                <div style={{ marginBottom: '20px' }}></div>
                                <Accordion defaultActiveKey="">
                                <Card className="card-plain spec-card">
                                    <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={42}>
                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>

                                    Software Architecture
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={42}>
                                        <Card.Body>
                                            <div>
                                                The software stack of Tarang consists of dedicated layers for hardware integration, controls, navigation, motion planning and acoustic localization. The software stack consists of the following layers:
                                                <ol>
                                                    <li>
                                                        <b>Master Layer:</b>  It controls and coordinates the actions of all other layers to perform the tasks autonomously. All the decision making and strategy gets coded in the master layer, which commands the nodes in the other layers to perform different functions. The master layer contains the task-specific code. The signals and instructions for completing all the tasks originate from the master layer.
                                                    </li>
                                                    <li>
                                                        <b>Control Layer:</b> It contains the implementation of the cascaded PID controller the bot uses. The control layer calculates the thrust for each of the thrusters to manoeuvre the bot as desired. It also generates the trajectory and waypoints to perform the wanted task.
                                                    </li>
                                                    <li>
                                                        <b>Navigation Layer:</b> It contains the code for the Simultaneous Localization and Mapping (SLAM) algorithm. It performs sensor fusion, estimates the bot's current position in the world, and generates the world's map based upon the filtered sensor information.
                                                    </li>
                                                    <li>
                                                        <b>Vision Layer:</b>  It contains the code for all the image processing and vision-related tasks. The vision layer receives the feed directly from the cameras, performs computation on the received data for preprocessing, object detection or visual odometry and sends the processed output to other nodes which require it.
                                                    </li>
                                                    <li>
                                                        <b>Hardware Layer:</b> It is responsible for integrating sensors with the software stack. It collects the sensors-specific plugins and utilities to receive information from the sensors and publishes it on topics for the other nodes to use.
                                                    </li>
                                                </ol>
                                            </div>
                                            <br />
                                            <div>
                                                Advantages of such a software architecture are:
                                                <ol>
                                                    <li>It makes the development easier as different layers can be developed independently and tested asynchronously.</li>
                                                    <li>It enables easy debugging and troubleshooting.</li>
                                                    <li>It ensures that the code is scalable and maintainable and provides a straightforward way to integrate external libraries and expand the codebase.</li>
                                                </ol>
                                            </div>
                                            <div style={{ display: 'grid', placeItems: 'center' }}>
                                                {/* {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/" + data.img)} />} */}
                                                <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                    {/* {data.imgDesc} */}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="card-plain spec-card">
                                    <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={43}>
                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>

                                    Image-Preprocessing
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={43}>
                                        <Card.Body>
                                            <div><b>Undistortion</b></div>
                                            <div>We preprocess the video feed by applying multiple filters before extracting any information from it. Since the images are used to estimate the location of various objects and the vehicle itself, the lengths represented in the images must be true. The camera distorts the features in the image changing their shape and length, so images are undistorted in the preprocessing pipeline. To undistort images, we need to have distortion coefficients of the camera. To obtain these, we need to calibrate the camera using images of known size and shape images. In our case, a checkerboard pattern distortion known beforehand was used to calculate these coefficients. </div>
                                            <br />

                                            <div><b>Relative Global Histogram Stretching</b></div>
                                            <div>The Relative Global Histogram Stretching method aims to improve image quality by applying contrast correction and colour correction to the camera output. </div>
                                            <br />

                                            <div><b>Contrast Correction</b></div>
                                            <div>The contrast correction pipeline applies colour equalization on the image's green-blue(G-B) channels, followed by relative global histogram stretching.</div>
                                            <br />

                                            <div><b>Bilateral Filter</b></div>
                                            <div>A bilateral filter reduces the noise by using a non-linear smoothing filter to the image. The contrast-corrected image is then passed to the colour correction phase, which converts the image to CIE-Lab colour space and stretches L, a and b components followed by CIE-Lab to RGB conversion</div>
                                            
                                            <div style={{ display: 'grid', placeItems: 'center' }}>
                                                {/* {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/" + data.img)} />} */}
                                                <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                    {/* {data.imgDesc} */}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {
                                    specs.software.map(
                                        (data) => (
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>

                                                {data.title}
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey={String(data.id)}>
                                                <Card.Body>
                                                    <div>
                                                        {data.content}
                                                    </div>
                                                    
                                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/" + data.img)} />}
                                                        <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                            {data.imgDesc}
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    )
                                }
                                </Accordion>
                            </Col>
                            <Col lg="1"></Col>
                        </Row>
                    </div>
                    </FadeIn>
                </Container>
            </div>
        }
        </>
    );
}

export default Posts;
