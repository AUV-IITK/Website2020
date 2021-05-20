import React from 'react';
import "./KeyFeatures.css";
import {useEffect} from 'react';
import {

    Container,
    Row,
    Col
} from "reactstrap";

const embedstyle= {
    fontSize: "13px",
    fontWeight: "normal",
    margin: "5px",
    color: "#4A4A4A"
};


function Posts() {
    useEffect(() => {
        window.scrollTo(0, 0)
      });
    return (
        <>
            <div className="section landing-section">
            <Container>                <Row className="d-flex justify-content-center">
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 small-heading">Key Features</h2>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="6" className="text-center"> 
                        <div className="">
                            <iframe title="A 3D model" className="sketchfab-ssk1 sketchfab-responsive" src="https://sketchfab.com/models/6e1274e10d9e4b6a922a5ed0baf9445f/embed?preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            <p style={embedstyle}>
                                {/* <a href="https://sketchfab.com/3d-models/varun-6e1274e10d9e4b6a922a5ed0baf9445f?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">VARUN</a>
        by <a href="https://sketchfab.com/karthic?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">AUVIITK</a>
        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a> */}
                            </p>
                        </div>
                    </Col>
                    <Col md="6" className="text-center">
                        <ul className="key-features-varun">
                            <li><h4 className="text-left desc-ssk1"><b >Modular design</b> for easy assembly and installation</h4></li>
                            <li><h4 className="text-left desc-ssk1">Staging vehicle to carry out experiments</h4></li>
                            <li><h4 className="text-left desc-ssk1">Capable of <b>underwater inspection and data collection </b></h4></li>
                            <li><h4 className="text-left desc-ssk1">Upto <b>4 hours of continuous operation</b> capability</h4></li>
                            <li><h4 className="text-left desc-ssk1">Budget of Rs. <b >7,45,000</b></h4></li>
                        </ul>
                    </Col>
                    
                </Row>
            </Container>

            </div>

        </>
    );


}
export default Posts;