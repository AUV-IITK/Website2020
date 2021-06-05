import React from 'react'
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import business from "assets/img/businesstransparent.jpg"
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
                <div className="card-background" style={{
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
                </div>
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

export default Business
