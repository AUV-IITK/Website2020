import React from 'react';
import "./SketchFabEmbed.css"
import {
    Container,
    Row,
    Col
} from "reactstrap";

const embedstyle = {
    fontSize: "13px",
    fontWeight: "normal",
    margin: "5px",
    color: "#4A4A4A"
}
function Posts() {
    return (
        <>
            <div className="section landing-section">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 heading-main">VARUN 3D Model</h2>
                    </Col>
                    <Col md="2"></Col>
                    
                </Row>
            </Container>
            </div>

        </>
    );


}
export default Posts;