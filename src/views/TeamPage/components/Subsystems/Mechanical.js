import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import mechanical from "assets/img/mechanicaltransparent.jpg"
import mechanicalteam from "../../../../data/MechanicalTeam.json";
import "./Subsys.css"

const Mechanical = () => {
    return (
        <div className="subsystem-section">
            <Container>
                <div className="card-background">
                    <Card.Body>
                        <Card.Text className="subsystem-text">
                            The mechanical subsystem is responsible for design and
                            manufacture of the vehicle. We design the entire vehicle and accessories -
                            working on Fluid Dynamics, Actuator controls, and Pneumatics. We plan, simulate
                            and test the physical structure of the AUV and then manufacture it
                            using state of art manufacturing techniques. We use latest software such as SolidWorks and ANSYS
                            to make the design robust, modular, light and strong.
                        </Card.Text>
                    </Card.Body>
                </div>
            </Container>
            <div className="section text-center">
                <Container>
                    {
                        mechanicalteam.teamData.map((section) => {
                            return (
                                <div>
                                    <Row>
                                        {section.items.map((teamMember) => {
                                            return (
                                                <Col lg="3" md="6" className="team img-col text-center mr-auto ml-auto">
                                                    <div className="member">
                                                        <div className="member-img">
                                                            <div className="overlay">
                                                                <img src={require("assets/img/" + teamMember.image)}
                                                                    className="member-img img-fluid" alt="" />
                                                            </div>
                                                            <div className="social">
                                                                <a href={teamMember.facebook} target='_blank'><i className="fa fa-facebook fa-2x" /></a>
                                                                <a href={teamMember.linkedin} target='_blank'><i className="fa fa-linkedin fa-2x" /></a>
                                                            </div>
                                                        </div>
                                                        <div class="member-info">
                                                            <h4>{teamMember.name}</h4>
                                                            <span>{teamMember.subheading}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Container>
            </div>
        </div>
    )
}

export default Mechanical
