import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Card, Row, Col } from "react-bootstrap"
import "./LegacyCarousel.css"
import team from "../../../../data/LegacyMembers.json";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 576 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const LegacyCarousel = () => {
    return (
        <div className="legacy-section">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center heading-main">Past Members</h2>
                    </Col>
                </Row>
                <div className="text-center ml-auto mr-auto">
                    <Carousel swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4200}
                        keyBoardControl={true}
                        customTransition="transform 500ms ease-in"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["mobile"]}
                        dotListClass="react-multi-carousel-dot-list"
                        itemClass="carousel-item-padding-40-px"
                        renderButtonGroupOutside={true}
                    >
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
