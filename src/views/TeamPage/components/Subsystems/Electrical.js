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
        <div>
            <Container>
                {/* <Card className="bg-dark text-white">
                    <Card.Img src={electrical} alt="Card image" className="card-image" />
                    <Card.ImgOverlay>
                        <Card.Title className="mb-4 text-center subsystem-heading">ELECTRICAL</Card.Title>
                        <Card.Text>
                            <p className="subsystem-text">
                                The Electrical Subsystem builds the electrical framework
                                powering our AUV. We work on the electrical aspects of the AUV, providing
                                power, driving actuators and interfacing with various sensors on board. We
                                build custom made PCBs to meet the specific requirements of the tasks. The
                                Electrical framework consists of Power Distribution System and the Monitoring
                                system. Arduino Mega is used to control the actuation and read
                                data from various sensors which in turn is controlled by an Intel NUC.
                                The main aim of the Electrical subsystem is to manage electrical setup and
                                act as an interface between the software and mechanical subsystems.
                            </p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card> */}
                <div className="card-background" style={{
                    backgroundImage: `url(${electrical})`, backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <Card.Body>
                        <Card.Title className="mb-4 text-center subsystem-heading">Electrical</Card.Title>
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
                                                <Col lg="4" className="text-center img-col mr-auto ml-auto">
                                                    <img src={require("assets/img/" + teamMember.image)}
                                                        className="member-image" />
                                                    <h5>{teamMember.name}</h5>
                                                    <h6>{teamMember.subheading}</h6>
                                                    <div className="middle">
                                                        <ul className="social-list">
                                                            <li>
                                                                <a href={teamMember.facebook} target="blank">
                                                                    <i className="social fa fa-facebook fa-2x" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href={teamMember.linkedin} target="blank">
                                                                    <i className="social fa fa-linkedin fa-2x" />
                                                                </a>
                                                            </li>
                                                        </ul>
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
