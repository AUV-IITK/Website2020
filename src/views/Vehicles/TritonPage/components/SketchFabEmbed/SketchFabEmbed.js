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
                    <Col>
                        <h2 className="text-center mb-4 heading-main">ANAHITA on Sketchfab</h2>
                    </Col>
                </Row>
            </Container>
            </div>

        </>
    );


}
export default Posts;