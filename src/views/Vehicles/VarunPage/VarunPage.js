
import React from "react";
// reactstrap components
import {

  Container,
  Row,
  Col
} from "reactstrap";

import ExamplesNavbar from "../../../components/Navbars/ExamplesNavbar";

// core components
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import SketchFabEmbed from './components/SketchFabEmbed/SketchFabEmbed'
import SubsystemSpecs from './components/SubsystemSpecs/SubsystemSpecs'
function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <div className="mobile-responsive">
    <ExamplesNavbar activePage="/vehicles/varun"/>
    <div className="section text-center ">
        <Container className="reduce-margin">
        
          <Row>
            <h2 className="heading-main">VARUN</h2>          
          </Row>
        </Container>
      </div>
      <div className="main">
        <KeyFeatures/>
        <SubsystemSpecs/>
      </div>  
    </div>
  );
}

export default LandingPage;
