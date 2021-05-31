/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
// import {
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     CardTitle,
//     Form,
//     Input,
//     InputGroupAddon,
//     InputGroupText,
//     InputGroup,
//     Container,
//     Row,
//     Col
// } from "reactstrap";

import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

// core components
import Subsytems from "./components/Subsystems/Subsystems";
import SubsystemHeads from './components/SubsystemHeads/SubsystemHeads';
import TeamVideo from './components/TeamVideo/TeamVideo';
import TeamHeads from "./components/TeamHeads/TeamHeads";

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
        <ExamplesNavbar activePage="/team"/>
            <div className="main">
                <TeamHeads style={{marginTop:"8rem"}}/>
                <Subsytems />
                {/* <SubsystemHeads /> */}
                <TeamVideo />
            </div>
        </div>
    );
}

export default LandingPage;
