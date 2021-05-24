import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap"
import "./SubsystemHeads.css";
import team from "../../../../data/TeamMembers.json";
function TalkAbout() {
    console.log(String(team.teamData[0].items[0].image));
    return (
        <>
            <div className="section text-center">
                <Container>
                    {
                        team.teamData.map((section) => {
                            // console.log(section);
                            return (
                                <div>
                                    <h1 className="title heading-main">{section.heading}</h1>
                                    <div>
                                        <Row className="rowPadding">
                                            {section.items.map((teamMember) => {
                                                // console.log(teamMember);
                                                return (
                                                    <Col lg="4 ml-auto mr-auto" sm="6" className="colPadding">
                                                        <Card>
                                                            <Card.Body className="cardBody">
                                                                <img src={require("assets/img/" + teamMember.image)} 
                                                                className="memberImage" />
                                                                <Card.Title><h5>{teamMember.name}</h5> </Card.Title>
                                                                <Card.Text>
                                                                    <h6>{teamMember.subheading}</h6>
                                                                </Card.Text>
                                                                <ul className="socialList">
                                                                    <li>
                                                                        <i className="social fa fa-facebook fa-2x" />
                                                                    </li>
                                                                    <li>
                                                                         <i className="social fa fa-linkedin fa-2x" />
                                                                    </li>
                                                                </ul>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Container>
            </div>
        </>
    );
}

export default TalkAbout;
