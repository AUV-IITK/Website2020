import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import mechanical from "assets/img/mechanical.jpg"
import { MDBRipple } from 'mdb-react-ui-kit';
import mechanicalteam from "../../../../data/MechanicalTeam.json";

const Mechanical = () => {
    return (
        <div>
            <Container>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title className="mb-4">Mechanical</Card.Title>
                        <Card.Text>
                            The mechanical subsystem if responsible for design and
                            manufacture of the vehicle. We design the entire vehicle and accessories -
                            working on Fluid Dynamics, Actuator controls, and Pneumatics. We plan, simulate
                            and test the physical structure of the AUV and then manufacture it
                            using state of art manufacturing techniques. We use latest software such as SolidWorks and ANSYS
                            to make the design robust, modular, light and strong.
                            </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
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
                                                <Col lg="4" sm="6" className="text-center img-col mr-auto ml-auto">
                                                    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' >
                                                        <img src={require("assets/img/" + teamMember.image)}
                                                            className="content-image" />
                                                        <div className='hover-overlay'>
                                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                                                                <div className='overlay-text h-100 text-left'>
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

export default Mechanical
