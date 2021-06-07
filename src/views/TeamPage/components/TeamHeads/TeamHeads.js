import React from 'react';
import teamphoto from "assets/img/team-photo.jpg"
import { Link } from 'react-router-dom';
import { useEffect } from "react";

import "./TeamHeads.css"
import {
    Card,
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
                            <Col lg="12" sm="12">
                                <img src={teamphoto} className="w-100 text-center"></img>
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
                                                <Col lg="3" className="team img-col text-center mr-auto ml-auto">
                                                    <div className="member">
                                                        <div className="member-img">
                                                            <div className="overlay">
                                                                <img src={require("assets/img/" + teamMember.image)}
                                                                    className="member-img img-fluid" alt="" />
                                                            </div>
                                                            <div className="social">
                                                                <a href={teamMember.facebook}><i className="fa fa-facebook fa-2x" /></a>
                                                                <a href={teamMember.linkedin}><i className="fa fa-linkedin fa-2x" /></a>
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
        </>
    )
}
export default TeamHeads;
