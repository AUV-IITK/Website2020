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
        <div>
            <Container>
                {/* <Card className="bg-dark text-white">
                    <Card.Img src={mechanical} alt="Card image" className="card-image" />
                    <Card.ImgOverlay>
                        <Card.Title className="mb-4 text-center subsystem-heading">MECHANICAL</Card.Title>
                        <Card.Text>
                            The mechanical subsystem if responsible for design and
                            manufacture of the vehicle. We design the entire vehicle and accessories -
                            working on Fluid Dynamics, Actuator controls, and Pneumatics. We plan, simulate
                            and test the physical structure of the AUV and then manufacture it
                            using state of art manufacturing techniques. We use latest software such as SolidWorks and ANSYS
                            to make the design robust, modular, light and strong.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card> */}
                <div className="card-background" style={{
                    backgroundImage: `url(${mechanical})`, backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <Card.Body>
                        <Card.Title className="mb-4 text-center subsystem-heading">MECHANICAL</Card.Title>
                        <Card.Text className="subsystem-text">
                            The mechanical subsystem if responsible for design and
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

export default Mechanical
