import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import electrical from "assets/img/electrical.jpeg"
import { MDBRipple } from 'mdb-react-ui-kit';
import electricalteam from "../../../../data/ElectricalTeam.json";


const Electrical = () => {
    return (
        <div>
            <Container>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title className="mb-4">Electrical</Card.Title>
                        <Card.Text>
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
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
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
                                                <Col lg="4" sm="6" className="text-center img-col mr-auto ml-auto">
                                                    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' >
                                                        <img src={require("assets/img/" + teamMember.image)}
                                                            className="content-image" />
                                                        <div className='hover-overlay'>
                                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                                                                <div className='justify-content-center align-items-center overlay-text h-100 text-left'>
                                                                    {/* <h3 style={{ color: 'white' }}>This is a title</h3> */}
                                                                    <p style={{ color: 'white' }}>{teamMember.text}</p>
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
                                                            </div>
                                                        </div>
                                                    </MDBRipple>
                                                    <h5>{teamMember.name}</h5>
                                                    <h6>{teamMember.subheading}</h6>
                                                    {/* <img src={require("assets/img/" + teamMember.image)}
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
                                                    </div> */}
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
