import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {

    Container,
    Row,
    Col
} from "reactstrap";
import niotwin from '../../../../assets/img/niotwinner.jpeg';
import desbot from '../../../../assets/img/designbot.png';
import atwork from '../../../../assets/img/atwork.png';
import "./Subsystems.css"
import Software from "./Software"
import Electrical from "./Electrical"
import Mechanical from "./Mechanical"
import Business from "./Business"



function Posts() {
    return (
        <Router>
            <div className="section landing-section">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col className="ml-auto mr-auto" md="12">
                            <h2 className="text-center heading-main">Subsystems</h2>
                        </Col>

                    </Row>
                    <Row>
                        <Col md="3" xs="6" className="text-center subsys-link">
                            <Link to="/software">Software</Link>
                        </Col>
                        <Col md="3" xs="6" className="text-center subsys-link">
                            <Link to="/electrical">Electrical</Link>
                        </Col>
                        <Col md="3" xs="6" className="text-center subsys-link">
                            <Link to="/mechanical">Mechanical</Link>
                        </Col>
                        <Col md="3" xs="6" className="text-center subsys-link">
                            <Link to="/business">Business</Link>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Route path="/software" exact component={Software} />
                        <Route path="/electrical" exact component={Electrical} />
                        <Route path="/mechanical" exact component={Mechanical} />
                        <Route path="/business" exact component={Business} />
                    </Row>

                </Container>
            </div>
        </Router>
    );


}
export default Posts;