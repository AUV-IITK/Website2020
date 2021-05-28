import React from 'react';
import "./KeyFeatures.css";
import {useEffect} from 'react';
import {

    Container,
    Row,
    Col
} from "react-bootstrap";



function Posts() {
    useEffect(() => {
        window.scrollTo(0, 0)
      });
    return (
        <>
            <div className="section landing-section">
                <Container>     
                    <Row className="title-name justify-content-center">
                        <h2>
                            VARUN
                        </h2>
                    </Row>    
                    <Row className="title-name justify-content-center">
                       <h3  className="mt-2">The God of Oceans</h3>
                    </Row>  
                           
                    <Row className="d-flex justify-content-center">
                        <Col sm="12" lg="6" className="imgCol my-auto text-center"> 
                            <div className="iframe-container">
                                <iframe title="A 3D model" className="sketchfab-ssk1 sketchfab-responsive" src="https://sketchfab.com/models/6e1274e10d9e4b6a922a5ed0baf9445f/embed?preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            </div>
                        </Col>
                        <Col sm="12" lg="6" className="featureCol my-auto">
                        <p className="text-center heading">Key Features</p>
                            <ul className="key-features-list">
                                <li><b style={{fontWeight:600}}>Modular design</b> for easy assembly and installation</li>
                                <li>Staging vehicle to carry out experiments</li>
                                <li>Capable of <b style={{fontWeight:600}}>underwater inspection and data collection </b></li>
                                <li>Upto <b style={{fontWeight:600}}>4 hours of continuous operation</b> capability</li>
                                <li>Budget of Rs. <b style={{fontWeight:600}}>7,45,000</b></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );


}
export default Posts;