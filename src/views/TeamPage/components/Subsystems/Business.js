import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import business from "assets/img/business.jpg"
import { MDBRipple } from 'mdb-react-ui-kit';
import businessteam from "../../../../data/BusinessTeam.json";
import "./Subsys.css"

const Business = () => {
    return (
        <div>
            <Container>
                {/* <Card className="bg-dark text-white">
                    <Card.Img src={business} alt="Card image" className="card-image" />
                    <Card.ImgOverlay>
                        <Card.Title className="mb-4 text-center subsystem-heading">BUSINESS</Card.Title>
                        <Card.Text>
                            <p className="subsystem-text">
                                The Business subsystem manages the fundings and outreach
                                activities of the team. We manage the expenditures and fundings of the team.
                                We represent the team before our sponsors and try to procure them.
                                We maintain the team website and pages on the different social media platforms.
                                The main aim of the business subsystem is to ensure that the team gets sufficient
                                fundings and has an excellent outreach to ensure the smooth functioning of the other
                                three subsystems.
                            </p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card> */}
                <Card className="card-background" style={{
                    backgroundImage: `url(${business})`, backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <Card.Body >
                        <Card.Title className="mb-4 text-center subsystem-heading">BUSINESS</Card.Title>
                        <Card.Text className="subsystem-text">
                            The Business subsystem manages the fundings and outreach
                            activities of the team. We manage the expenditures and fundings of the team.
                            We represent the team before our sponsors and try to procure them.
                            We maintain the team website and pages on the different social media platforms.
                            The main aim of the business subsystem is to ensure that the team gets sufficient
                            fundings and has an excellent outreach to ensure the smooth functioning of the other
                            three subsystems.
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <div className="section text-center">
                <Container>
                    {
                        businessteam.teamData.map((section) => {
                            return (
                                <div>
                                    <Row>
                                        {section.items.map((teamMember) => {
                                            return (
                                                <Col lg="3" sm="6" className="text-center img-col mr-auto ml-auto">
                                                    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' >
                                                        <img src={require("assets/img/" + teamMember.image)}
                                                            className="content-image" />
                                                        <div className='hover-overlay'>
                                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
                                                                <div className='overlay-text h-100 text-left'>
                                                                    {/* <h3 style={{ color: 'white' }}>This is a title</h3> */}
                                                                    <p className="overlay-text">{teamMember.text}</p>
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

export default Business
