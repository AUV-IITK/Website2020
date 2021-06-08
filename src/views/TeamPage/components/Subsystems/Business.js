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
        <div className="subsystem-section">
            <Container>
                <div className="card-background">
                    <Card.Body >
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

export default Business
