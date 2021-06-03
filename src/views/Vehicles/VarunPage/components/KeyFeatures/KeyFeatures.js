import React from "react";
import {useEffect} from "react";
import "./KeyFeatures.css";
import {Container, Row, Col, Tabs, Tab, Table, Button} from "react-bootstrap";
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
                        <Row className="mt-5 justify-content-center">
                            <div>
                                <h2 className="heading-main">VARUN</h2>
                                <h3 className="small-heading">The First of them</h3>
                            </div>
                        </Row>    
                    </div>

                    <Row className="d-flex col-main justify-content-center">
                        <Col sm="12" lg="6" className="my-auto text-center mt-5"> 
                            <div className="iframe-container">
                                <iframe title="A 3D model" className="cad-model sketchfab-responsive" src="https://sketchfab.com/models/6e1274e10d9e4b6a922a5ed0baf9445f/embed?preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            </div>
                        </Col>
                        <Col sm="12" lg="6" className="featureCol my-auto">
                            <div className="briefspec">
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab">
                                    <Tab className="Tab-content" eventKey="home" title="What we made">
                                        <div className="my-1">
                                        {specs.brief}
                                        </div>
                                        <div>
                                            <a className="tdr-button" href="https://drive.google.com/file/d/1npkLjXap83W4o32rJpHaKH61_lqaXzI1/view?usp=sharing" target="_blank">
                                                Report
                                            </a>
                                        </div>
                                    </Tab>
                                    <Tab className="Tab-content" eventKey="specs" title="Specifications">
                                        <Table bordered className="my-1">
                                        <tbody>
                                            {
                                                specs.specsTable.map(
                                                    (data) => (
                                                    <tr>
                                                        <td style={{width:'30%', fontWeight:'bold'}}>{data.name}</td>
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
