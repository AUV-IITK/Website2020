import React from "react";
import Carousel from "react-elastic-carousel";
import { Container, Card, Row, Col } from "react-bootstrap"
import "./LegacyCarousel.css"
import team from "../../../../data/LegacyMembers.json";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 4 }
];


const LegacyCarousel = () => {
    return (
        <div className="legacy-section">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center heading-main">Past Members</h2>
                    </Col>
                </Row>
                <div className="carousel">
                    <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000}>
                        {
                            team.teamData.map((section) => {
                                return (
                                    <div>
                                        {section.items.map((teamMember) => {
                                            return (
                                                <div className="carousel-item text-center">
                                                    <div className="text-center legacy-cards">
                                                        <Card.Img src={require("assets/img/" + teamMember.image)} className="legacy-images" />
                                                        <Card.Body>
                                                            <Card.Title className="legacy-name">{teamMember.name}</Card.Title>
                                                            <Card.Text className="legacy-position">{teamMember.subheading} </Card.Text>
                                                            <a href={teamMember.linkedin} target="_blank" className="legacy-social"> <i className="fa fa-linkedin fa-2x" /></a>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </Container>
        </div>
    )
}

export default LegacyCarousel
