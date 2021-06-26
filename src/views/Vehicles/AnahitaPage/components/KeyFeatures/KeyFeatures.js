import React from "react";
import { useEffect } from "react";
import "./KeyFeatures.css";
import { Container, Row, Col, Tabs, Tab, Table } from "react-bootstrap";
import specs from "../../data.js";

function Posts() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className="mt-5">
                <Container>
                    <div className="title-block">
                        <Row className="mt-5 justify-content-center heading-component">
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ fontSize: "4.5rem" }}>ANAHITA</h2>
                                {/* <h3 style={{ fontSize: "3rem" }}>The Goddess of Water</h3> */}
                            </div>
                        </Row>
                    </div>

                    <Row className="d-flex col-main justify-content-center">
                        <Col sm="12" lg="8" className="my-auto text-center mt-5">
                            <div className="iframe-container">
                                <iframe style={{ boxShadow: 'none' }} title="A 3D model" className="cad-model sketchfab-responsive" src="https://sketchfab.com/models/21c78ab51dda4c7a9445b4fb0b877e22/embed?autospin=1&autostart=1&preload=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            </div>
                        </Col>
                        <Col sm="12" lg="4" className="featureCol my-auto">
                            <div className="briefspec">
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab">
                                    <Tab className="tab-content" eventKey="home" title="What we made">
                                        <div className="my-1">
                                            {specs.brief}
                                        </div>
                                        <div>
                                            <a className="tdr-button" href="https://drive.google.com/file/d/1AN2uvKzoERqeampDUTVilUPUmSCickFL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                                Report
                                            </a>
                                        </div>
                                    </Tab>
                                    <Tab className="tab-content" eventKey="specs" title="Specifications">
                                        <Table bordered className="my-1">
                                            <tbody>
                                                {
                                                    specs.specsTable.map(
                                                        (data) => (
                                                            <tr>
                                                                <td style={{ width: '30%', fontWeight: 'bold' }}>{data.name}</td>
                                                                <td>{data.spec}</td>
                                                            </tr>
                                                        )
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Posts;
