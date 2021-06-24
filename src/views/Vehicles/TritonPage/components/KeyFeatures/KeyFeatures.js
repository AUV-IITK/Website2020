import React from "react";
import {useEffect} from "react";
import "./KeyFeatures.css";
import {Container, Row, Col, Tabs, Tab, Table} from "react-bootstrap";
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
                            <div style={{textAlign:'center'}}>
                                <h2 className="heading-main">TRITON</h2>
                                <h3 className="small-heading">The God</h3>
                            </div>
                        </Row>
                    </div>

                    <Row className="d-flex col-main justify-content-center">
                        <Col sm="12" lg="6" className="my-auto text-center mt-5"> 
                            <div className="iframe-container">
                                <iframe style={{boxShadow:'none'}} title="A 3D model" className="cad-model sketchfab-responsive" src="https://sketchfab.com/models/ef2d053e91174d70923b179430afe19d/embed?autostart=1&preload=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            </div>
                        </Col>
                        <Col sm="12" lg="6" className="featureCol my-auto">
                            <div className="briefspec">
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab">
                                    <Tab className="tab-content" eventKey="home" title="What we made">
                                        <div className="my-1 brief">
                                        {specs.brief}
                                        </div>
                                    </Tab>
                                    <Tab className="tab-content" eventKey="specs" title="Specifications">
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
