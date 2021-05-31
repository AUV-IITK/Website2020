import React from 'react';
import teamphoto from "assets/img/team-photo.jpg"
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { MDBRipple } from 'mdb-react-ui-kit';

import "./TeamHeads.css"
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import teamheads from "../../../../data/TeamHeads.json";

function TeamHeads() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <div style={{ marginTop: "8rem" }}>
                <div className="">
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="text-center heading-main">OUR TEAM</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img src={teamphoto} className="w-100 "></img>
                                <p className="mb-2 mt-3">Over the past years, the team has witnessed a close collaboration between students from various departments coming and sharing ideas; creating a small yet strong network of people who are eagerly looking for a low-cost solution to large-scale problems.</p>
                                <p className="mb-3 ">Working long hours and brainstorming some complex problems leads to a very special bonding between the members of the teams. This leads to a lot of nicknames and some extremely fun gaming nights.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="section text-center">
                <Container>
                    {
                        teamheads.teamData.map((section) => {
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
        </>
    )
}
export default TeamHeads;
