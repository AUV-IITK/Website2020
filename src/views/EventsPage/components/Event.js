import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Event.css'

function Event (props) {
  return (
        <>
            <div className="">
                <Container>
                    <Row className="event-container">
                        <Col className="ml-auto mr-auto" md="12">
                            <a href={props.event.link} target="_blank" rel="noreferrer">
                                <h2 className="text-left comp-heading heading-main">
                                    {props.event.name}
                                </h2>
                            </a>
                        </Col>
                        <Col md="8" className="event-image-container">
                            <img src={props.event.image} className="event-image" alt=""/>
                        </Col>
                        <Col md="4" className="headings-container">
                            <h1 className="small-heading primary-heading-event">
                                {props.event.heading}
                            </h1>
                            <h2 className=" mt-3 small-heading-edited secondary-heading-event">
                                {props.event.subheading}
                            </h2>
                            <h1 className="small-heading primary-heading-event">
                                {props.event.heading02}
                            </h1>
                            <h2 className=" mt-3 small-heading-edited secondary-heading-event">
                                {props.event.subheading02}
                            </h2>
                            <h2 className=" mt-3 small-heading-edited secondary-heading-event">
                                {props.event.subheading03}
                            </h2>
                            <h2 className=" mt-3 small-heading-edited secondary-heading-event">
                                {props.event.subheading04}
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <p className="ml-3 text-left desc-ssk1 ">{props.event.para1}</p>
                        <p className="ml-3 text-left desc-ssk1 ">{props.event.para2}</p>
                    </Row>
                </Container>
            </div>
        </>
  )
}

export default Event
