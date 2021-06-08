import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import electrical from "assets/img/electricaltransparent.jpg"
import electricalteam from "../../../../data/ElectricalTeam.json";
import "./Subsys.css"

const Electrical = () => {
    return (
        <div className="subsystem-section">
            <Container>
                <div className="card-background" style={{
                    backgroundImage: `url(${electrical})`, backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <Card.Body>
                        <Card.Text className="subsystem-text">
                            The Electrical Subsystem builds the electrical framework
                            powering our AUV. We work on the electrical aspects of the AUV, providing
                            power, driving actuators and interfacing with various sensors on board. We
                            build custom made PCBs to meet the specific requirements of the tasks. The
                            Electrical framework consists of Power Distribution System and the Monitoring
                            system. Arduino Mega is used to control the actuation and read
                            data from various sensors which in turn is controlled by an Intel NUC.
                            The main aim of the Electrical subsystem is to manage electrical setup and
                            act as an interface between the software and mechanical subsystems.
                        </Card.Text>
                    </Card.Body>
                </div>
            </Container>
            <div className="section text-center">
                <Container>
                    {
                        electricalteam.teamData.map((section) => {
                            return (
                                <div>
                                    <Row>
                                        {section.items.map((teamMember) => {
                                            return (
                                                <Col lg="3" className="team img-col text-center mr-auto ml-auto">
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

export default Electrical
